import React, { useContext, useEffect } from "react";
import { startAddNewContact, startUpdateContact } from "../../actions/book";
import bookContext from "../../context/book/bookContext";
import useForm from "./../../hooks/useForm";

function Sidebar() {
    const [bookState, dispatch] = useContext(bookContext);

    const [stateValues, handleInputChange, reset] = useForm({
        fullname: "",
        email: "",
        phone: "",
        direction: "",
    });

    useEffect(() => {
        if (bookState.active) {
            reset({ ...bookState.active });
        }
    }, [bookState.active]);

    const { fullname, email, phone, direction } = stateValues;

    function handleCliackAdd(e) {
        e.preventDefault();
        startAddNewContact({ fullname, email, phone, direction }, dispatch);
    }
    function handleClickSaveEdit(e) {
        e.preventDefault();
        startUpdateContact(
            { fullname, email, phone, direction, id: bookState.active.id },
            dispatch
        );
        reset();
    }

    return (
        <div className="home__sidebar">
            <form>
                <div class="form-group">
                    <label>Nombre Completo</label>
                    <input
                        type="text"
                        name="fullname"
                        className="form-control"
                        value={fullname}
                        onChange={handleInputChange}
                    />
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div class="form-group">
                    <label>Telefono</label>
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={phone}
                        onChange={handleInputChange}
                    />
                </div>

                <div class="form-group">
                    <label>Direccion</label>
                    <input
                        type="text"
                        name="direccion"
                        className="form-control"
                        value={direction}
                        onChange={handleInputChange}
                    />
                </div>
                {!bookState.active ? (
                    <button onClick={handleCliackAdd}>Add New Contact</button>
                ) : (
                    <button onClick={handleClickSaveEdit}>Save Edit</button>
                )}
            </form>
        </div>
    );
}

export default Sidebar;
