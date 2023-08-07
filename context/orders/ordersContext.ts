import {createContext} from 'react';
import {MenuItem} from '../../types';

type InitialContext = {
  order: [];
  selectedDish: MenuItem | null;
  selectedProduct: (item: MenuItem) => void;
};

const OrdersContext = createContext<InitialContext>({
  order: [],
  selectedDish: null,
  selectedProduct: () => {},
});

export default OrdersContext;
