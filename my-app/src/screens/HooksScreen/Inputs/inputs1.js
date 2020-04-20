import React, {useState} from 'react';
import { TextField } from '@material-ui/core';
import useInputChange from "../../../hooks/useInputChange";

const Inputs = [
    {
        _keyName: 'firstName1',
        name: 'firstName1',
    },
    {
        _keyName: 'lastName1',
        name: 'lastName1',
    },
    {
        _keyName: 'middleName1',
        name: 'middleName1',
    }
];

const InputsScreen1 = () => {
    const { inputValues, onInputChange } = useInputChange();


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

export default InputsScreen1;
