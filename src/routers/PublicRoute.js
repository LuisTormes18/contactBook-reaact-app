import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

function PublicRoute({ isAuthenticated, component: Component, ...rest }) {
    return (
        <Route {...rest}>
            {isAuthenticated ? <Redirect to="/" /> : <Component />}
        </Route>
        
    );
}

export default PublicRoute;

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool,
};
