import { types } from "./../../types/types";
export const initialState = {
    token: localStorage.getItem("token") || null,
    user: localStorage.getItem("user") || null,
    isAuthenticated: false,
    msgError: null,
    btnDisabled: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.isValidToken:
            return {
                ...state,
                isAuthenticated: true,
            };
        case types.login:
            return {
                token: action.payload.token,
                user: action.payload.user,
                msgError: null,
                isAuthenticated: true,
            };
        case types.loginError:
            return {
                ...state,
                msgError: action.payload,
            };
        case types.logout:
            return {
                ...initialState,
                token: null,
                user: null,
            };
        case types.isDisabledBtn:
            return {
                ...state,
                btnDisabled: action.payload,
            };

        default:
            return state;
    }
};
