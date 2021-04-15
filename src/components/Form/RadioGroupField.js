import React from 'react';
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

export const RadioGroupField = ({label, name, onChange, touched, error, value}) => {
    let isError = error !== undefined && touched

    return (
        <div>
            <FormControl component="fieldset" error={isError}>
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup
                    aria-label={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    <FormControlLabel value={"true"} control={<Radio/>} label="Áno"/>
                    <FormControlLabel value={"false"} control={<Radio/>} label="Nie"/>
                </RadioGroup>
            </FormControl>
        </div>


    );
}
