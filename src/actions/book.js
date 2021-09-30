import { fetchWithToken } from "../helpers/fetch";
import { types } from "./../types/types";

export const startLoadAllContacts = async (dispatch) => {
    const resp = await fetchWithToken("/contacts/");
    const result = await resp.json();

    console.log(result);

    dispatch(loadData(result.listContacts));
};

export const startAddNewContact = async (newContact, dispatch) => {
    const resp = await fetchWithToken("/contacts/add", newContact, "POST");
    const result = await resp.json();

    dispatch(refresh(newContact));
};

export const loadData = (data) => {
    return {
        type: types.loadContacts,
        payload: data,
    };
};

export const refresh = (newContact) => {
    return {
        type: types.newContactAdd,
        payload: newContact,
    };
};

export const startDeleteContact = async (id, dispatch) => {
    const resp = await fetchWithToken(`/contacts/delete/${id}`, null, "DELETE");
    const result = await resp.json();

    console.log(result);

    dispatch(contactDelete(id));
};
export const contactDelete = (id) => {
    return {
        type: types.deleteContact,
        payload: id,
    };
};

export const loadContactForEdit = (activeContact) => {
    return {
        type: types.loadContactForEdit,
        payload: activeContact,
    };
};
export const startUpdateContact = async (newData, dispatch) => {
    const resp = await fetchWithToken(
        `/contacts/update/${newData.id}`,
        { ...newData },
        "PUT"
    );
    const result = await resp.json();

    console.log(result);

    dispatch(contactUpdate(newData));
};

export const contactUpdate = (newData) => {
    return {
        type: types.updateContact,
        payload: newData,
    };
};

/*
router.put(`/update/:id`, [validarToken], update);

//Route para Eliminar un  contacto
router.delete(`/delete/:id`, [validarToken], del);


*/
