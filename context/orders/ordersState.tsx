import React, {useReducer} from 'react';

import OrdersReducer from './ordersReducer';
import OrdersContext from './ordersContext';

import {MenuItem, SELECT_PRODUCT} from '../../types';

type InitialState = {
  order: [];
  selectedDish: MenuItem | null;
};

const OrdersState = (props: {children: React.ReactNode}) => {
  const initialState: InitialState = {
    order: [],
    selectedDish: null,
  };

  const [state, dispatch] = useReducer(OrdersReducer, initialState);

  const selectedProduct = (item: MenuItem) => {
    dispatch({
      type: SELECT_PRODUCT,
      payload: item,
    });
  };

  return (
    <OrdersContext.Provider
      value={{
        order: state.order,
        selectedDish: state.selectedDish,
        selectedProduct,
      }}>
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersState;
