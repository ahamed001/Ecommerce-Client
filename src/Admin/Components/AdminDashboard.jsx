import { Grid } from "@mui/material";
import React from "react";
import Achievement from "./Achievement";
import MonthlyOverview from "./MonthlyOverview";
import ProductsTableView from "../View/ProductsTableView";
import OrdersTableView from "../View/OrdersTableView";

const AdminDashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-600">
            <Achievement />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="shadow-lg shadow-gray-600">
            <MonthlyOverview />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <OrdersTableView />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <ProductsTableView />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
