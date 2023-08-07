import React, {useContext} from 'react';
import {Text} from 'react-native';
import OrdersContext from '../context/orders/ordersContext';

const DishDetails = () => {
  const {selectedDish} = useContext(OrdersContext);

  return <Text>{selectedDish?.name}</Text>;
};

export default DishDetails;
