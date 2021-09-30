import React, { useContext } from "react";
import { Link } from "react-router-dom";

import useForm from "./../../hooks/useForm";
import authContext from "./../../context/auth/authContext";
import { startRegister } from "./../../actions/auth";

function RegisterScreen() {
    const [authState, dispatch] = useContext(authContext);

    console.log(authState);

    const [stateValues, handleInputChange] = useForm({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password, password2 } = stateValues;

    function handleSubmit(e) {
        e.preventDefault();

        startRegister({ name, email, password }, dispatch);
    }
    function isFormValid() {}
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    value={name}
                />
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
                <input
                    type="password"
                    name="password2"
                    onChange={handleInputChange}
                    value={password2}
                />
                <input type="submit" value="Register" />

                {authState.msgError && <h2>{authState.msgError}</h2>}
                
                <Link to="/auth/login">ya tengo una cuenta!</Link>
            </form>
        </div>
    );
}

export default RegisterScreen;
