
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import Detalhes from "pages/Detalhes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "pages/Login";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact> <Login /> </Route>
                <Route path="/Home" > <Home /> </Route>
                <Route path="/dashboard"> <Dashboard /> </Route>
                <Route path="/detalhes/:idMes"> <Detalhes />  </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;