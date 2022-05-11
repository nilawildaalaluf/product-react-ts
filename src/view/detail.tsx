/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import style from "styled-components";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import { selectedProduct, removeSelectedProduct } from "../redux/actions";
import { Typography } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const DetailRoot = style.div`
  display: flex;
  padding: 24px;
  overflow: hidden;
  justify-content: space-between;
  grid-gap: 32px;
  margin: 10%;
`;
const PriceStyle = style.div`
    text-align: left;
    color: #ffffff;
    margin-top: 2rem;
    background: #ecf0f1;
    padding: 0.5rem;
`;

const TextPrice = style.div`
  display: flex;
  justify-content: space-between;
  color: #000;
`;

const DetailContent = style.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

const TextContent = style.div`
  display: flex;
  justify-content: space-between;
  color: #000;
  margin-left: 2rem;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75;
  letter-spacing: 0.00938em;
  margin-bottom: 0.35em;
  text-align: left;
  width: 80%;
`;

export const BreadcrumbItem = style.li`
  display: inline;
  font-size: 12px;
  line-height: 1em;
  color: #bdc3c7;

  &:after {
    content: "/";
    padding: 5px;
  }

  &:last-child:after {
    content: "";
  }

  a {
    color: #00a2d8;
    text-decoration: none;
  }
`;

export const BreadcrumbItemLink = style.label`
  color: #3498db;
  text-decoration: none;
  cursor: pointer;
`;

const BreadcrumbWrapper = style.ul`
  list-style: none;
  padding: 0;
  justify-content: left;
  text-align: left;
  margin-left: 10rem;
`;

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state: any) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id: any) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  console.log(product, "detail");
  return (
    <Paper variant="outlined" className="ui grid container">
      <BreadcrumbWrapper className="breadcrumb">
        <BreadcrumbItem>
          <BreadcrumbItemLink role="link">Shopping List</BreadcrumbItemLink>
        </BreadcrumbItem>
        <BreadcrumbItem>Detail</BreadcrumbItem>
      </BreadcrumbWrapper>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <DetailRoot>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 250, height: 250 }}>
                <Img alt="complex" src={image} />
              </ButtonBase>
            </Grid>
            <Grid
              item
              xs
              container
              direction="column"
              spacing={2}
              style={{ margin: "2rem" }}
            >
              <DetailContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Product Name:
                </Typography>
                <TextContent>{title}</TextContent>
              </DetailContent>
              <DetailContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Description:
                </Typography>
                <TextContent>{description}</TextContent>
              </DetailContent>
              <DetailContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Category:
                </Typography>
                <TextContent>{category}</TextContent>
              </DetailContent>
              <PriceStyle>
                <TextPrice>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Price:
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    $ {price}
                  </Typography>
                </TextPrice>
              </PriceStyle>
            </Grid>
          </Grid>
        </DetailRoot>
      )}
    </Paper>
  );
};

export default ProductDetails;
