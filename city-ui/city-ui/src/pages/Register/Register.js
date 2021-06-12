import {Form, Formik} from "formik";
import * as Yup from "yup";
import {userRegister} from "../../api/userRegisterApi";
import Container from "@material-ui/core/Container";
import {Paper, Typography} from "@material-ui/core";
import FormikInput from "../../components/FormikInput/FormikInput";
import Button from "@material-ui/core/Button";
import {useHistory, useLocation} from "react-router-dom";
import React from "react";


const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required(),
    surname: Yup.string()
        .required(),
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .min(5)
        .required(),
    repeatPassword: Yup.string()
        .min(5)
        .required()
        .oneOf([Yup.ref('password')], "Blogas")
})

const UserRegistration = () => {
    // const {t} = useTranslation('register');

    const history = useHistory()
    const location = useLocation()
    const postNewUser = (userData, {setSubmitting}) => {
        setSubmitting(true)
        userRegister(userData)
            .then(() => {
                const from = location.state?.from

                history.push(from || '/')
            })

            .finally(() => setSubmitting(false))

    }
    return (

        <Formik initialValues={{
            name: '',
            surname: '',
            phone: '',
            email: '',
            password: '',
            username: '',
            roles: ["USER"]
        }}
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
                                        Registration
                                    </Typography>
                                    <div>
                                        <FormikInput name="name"
                                                     label="Name"
                                                     error={props.touched.name && !!props.errors.name}
                                                     placeholder="Name"/>
                                    </div>
                                    <div>
                                        <FormikInput name="surname"
                                                     label="LastName"
                                                     error={props.touched.surname && !!props.errors.surname}
                                                     placeholder="LastName"/>
                                    </div>
                                    <div>
                                        <FormikInput name="username"
                                                     label="Username"
                                                     error={props.touched.surname && !!props.errors.surname}
                                                     placeholder="username"/>
                                    </div>

                                    <div>
                                        <FormikInput name="email"
                                                     label="Email"
                                                     error={props.touched.email && !!props.errors.email}
                                                     placeholder="Email"/>
                                    </div>
                                    <div>
                                        <FormikInput name="phone"
                                                     label="Phone Number"
                                                     error={props.touched.email && !!props.errors.email}
                                                     placeholder="Phone Number"/>
                                    </div>

                                    <div>
                                        <FormikInput name="password"
                                                     label="Password"
                                                     error={props.touched.password && !!props.errors.password}
                                                     placeholder="Password"
                                                     type="password"/>
                                    </div>
                                    <div>
                                        <FormikInput name="repeatPassword"
                                                     label="Password Confirm"
                                                     error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                                     placeholder="Password Confirm"
                                                     type="password"/>
                                    </div>

                                    {!props.isSubmitting ?
                                        <Button variant="outlined"
                                                type="submit"
                                                style={{
                                                    marginTop: "10px"
                                                }}
                                                disabled={props.isSubmitting}>
                                            Submit
                                        </Button>
                                        :
                                        <span>Submitting...</span>}
                                </Form>
                            </Paper>
                        </Container>
                    </>
                )
            }
        </Formik>
    )
}

export default UserRegistration
