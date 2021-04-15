import React from 'react';
import {Checkbox} from '@material-ui/core';

export const CheckBoxFiled = ({name, value, onBlur, onChange, onClick}) => {
    return (
        <Checkbox
            id={name}
            name={name}
            checked={value}
            onBlur={onBlur}
            onChange={onChange}
            onClick={onClick}
        />
    );
}