import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

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
    const [isLoad, setIsLoad] = useState(true);

    const { data } = bookState;

    useEffect(() => {
        (async () => {
            await startLoadAllContacts(dispatch);
            setIsLoad(false);
        })();
    }, [dispatch]);

    function handleEdit(record) {
        dispatch(loadContactForEdit(record));
    }
    async function handleDelete(id) {
        const result = await Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });
        if (result.isConfirmed) {
            await startDeleteContact(id, dispatch);
            Swal.fire("Delete Success!", "", "success");
        }
    }
    return (
        <>
            <Navbar />

            <div className="home__container">
                <Sidebar />
                <div className="home__table">
                    {isLoad ? (
                        <span>Loading...</span>
                    ) : (
                        <div>
                            {data.length <= 0 ? (
                                <p>Aui apareceran tus contactos.</p>
                            ) : (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Direction</th>
                                            <th className="actions">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((record) => (
                                            <tr key={record.id}>
                                                <td>{record.fullname}</td>
                                                <td>{record.email}</td>
                                                <td>{record.phone}</td>
                                                <td>{record.direction}</td>
                                                <td className="actions actions-btn">
                                                    <button
                                                        className="btn btn-outline-primary"
                                                        onClick={() => {
                                                            handleEdit(record);
                                                        }}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn btn-outline-danger"
                                                        onClick={() => {
                                                            handleDelete(
                                                                record.id
                                                            );
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default HomeScreen;
