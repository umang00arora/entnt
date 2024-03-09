import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography, Card, CardContent } from "@material-ui/core";
import { Assignment, ShoppingCart } from "@material-ui/icons";

const Dashboard = () => {
  const totalProducts = 2;
  const totalOrders = 2;
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" gutterBottom style={{ color: 'white' }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Total Products
              </Typography>
              <Typography variant="h4">{totalProducts}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Total Orders
              </Typography>
              <Typography variant="h4">{totalOrders}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            color="primary"
            startIcon={<Assignment />}
          >
            Products Management
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            component={Link}
            to="/orders"
            variant="contained"
            color="primary"
            startIcon={<ShoppingCart />}
          >
            Orders Management
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
