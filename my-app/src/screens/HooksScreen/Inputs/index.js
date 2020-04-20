import React, {useState} from 'react';
import { TextField } from '@material-ui/core';

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
    const [inputValues, setInputValues] = useState({});

    const onInputChange = (event) => setInputValues({
        ...inputValues,
        [event.target.name]: event.target.value
    });

    return (
        <div>
            {
                Inputs.map(input => (
                    <>
                        <p>{input.name}</p>
                        <TextField
                            value={inputValues[input.name]}
                            name={input.name}
                            onChange={onInputChange}
                            key={input._keyName}
                        />
                    </>
                ))
            }
        </div>
    );
};

export default InputsScreen;
