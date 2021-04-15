import React, {useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import {Form, Formik} from "formik";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {ValidationSchema} from "./ValidationSchema";
import {InputField} from "../../Form/InputField";
import post from "../../axios/post";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LoginErrorMessage from "./LoginErrorMessage";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(18),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function LoginForm() {
    let history = useHistory();
    let location = useLocation();
    let {from} = location.state || {from: {pathname: "/"}};
    const [access, setAccess] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const classes = useStyles();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <LoginErrorMessage
                access={access}
            />
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    computer: localStorage.getItem("computer") ? localStorage.getItem("computer") : ""
                }}
                validationSchema={ValidationSchema}
                enableReinitialize={true}
                validator={() => ({})}
                onSubmit={(values, actions) => {
                    post(values, "/account/login/")
                        .then((response) => {
                            console.log(response)
                            if (response.data.access_token !== undefined) {
                                localStorage.setItem('access_token', response.data.access_token);
                                localStorage.setItem('refresh_token', response.data.refresh_token);
                                localStorage.setItem("username", response.data.user.username);
                                console.log(from.pathname)
                                if(from.pathname==="/logout"){
                                    from.pathname="/"
                                }
                                history.push(from.pathname)
                                window.location.reload();
                            }
                            return response;
                        })
                        .catch((error) => {
                            if (error.message === "Cannot read property 'access_token' of undefined") {
                                setAccess(false)
                            }
                            return error
                        });
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      setFieldValue
                  }) => (
                    <Container maxWidth="xs">
                        <div className={classes.paper}>
                            <img 	width="200px" src={process.env.PUBLIC_URL + '/logo512.png'} alt="logo"/>
                            <Form noValidate>
                                <InputField
                                    name="username"
                                    onChange={handleChange}
                                    value={values.username}
                                    label="Používateľské meno"
                                    required={true}
                                    fullWidth={true}
                                    autoFocus={true}
                                    error={errors.username}
                                    touched={touched.username}
                                    color="primary"
                                    onBlur={handleBlur}
                                />
                                <InputField
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    label="Heslo"
                                    required={true}
                                    fullWidth={true}
                                    autoFocus={true}
                                    color="primary"
                                    type="password"
                                    autoComplete="current-password"
                                    error={errors.username}
                                    touched={touched.username}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Prihlásiť sa
                                </Button>
                            </Form>
                        </div>
                    </Container>
                )}
            </Formik>
        </div>
    );
}

export default LoginForm;