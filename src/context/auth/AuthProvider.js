import React, { useReducer } from "react";

import authContext from "./authContext";
import { authReducer, initialState } from "./authReducers";

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState);
    
    return (
        <authContext.Provider value={[state, dispatch]}>
            {children}
        </authContext.Provider>
    );
}

export default AuthProvider;
