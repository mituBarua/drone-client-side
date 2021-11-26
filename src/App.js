import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login/LoginRegister/Login";
import Register from "./pages/Login/LoginRegister/Register";
import AuthProvider from "./Context/AuthProvider";
import Home from "./pages/Home/Home/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
import Contact from "./pages/Contact/Contact";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Dashboard from "./pages/AdminDashboard/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/allproduct">
              <AllProducts />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/productDetails/:productId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
