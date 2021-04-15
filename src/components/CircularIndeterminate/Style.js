import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '75vh',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}));