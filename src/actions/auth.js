import { types } from "./../types/types";
import { fetchWithOutToken, fetchWithToken } from "./../helpers/fetch";

export const startLogin = async (userCred, dispatch) => {
    console.log("start login");

    const resp = await fetchWithOutToken("/auth", userCred, "POST");
    const result = await resp.json();

    if (result.ok) {
        const { user, token } = result;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch(login(user, token));
    } else {
        dispatch(setError(result.msg));
        console.log("error de respuesta :", result.msg);
    }
};

export const startRegister = async (userCred, dispatch) => {
    console.log("start register");
    const resp = await fetchWithOutToken("/auth/add", userCred, "POST");
    const result = await resp.json();

    if (result.ok) {
        const { user, token } = result;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch(login(user, token));
    } else {
        dispatch(setError(result.msg));
        console.log("error de respuesta :", result.msg);
    }
};

export const startLogout = () => {
    console.log("start logout");

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

export const startExistValidToken = async (dispatch) => {
    const token = localStorage.getItem("token") || null;

    if (token) {
        const resp = await fetchWithToken("/auth");
        const result = await resp.json();

        console.log(result)

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
