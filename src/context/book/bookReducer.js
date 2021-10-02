import { types } from "../../types/types";
export const initialState = {
    data: [],
    active: null,
};

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadContacts:
            return {
                ...state,
                data: action.payload,
            };
        case types.newContactAdd:
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        case types.deleteContact:
            return {
                ...state,
                data: state.data.filter((c) => c.id !== action.payload),
            };
        case types.loadContactForEdit:
            return {
                ...state,
                active: action.payload,
            };
        case types.updateContact:
            return {
                ...state,
                active: null,
                data: state.data.map((contact) =>
                    contact.id !== action.payload.id ? contact : action.payload
                ),
            };
        default:
            return state;
    }
};
