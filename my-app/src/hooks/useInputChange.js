import React, {useState} from 'react';

const useInputChange = () => {

    const [inputValues, setInputValues] = useState({});

    const onInputChange = (event) => setInputValues({
        ...inputValues,
        [event.target.name]: event.target.value
    });

    return {
        inputValues,
        onInputChange
    }
};

export default useInputChange;
