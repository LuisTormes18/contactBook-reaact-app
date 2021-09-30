import React, { useReducer } from "react";

import bookContext from "./bookContext";
import { bookReducer, initialState } from "./bookReducer";

function BookProvider({ children }) {
    const [state, dispatch] = useReducer(bookReducer, initialState);
    return (
        <bookContext.Provider value={[state, dispatch]}>
            {children}
        </bookContext.Provider>
    );
}

export default BookProvider;
