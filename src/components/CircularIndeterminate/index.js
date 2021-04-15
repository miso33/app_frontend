import React from 'react';
import {Box, CircularProgress} from '@material-ui/core/CircularProgress';
import {useStyles} from "./Style"


export default function CircularIndeterminate() {
    const classes = useStyles();
    return (
        <Box
            className={classes.root}
        >
            <CircularProgress
                size={100}
            />
        </Box>
    );
}
