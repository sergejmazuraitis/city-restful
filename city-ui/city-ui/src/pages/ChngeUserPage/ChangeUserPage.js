import {Form, Formik} from "formik";
import * as Yup from "yup";
import {getUserById, updateUser} from "../../api/userRegisterApi";
import Container from "@material-ui/core/Container";
import {CircularProgress, Paper, Typography} from "@material-ui/core";
import FormikInput from "../../components/FormikInput/FormikInput";
import Button from "@material-ui/core/Button";
import {useHistory, useLocation, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
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

const ChangeUserPage = () => {
    const {t} = useTranslation('register');
    const {id} = useParams();
    const history = useHistory();

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const location = useLocation();


    useEffect(() => {
        getUserById(id)
            .then(({data}) => {
                setUser(data)
            })
            .finally(() => setLoading(false))
    }, []);

    const updateNewUser = (userData, {setSubmitting}) => {
        setSubmitting(true)
        updateUser(userData)
            .then(() => {
                const from = location.state?.from
                history.push(from || '/')
            })
            .finally(() => setSubmitting(false))
    };

    return loading ? (
            <div style={{
                margin: "auto"
            }}>
                <CircularProgress/>
            </div>)
        :
        (
            <Formik initialValues={{
                id: id,
                name: user.name,
                surname: user.surname,
                phone: user.phone,
                email: user.email,
                password: '',
                repeatPassword: '',
                username: user.username
            }}
                    validationSchema={validationSchema}
                    onSubmit={updateNewUser}>
                {
                    props => (
                        <>
                            <Container maxWidth={"sm"} style={{margin: "auto"}}>
                                <Paper elevation={3} style={{margin: "auto", padding: "15px 0"}}>
                                    <Form style={{margin: 20, textAlign: "center"}}>
                                        <Typography color="textPrimary"
                                                    align="center"
                                                    variant="h4"
                                                    paragraph
                                        >
                                            {t('ChangeAccount')}
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
                                            <Button variant="contained"
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

export default ChangeUserPage;
