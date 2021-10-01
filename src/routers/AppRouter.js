import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";

import AuthRouter from "./AuthRouter";
import HomeScreen from "./../components/home/HomeScreen";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import authContext from "./../context/auth/authContext";
import { startExistValidToken } from "../actions/auth";
import Loading from "../components/ui/Loading";

function AppRouter() {
    const [authState, dispatch] = useContext(authContext);
    const { isAuthenticated } = authState;

    const [checking, setChecking] = useState(true);

    useEffect(() => {
        (async () => {
            await startExistValidToken(dispatch);
            setChecking(false);
        })();
    }, [dispatch]);

    if (checking) {
        return <Loading />;
    }

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isAuthenticated}
                    />
                    <PrivateRoute
                        path="/"
                        component={HomeScreen}
                        isAuthenticated={isAuthenticated}
                    />

                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;
