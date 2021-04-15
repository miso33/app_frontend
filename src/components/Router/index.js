import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container} from "@material-ui/core";

import PrivateRoute from "./PrivateRoute";
import Navigation from '../Templates/Navigation';
import LoginForm from '../Templates/LoginForm';
import Footer from "../Templates/FooterMy";
import Logout from "../Token/Logout";
import User from "../../sites/User";
import Homepage from "../../sites/Homepage";

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Navigation/>
                <Container fixed>
                    <Switch>
                        <PrivateRoute path="/" component={Homepage} exact/>
                        <PrivateRoute path="/users" component={User}/>
                        <Route path="/login" component={LoginForm}/>
                        <PrivateRoute path="/logout" component={Logout}/>
                    </Switch>
                    <Footer/>
                </Container>
            </BrowserRouter>
        </div>
    );
}
