import { ActionTypes, Action } from "../action-types";

export interface IProduct {
  id: number;
  title: string;
  body: string;
  image: string;
  price: string;
  category: string;
}

interface State {
  products: IProduct[];
}

const intialState = {
  products: [],
};

export const productsReducer = (
  state: State = intialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, action: Action) => {
  console.log(action.type, "selected");
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...action.payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
