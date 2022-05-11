import { IProduct } from "./reducers/productReduser";
export enum ActionTypes {
  SET_PRODUCTS = "SET_PRODUCTS",
  SELECTED_PRODUCT = "SELECTED_PRODUCT",
  REMOVE_SELECTED_PRODUCT = "REMOVE_SELECTED_PRODUCT",
}

interface setProducts {
  type: ActionTypes.SET_PRODUCTS;
  payload: IProduct[];
}

interface selectedProduct {
  type: ActionTypes.SELECTED_PRODUCT;
  payload: IProduct[];
}
interface removeSelectedProduct {
  type: ActionTypes.REMOVE_SELECTED_PRODUCT;
}
export type Action = setProducts | selectedProduct | removeSelectedProduct;
