import {Form, Formik} from "formik";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import {Paper, Typography} from "@material-ui/core";
import FormikInput from "../../components/FormikInput/FormikInput";
import {loginUser} from "../../api/authApi";
import {useDispatch} from "react-redux";
import {login as setLogin} from "../../store/slices/userSllice";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import Link from "@material-ui/core/Link";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";


const useStyles = makeStyles((theme) => ({
    link: {
        margin: theme.spacing(1, 1.5),
    },
    active: {
        fontWeight: "bolder",
        color: "blue"
    }
}));

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required("validations:usernameRequired"),
    password: Yup.string()
        .required("validations:passwordRequired")
});

const Login = () => {

    const {t} = useTranslation('login');
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const postLogin = (loginData, {setSubmitting}) => {
        setSubmitting(true)

        loginUser(loginData)
            .then(({data: loginUser, headers: {authorization}}) => {
                dispatch(
                    setLogin({
                        loginUser,
                        jwt: authorization
                    })
                )
                const from = location.state?.from

                history.push(from || '/')
            })
            .finally(() => setSubmitting(false))
    };

    return (
        <Formik initialValues={{
            username: '',
            password: '',
        }}
                validationSchema={validationSchema}
                onSubmit={postLogin}>
            {props => (
                <>
                    <Container maxWidth={"sm"} style={{margin: "auto"}}>
                        <Paper elevation={3} style={{margin: "auto", padding: "20px 0"}}>
                            <Form style={{margin: "15px 40px", textAlign: "center"}}>
                                <Typography color="textPrimary"
                                            align="center"
                                            variant="h4"
                                            paragraph
                                >
                                    {t('Login')}
                                </Typography>
                                <div>
                                    <FormikInput name="username"
                                                 label={t("Username")}
                                                 error={props.touched.loginName && !!props.errors.loginName}
                                                 placeholder={t("Username")}/>
                                </div>
                                <div>
                                    <FormikInput name="password"
                                                 label={t("Password")}
                                                 error={props.touched.loginPassword && !!props.errors.loginPassword}
                                                 placeholder={t("Password")}
                                                 type="password"/>
                                </div>
                                {!props.isSubmitting ?
                                    <>
                                        <Button type="submit"
                                                disabled={props.isSubmitting}
                                                style={{
                                                    marginTop: "5px",
                                                    borderRadius: "5px",
                                                    border: "1px solid",
                                                    borderColor: "#bababa",
                                                    width: "30%"
                                                }}>{t('Login')}</Button>
                                        <div style={{marginTop: '20px'}}>
                                            <Typography color="textSecondary"
                                                        align="center"
                                                        gutterBottom
                                            >
                                                {t('NotReg')}
                                                <Link underline="none"
                                                      variant="button"
                                                      color="textPrimary"
                                                      to="/register"
                                                      className={classes.link}
                                                      activeClassName={classes.active}
                                                      component={NavLink}>
                                                    {t('Registration')}
                                                </Link>
                                            </Typography>
                                        </div>
                                    </>

                                    :
                                    <span>{t('Submitting')}</span>}
                            </Form>
                        </Paper>
                    </Container>
                </>
            )}
        </Formik>
    )
}

export default Login