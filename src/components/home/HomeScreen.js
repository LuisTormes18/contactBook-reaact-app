import React, { useContext, useEffect } from "react";
import {
    loadContactForEdit,
    startDeleteContact,
    startLoadAllContacts,
} from "./../../actions/book";
import bookContext from "./../../context/book/bookContext";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function HomeScreen() {
    const [bookState, dispatch] = useContext(bookContext);

    const { data } = bookState;

    useEffect(() => {
        startLoadAllContacts(dispatch);
    }, []);

    function handleEdit(record) {

        console.log(record)
        dispatch(loadContactForEdit(record));
    }
    function handleDelete(id) {
        startDeleteContact(id, dispatch);
    }
    return (
        <>
            <Navbar />

            <div className="home__container">
                <Sidebar />
                <div className="home__table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Direction</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!data ? (
                                <h2>Your Contact Apareceran Here.</h2>
                            ) : (
                                data.map((record) => (
                                    <tr key={record.id}>
                                        <td>{record.fullname}</td>
                                        <td>{record.email}</td>
                                        <td>{record.phone}</td>
                                        <td>{record.direction}</td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    handleEdit(record);
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => {
                                                    handleDelete(record.id);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default HomeScreen;
