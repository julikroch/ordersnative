import React, {useReducer} from 'react';

import OrdersReducer from './ordersReducer';
import OrdersContext from './ordersContext';

type Menu = {
  order: string[];
};

const OrdersState = (props: {children: React.ReactNode}) => {
  const initialState: Menu = {
    order: [],
  };

  const [state, dispatch] = useReducer(OrdersReducer, initialState);

  return (
    <OrdersContext.Provider
      value={{
        order: state.order,
      }}>
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersState;
