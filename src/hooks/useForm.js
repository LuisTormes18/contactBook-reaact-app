import { useState } from "react";

function useForm(initialState) {
    const [state, setState] = useState(initialState);

    function reset(newState = initialState) {
        setState(newState);
    }
    function handleInputChange({ target }) {
        setState({ ...state, [target.name]: target.value });
    }
    return [state, handleInputChange, reset];
}

export default useForm;
