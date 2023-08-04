import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Button, Text} from 'native-base';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootStackParamList} from '../types/navigation';

const NewOrder = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Menu'>>();

  return (
    <Container style={[globalStyles.container, styles.container]}>
      <View style={[globalStyles.content, styles.content]}>
        <Button
          style={globalStyles.button}
          rounded="full"
          onPress={() => navigation.navigate('Menu')}>
          <Text style={globalStyles.buttonText}>Create new order</Text>
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'center',
  },
});

export default NewOrder;
