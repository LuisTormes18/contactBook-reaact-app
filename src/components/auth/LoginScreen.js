import React, { useContext } from "react";
import { Link } from "react-router-dom";

import useForm from "./../../hooks/useForm";
import authContext from "./../../context/auth/authContext";
import { startLogin } from "./../../actions/auth";

function LoginScreen() {
    const [authState, dispatch] = useContext(authContext);

    console.log(authState);

    const [stateValues, handleInputChange] = useForm({
        email: "",
        password: "",
    });

    const { email, password } = stateValues;

    function handleSubmit(e) {
        e.preventDefault();

        startLogin({ email, password }, dispatch);
        // dispatch(startLogin({email,password},dispatch))
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    value={email}
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    value={password}
                />
                <input type="submit" value="Login" />

                {authState.msgError && <h2>{authState.msgError}</h2>}

                <Link to="/auth/register">Crear una Cuenta</Link>
            </form>
        </div>
    );
}

export default LoginScreen;
