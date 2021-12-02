
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import Detalhes from "pages/Detalhes";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact> <Home /> </Route>
                <Route path="/dashboard"> <Dashboard /> </Route>
                <Route path="/detalhes/:id" component={Detalhes}> <Detalhes />  </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;