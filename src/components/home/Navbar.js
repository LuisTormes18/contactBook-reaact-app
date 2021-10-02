import React, { useContext } from "react";

import { startLogout } from "./../../actions/auth";
import authContext from "./../../context/auth/authContext";

function Navbar() {
    const [authState, dispatch] = useContext(authContext);
    function handleLogout() {
        dispatch(startLogout());
    }
    return (
        <div className="home__navbar">
            <div className="logo">
                <span>{authState.user?.name}</span>
            </div>
            <div className="">
                <button className="btn btn-dark" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Navbar;
