import {createContext} from 'react';
import {MenuItem} from '../../types';

type InitialContext = {
  menu: [] | MenuItem[];
  getProducts: () => void;
};

const FirebaseContext = createContext<InitialContext>({
  menu: [],
  getProducts: () => {},
});

export default FirebaseContext;
