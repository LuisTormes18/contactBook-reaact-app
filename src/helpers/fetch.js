// const base_url = process.env.REACT_APP_API_BASE_URL;

// const base_url = 'http://localhost:4001/api'
const base_url = "https://api-contactos1.herokuapp.com/api";

export const fetchWithOutToken = (url, body, method = "GET") => {
    console.log(base_url);

    return fetch(`${base_url}${url}`, {
        method,
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(body),
    });
};

export const fetchWithToken = (url, body = null, method = "GET") => {
    const token = localStorage.getItem("token");
    const init = {
        method,
        headers: {
            "Content-type": "application/json",
            authorization: token,
        },
    };
    !!body && (init.body = JSON.stringify(body));

    return fetch(`${base_url}/${url}`, init);
};
