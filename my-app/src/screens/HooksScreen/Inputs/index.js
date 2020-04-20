import React, {useState} from 'react';
import { TextField } from '@material-ui/core';
import useInputChange from "../../../hooks/useInputChange";

const Inputs = [
    {
        _keyName: 'firstName',
        name: 'firstName',
    },
    {
        _keyName: 'lastName',
        name: 'lastName',
    },
    {
        _keyName: 'middleName',
        name: 'middleName',
    }
];

const InputsScreen = () => {
    // const [inputValues, setInputValues] = useState({});
    //
    // const onInputChange = (event) => {
    //     setInputValues({
    //         ...inputValues,
    //         [event.target.name]: event.target.value});
    // };

    const { inputValues, onInputChange } = useInputChange();

    return (
        <div>
            {
                Inputs.map((input, index) => (
                    <React.Fragment key={index}>
                        <p>{input.name}</p>
                        <TextField
                            value={inputValues[input.name]}
                            name={input.name}
                            onChange={onInputChange}
                            key={input._keyName}
                        />
                    </React.Fragment>
                ))
            }
        </div>
    );
};

export default InputsScreen;
