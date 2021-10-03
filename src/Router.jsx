import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Main} from "./pages/Main/Main";
import {Entities} from "./pages/Entities/Entities";
import {Entity} from "./pages/Entities/Entity/Entity";


export const Router = () => {

    return (
        <Switch>
            <Route path={process.env.REACT_APP_CLIENT_HOME} component={Main} exact/>
            <Route path={process.env.REACT_APP_CLIENT_HOME+':id'} component={Entities} exact/>
            <Route path={process.env.REACT_APP_CLIENT_PERSON+':id'} component={Entity} exact/>




            <Redirect to={process.env.REACT_APP_CLIENT_HOME} component={Main} exact/>
        </Switch>
    )

}