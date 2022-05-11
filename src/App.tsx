import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/header";
import ProductList from "./view/index";
import ProductDetail from "./view/detail";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/product-react-ts"
            element={
              <Provider store={store}>
                <ProductList />
              </Provider>
            }
          />
          <Route
            path="/product-react-ts/product/:productId"
            element={
              <Provider store={store}>
                <ProductDetail />
              </Provider>
            }
          />
          <Route> 404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
