import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productReduser";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});

export default reducers;
