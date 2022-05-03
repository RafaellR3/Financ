
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import Detalhes from "pages/Detalhes";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "pages/Login";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"  component={() => <Login />} /> 
                <PrivateRoute  path="/Home" component={() => <Home />} />
                <PrivateRoute  path="/dashboard" component={() =>  <Dashboard />} />
                <PrivateRoute  path="/detalhes/:idMes" component={() =>  <Detalhes />} />
            </Switch>
        </BrowserRouter>
);

export default Routes;