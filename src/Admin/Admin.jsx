import {
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CreateProductForm from "./Components/CreateProductForm";
import ProductsTable from "./Components/ProductsTable";
import OrdersTable from "./Components/OrdersTable";
// import CustomerTable from "./Components/CustomerTable";
import AdminDashboard from "./Components/AdminDashboard";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
  // { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
  {
    name: "Add Product",
    path: "/admin/product/create",
    icon: <DashboardIcon />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <>
        <List>
          {menu.map((item) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="flex h-[100vh]">
      <CssBaseline />
      <div className="shadow-lg shadow-gray-600 w-[15%] h-full fixed top-0">
        {drawer}
      </div>
      <div className="w-[85%] h-full ml-[16%]">
        <Routes>
          <Route path="/" element={<AdminDashboard />}></Route>
          <Route path="/product/create" element={<CreateProductForm />}></Route>
          <Route path="/products" element={<ProductsTable />}></Route>
          <Route path="/orders" element={<OrdersTable />}></Route>
          {/* <Route path="/customers" element={<CustomerTable />}></Route> */}
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
