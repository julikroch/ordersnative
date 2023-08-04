import React, {useReducer} from 'react';

import {GET_PRODUCTS_SUCCESS, Menu} from '../../types';

import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

const FirebaseState = (props: {children: React.ReactNode}) => {
  const initialState: Menu = {
    menu: [
      {
        id: 1,
        name: 'Prueba',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium labore ipsam magni incidunt minima sequi esse minus atque laudantium architecto iste voluptas, libero vitae recusandae. Sed commodi distinctio optio!',
        category: 'Prueba',
        price: '14',
      },
      {
        id: 2,
        name: 'Prueba2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium labore ipsam magni incidunt minima sequi esse minus atque laudantium architecto iste voluptas, libero vitae recusandae. Sed commodi distinctio optio!',
        category: 'Prueba2',
        price: '15',
      },
    ],
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  const getProducts = () => {
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: initialState.menu,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        menu: state.menu,
        getProducts,
      }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
