const base_url = process.env.REACT_APP_API_BASE_URL;

const fetchWithOutToken = (url, body, method = "GET") => {
    return fetch(`${base_url}/${url}`, {
        method,
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(body),
    });
};

const fetchWithToken = (url, body, method = "GET") => {
    const token = "token";
    return fetch(`${base_url}/${url}`, {
        method,
        headers: {
            "Content-type": "application/json",
            authentication: token,
        },
        body: JSON.stringify(body),
    });
};
