/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import FirebaseContext from '../context/firebase/firebaseContext';
import {Container, Text, View} from 'native-base';
import globalStyles from '../styles/global';
import type {MenuItem} from '../types';
import {StyleSheet} from 'react-native';

const Menu = () => {
  const {menu, getProducts} = useContext(FirebaseContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container style={[globalStyles.container, styles.container]}>
      <View style={styles.content}>
        {menu.map((item: MenuItem) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.name}>Name: {item.name}</Text>
            <Text numberOfLines={2}>Description: {item.description}</Text>
            <Text>$ {item.price}</Text>
          </View>
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
});

export default Menu;
