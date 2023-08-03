import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Button, Text} from 'native-base';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';

const NewOrder = () => {
  const navigation = useNavigation();

  return (
    <Container style={globalStyles.container}>
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
  content: {
    justifyContent: 'center',
  },
});

export default NewOrder;
