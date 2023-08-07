import {MenuItem, SELECT_PRODUCT} from '../../types';

interface Action {
  type: string;
  payload: any;
}

interface State {
  order: [];
  selectedDish: MenuItem | null;
}

export default (state: State, action: Action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedDish: action.payload,
      };
    default:
      return state;
  }
};
