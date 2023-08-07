/* eslint-disable react-hooks/exhaustive-deps */
import React, {Fragment, useContext, useEffect} from 'react';
import FirebaseContext from '../context/firebase/firebaseContext';
import OrdersContext from '../context/orders/ordersContext';
import {Container, Text, View} from 'native-base';
import globalStyles from '../styles/global';
import type {MenuItem} from '../types';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation';

const Menu = () => {
  const {menu, getProducts} = useContext(FirebaseContext);
  const {selectedProduct} = useContext(OrdersContext);
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'DishDetails'>>();

  const showHeading = (category: MenuItem['category'], i: number) => {
    if (i === 0 || menu[i - 1].category !== category) {
      return <Text style={styles.separator}>{category}</Text>;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container style={[globalStyles.container, styles.container]}>
      <View style={styles.content}>
        {menu?.map((item: MenuItem, i: number) => (
          <Fragment key={item.id}>
            {showHeading(item.category, i)}
            <TouchableOpacity
              onPress={() => {
                selectedProduct(item);
                navigation.navigate('DishDetails');
              }}
              style={styles.item}>
              <Text style={styles.name}>Name: {item.name}</Text>
              <Text style={styles.description} numberOfLines={2}>
                Description: {item.description}
              </Text>
              <Text style={styles.price}>$ {item.price}</Text>
            </TouchableOpacity>
          </Fragment>
        ))}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
  },
  content: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  item: {
    paddingBottom: 32,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    paddingVertical: 10,
  },
  price: {
    fontSize: 16,
    paddingTop: 10,
  },
  separator: {
    backgroundColor: '#000',
    color: '#ffda00',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Menu;
