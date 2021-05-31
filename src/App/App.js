import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../public.routes";
import "./index.scss";

function App() {
    const publicRoute = routes.map((route, index) => {
        return route.component ? (
            <Route key={index} path={route.path} exact={route.exact} name={route.name} render={(props) => <route.component {...props} />} />
        ) : null;
    });
    return <Switch>{publicRoute}</Switch>;
}

export default App;
