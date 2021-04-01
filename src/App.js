import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Admin from './Component/Admin/Admin';
import CheckOut from './Component/CheckOut/CheckOut';
import Login from './Component/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Orders from './Component/Orders/Orders';
import AddProduct from './Component/AddProduct/AddProduct';

export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({})
  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
          <PrivateRoute path="/checkOut/:id">
            <Header />
            <CheckOut />
          </PrivateRoute>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
