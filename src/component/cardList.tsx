import * as React from "react";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useSelector } from "react-redux";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const List = () => {
  const product = useSelector((state: any) => state?.allProducts.products);
  console.log(product, "childe");
  const renderList = product.map((product: any) => {
    const { id, title, image, price, category } = product;
    return (
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src={image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category: {category}
                </Typography>
              </Grid>
              <Grid item>
                <Link href={`/product-react-ts/product/${id}`} underline="none">
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    See Detail
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                ${price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  });
  return <>{renderList}</>;
};

export default List;
