import React from "react";
import { Redirect, Route, Switch } from "react-router";
import LoginScreen from "./../components/auth/LoginScreen";
import RegisterScreen from "./../components/auth/RegisterScreen";

function AuthRouter() {
    return (
        <div className="auth">
            <div className='text'> 
                <h1>Contact Book</h1>
                <p>lorem register for add new contact</p>
            </div>
            <div className='div'>
                <Switch>
                    <Route exact path="/auth/login" component={LoginScreen} />
                    <Route
                        exact
                        path="/auth/register"
                        component={RegisterScreen}
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    );
}

export default AuthRouter;
