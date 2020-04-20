import React, {useState} from 'react';
import { TextField } from '@material-ui/core';

const Inputs = [
    {
        _keyName: 'firstName2',
        name: 'firstName2',
    },
    {
        _keyName: 'lastName2',
        name: 'lastName2',
    },
    {
        _keyName: 'middleName2',
        name: 'middleName2',
    }
];

const InputsScreen2 = () => {
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

export default InputsScreen2;
