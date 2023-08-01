import React, {useReducer} from 'react';

import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

type Menu = {
  menu: string[];
};

const FirebaseState = (props: {children: React.ReactNode}) => {
  const initialState: Menu = {
    menu: [],
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  return (
    <FirebaseContext.Provider
      value={{
        menu: state.menu,
      }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
