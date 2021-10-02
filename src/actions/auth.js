import { types } from "./../types/types";
import { fetchWithOutToken, fetchWithToken } from "./../helpers/fetch";

export const startLogin = async (userCred, dispatch) => {
    dispatch(disabledBtn(true));
    const resp = await fetchWithOutToken("/auth", userCred, "POST");
    const result = await resp.json();

    if (result.ok) {
        const { user, token } = result;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch(login(user, token));
    } else {
        dispatch(setError(result.msg));
        dispatch(disabledBtn(false));
    }
};

export const startRegister = async (userCred, dispatch) => {
    
    dispatch(disabledBtn(true));
    
    const resp = await fetchWithOutToken("/auth/add", userCred, "POST");
    const result = await resp.json();

    if (result.ok) {
        const { user, token } = result;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch(login(userCred, token));
    } else {
        dispatch(setError(result.msg));
        dispatch(disabledBtn(false));
        
    }
};

export const startLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    return {
        type: types.logout,
    };
};

const login = (user, token) => {
    return {
        type: types.login,
        payload: {
            user,
            token,
        },
    };
};
export const setError = (msg) => {
    return {
        type: types.loginError,
        payload: msg,
    };
};
export const setErrorToNull = () => {
    return {
        type: types.loginError,
        payload: null,
    };
};

export const startExistValidToken = async (dispatch) => {
    const token = localStorage.getItem("token") || null;

    if (token) {
        const resp = await fetchWithToken("/auth");
        const result = await resp.json();

        if (result.ok) {
            dispatch(isLogged());
        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
    }
};

const isLogged = () => {
    return {
        type: types.isValidToken,
    };
};

const disabledBtn = (isDisabled) => {
    return {
        type: types.isDisabledBtn,
        payload: isDisabled,
    };
};
