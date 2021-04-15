import React from 'react';
import {Switch, FormControlLabel} from '@material-ui/core';

export const SwitchField = ({name, value, onBlur, checked, onChange, onClick, label, labelPlacement}) => {
    return (
        <FormControlLabel
            control={
                <Switch
                    checked={checked}
                    onChange={onChange}
                    name={name}
                    color="primary"
                />
            }
            label={label}
        />
    );
}



