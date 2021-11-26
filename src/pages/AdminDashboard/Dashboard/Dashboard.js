import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from "@mui/material";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import AddAProduct from "../AddAProduct/AddAProduct";
import Admin from "../Admin/Admin";
import useAuth from "../../../Hooks/useAuth";
import ManageProducts from "../ManageProducts/ManageProducts";
import "./Dashboard.css";
import PaymentLink from "../../UserDashboard/PaymentLink/PaymentLink";
import MyOrder from "../../UserDashboard/MyOrder/MyOrder";
import AddAReview from "../../UserDashboard/AddaReview/AddaReview";

import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import PrivateRoute from "../../Login/PrivateRoute/PrivateRoute";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { user, admin, logOut } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="custom-drawer">
      <Toolbar>
        <Typography className="user-name">
          <p>
            Welcome!
            <br /> {user?.displayName}
          </p>
        </Typography>
      </Toolbar>

      <Divider />

      <div className="dashboard-link">
        <Link to="/">
          <Button color="inherit">Home</Button>
        </Link>
        <Link to={`${url}`}>
          <Button color="inherit">Dashboard</Button>
        </Link>
        {user && !admin && (
          <>
            <Link to={`${url}/payment`}>
              <Button color="inherit">PaymentLink</Button>
            </Link>
            <Link to={`${url}/myorder`}>
              <Button color="inherit">My Order</Button>
            </Link>
            <Link to={`${url}/addReview`}>
              <Button color="inherit">Add A Review</Button>
            </Link>
          </>
        )}

        {admin &&  (
          <>
            <Link to={`${url}/makeAdmin`}>
              <Button color="inherit">Make Admin</Button>
            </Link>
            <Link to={`${url}/manageAllOrder`}>
              <Button color="inherit">Manage All Order</Button>
            </Link>
            <Link to={`${url}/manageProducts`}>
              <Button color="inherit">Manage Product</Button>
            </Link>
            <Link to={`${url}/addProduct`}>
              <Button color="inherit">Add A Product</Button>
            </Link>
          </>
        )}

        {!user?.email ? (
          <Link to="/login">Login</Link>
        ) : (
          
            <Button onClick={logOut} variant="light">
              Logout
            </Button>
         
        )}
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px`,md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <Admin></Admin>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddAProduct></AddAProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrder`}>
            <ManageAllOrder></ManageAllOrder>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <PrivateRoute path={`${path}/payment`}>
            <PaymentLink></PaymentLink>
          </PrivateRoute>
          <PrivateRoute path={`${path}/myorder`}>
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path={`${path}/addReview`}>
            <AddAReview></AddAReview>
          </PrivateRoute>

        
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
