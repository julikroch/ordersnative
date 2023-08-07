//firebase
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  category: string;
  price: string;
};

export type Menu = {
  menu: [] | MenuItem[];
};

//orders
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
