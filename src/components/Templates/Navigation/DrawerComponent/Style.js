import {fade, makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    list: {
        width: 250
    },
    linkto: {
        textDecoration: 'none',
        color: fade(theme.palette.common.black, 1),
    },
    hidden: {
        visibility: "hidden",
        position: "relative"
    }
}));