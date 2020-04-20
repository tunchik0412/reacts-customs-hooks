import React, {useState} from 'react';
import { TextField } from '@material-ui/core';

const Inputs = [
    {
        _keyName: 'firstName3',
        name: 'firstName3',
    },
    {
        _keyName: 'lastName3',
        name: 'lastName3',
    },
    {
        _keyName: 'middleName3',
        name: 'middleName3',
    }
];

const InputsScreen3 = () => {
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

export default InputsScreen3;
