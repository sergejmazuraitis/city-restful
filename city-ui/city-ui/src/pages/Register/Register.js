import {Form, Formik} from "formik";
import * as Yup from "yup";
import {userRegister} from "../../api/userRegisterApi";
import Container from "@material-ui/core/Container";
import {Paper, Typography} from "@material-ui/core";
import FormikInput from "../../components/FormikInput/FormikInput";
import Button from "@material-ui/core/Button";
import {useHistory, useLocation} from "react-router-dom";
import React from "react";
import {useTranslation} from "react-i18next";


const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required("validations:nameRequired"),
    surname: Yup.string()
        .required("validations:lastnameRequired"),
    username: Yup.string()
        .required("validations:usernameRequired"),
    email: Yup.string()
        .email("validations:emailValid")
        .required("validations:emailRequired"),
    phone: Yup.string()
        .required("validations:phoneRequired"),
    password: Yup.string()
        .min(5, "validations:passwordValidMin")
        .required("validations:passwordRequired"),
    repeatPassword: Yup.string()
        .min(5, "validations:passwordValidMin")
        .required("validations:passwordConfirmRequired")
        .oneOf([Yup.ref('password')], "validations:passwordEquals")
})
const UserRegistration = () => {
    const {t} = useTranslation('register');

    const history = useHistory();
    const location = useLocation();
    const initialValues = {
        name: '',
        surname: '',
        phone: '',
        email: '',
        password: '',
        repeatPassword: '',
        username: '',
        roles: ["USER"]
    };
    const postNewUser = (userData, {setSubmitting}) => {
        setSubmitting(true)
        userRegister(userData)
            .then(() => {
                const from = location.state?.from
                history.push(from || '/')
            })
            .finally(() => setSubmitting(false))

    };
    return (

        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={postNewUser}>
            {
                props => (
                    <>
                        <Container maxWidth={"sm"} style={{margin: "auto"}}>
                            <Paper elevation={3} style={{margin: "auto", padding: "20px 0"}}>
                                <Form style={{margin: "15px 40px", textAlign: "center"}}>
                                    <Typography color="textPrimary"
                                                align="center"
                                                variant="h4"
                                                paragraph
                                    >
                                        {t("Registration")}
                                    </Typography>
                                    <div>
                                        <FormikInput name="name"
                                                     label={t("Name")}
                                                     error={props.touched.name && !!props.errors.name}
                                                     placeholder={t("Name")}/>
                                    </div>
                                    <div>
                                        <FormikInput name="surname"
                                                     label={t("Lastname")}
                                                     error={props.touched.surname && !!props.errors.surname}
                                                     placeholder={t("Lastname")}/>
                                    </div>
                                    <div>
                                        <FormikInput name="username"
                                                     label={t("Username")}
                                                     error={props.touched.surname && !!props.errors.surname}
                                                     placeholder={t("Username")}/>
                                    </div>

                                    <div>
                                        <FormikInput name="email"
                                                     label={t("Email")}
                                                     error={props.touched.email && !!props.errors.email}
                                                     placeholder={t("Email")}/>
                                    </div>
                                    <div>
                                        <FormikInput name="phone"
                                                     label={t("Phone")}
                                                     error={props.touched.email && !!props.errors.email}
                                                     placeholder={t("Phone")}/>
                                    </div>

                                    <div>
                                        <FormikInput name="password"
                                                     label={t("Password")}
                                                     error={props.touched.password && !!props.errors.password}
                                                     placeholder={t("Password")}
                                                     type="password"/>
                                    </div>
                                    <div>
                                        <FormikInput name="repeatPassword"
                                                     label={t("PasswordConfirm")}
                                                     error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                                     placeholder={t("PasswordConfirm")}
                                                     type="password"/>
                                    </div>

                                    {!props.isSubmitting ?
                                        <Button variant="outlined"
                                                type="submit"
                                                style={{
                                                    marginTop: "10px"
                                                }}
                                                disabled={props.isSubmitting}>
                                            {t('Submit')}
                                        </Button>
                                        :
                                        <span>{t('Submitting')}</span>}
                                </Form>
                            </Paper>
                        </Container>
                    </>
                )
            }
        </Formik>
    )
};

export default UserRegistration;
