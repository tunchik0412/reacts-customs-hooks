import React, {useState} from 'react';
import { TextField } from '@material-ui/core';

const Inputs = [
    {
        _keyName: 'firstName4',
        name: 'firstName4',
    },
    {
        _keyName: 'lastName4',
        name: 'lastName4',
    },
    {
        _keyName: 'middleName4',
        name: 'middleName4',
    }
];

const InputsScreen4 = () => {
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

export default InputsScreen4;
