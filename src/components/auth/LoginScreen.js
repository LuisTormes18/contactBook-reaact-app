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
            <form className='form' onSubmit={handleSubmit}>
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
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Login"
                    />
                </div>

                {authState.msgError && <h2>{authState.msgError}</h2>}

                <Link className='link' to="/auth/register">Crear una Cuenta</Link>
            </form>
        </div>
    );
}

export default LoginScreen;
