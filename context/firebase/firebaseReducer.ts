import {GET_PRODUCTS_SUCCESS, Menu} from '../../types';

interface Action {
  type: string;
  payload: any;
}

interface State {
  menu: Menu;
}

export default (state: State, action: Action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        menu: action.payload,
      };

    default:
      return state;
  }
};
