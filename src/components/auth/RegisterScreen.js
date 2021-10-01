import React, { useContext } from "react";
import { Link } from "react-router-dom";
import validator from "validator";

import useForm from "./../../hooks/useForm";
import authContext from "./../../context/auth/authContext";
import { setError, startRegister } from "./../../actions/auth";

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

    async function handleSubmit(e) {
        e.preventDefault();
        if (isFormValid()) {
            await startRegister({ name, email, password }, dispatch);
        }
    }
    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError("Name is required!"));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError("Email Invalid"));
            return false;
        } else if (password !== password2) {
            dispatch(setError("passowrd no coinciden"));

            return false;
        } else if (password.length <= 5) {
            dispatch(setError("El minimo debe ser 5 caracteres"));
            return false;
        }
        return true;
    };
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={handleInputChange}
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={handleInputChange}
                        value={email}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={handleInputChange}
                        value={password}
                    />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="password2"
                        className="form-control"
                        onChange={handleInputChange}
                        value={password2}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Register"
                    />
                </div>

                {authState.msgError && (
                    <div className="alert alert-danger" role="alert">
                        {authState.msgError}
                    </div>
                )}

                <Link className="link" to="/auth/login">
                    ya tengo una cuenta!
                </Link>
            </form>
        </div>
    );
}

export default RegisterScreen;
