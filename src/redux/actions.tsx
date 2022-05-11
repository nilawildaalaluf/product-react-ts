import { ActionTypes } from "./action-types";

export const setProducts = (products: any) => {
  console.log(products, "action");
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products.data,
  };
};

export const selectedProduct = (product: any) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product.data,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
