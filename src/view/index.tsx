import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import ProductComponent from "../component/cardList";
import { setProducts } from "../redux/actions";

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  border-bottom: 1px solid rgb(239, 239, 239);
  padding: 24px;
  overflow: hidden;
  margin-left: 5rem;
  margin-right: 5rem;
`;

const ProductList = () => {
  const product = useSelector((state: any) => state?.allProducts.products);
  const dispatch = useDispatch();

  const fectProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err, "error");
      });
    dispatch(setProducts(response));
    console.log(response, "response");
  };
  useEffect(() => {
    fectProducts();
  }, []);
  console.log(product, "data");
  return (
    <ContentContainer>
      <ProductComponent />
    </ContentContainer>
  );
};

export default ProductList;
