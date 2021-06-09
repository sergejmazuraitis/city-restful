import {Form, Formik} from "formik";
import * as Yup from "yup";
import {getUserById, updateUser, userRegister} from "../../api/userRegisterApi";
import Container from "@material-ui/core/Container";
import {CircularProgress, Paper} from "@material-ui/core";
import FormikInput from "../../components/FormikInput/FormikInput";
import Button from "@material-ui/core/Button";
import {useHistory, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchArticleById} from "../../api/articlesApi";


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

const ChangeUserPage = () => {
    // const {t} = useTranslation('register');

    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        getUserById(id)
            .then(({data}) => {
                setUser(data)
            })
            .finally(() => setLoading(false))
    }, [])

    const updateNewUser = (userData, {setSubmitting}) => {
        setSubmitting(true)
        updateUser(userData)
            .then(() => {
                const from = location.state?.from

                history.push(from || '/')
            })

            .finally(() => setSubmitting(false))

    }
    return loading ? ( <CircularProgress/> ) :
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
                        <Container maxWidth={"sm"}>
                            <Paper elevation={3}>
                                <Form style={{margin: 20}}>
                                    <div>
                                        <FormikInput name="name"
                                                     label="Name"
                                                     defaultValue='Name'
                                                     error={props.touched.name && !!props.errors.name}
                                                     placeholder="Name"/>
                                    </div>
                                    <div>
                                        <FormikInput name="surname"
                                                     label="Last Name"
                                                     defaultValue='Last Name'
                                                     error={props.touched.surname && !!props.errors.surname}
                                                     placeholder="Last Name"/>
                                    </div>
                                    <div>
                                        <FormikInput name="username"
                                                     label="Username"
                                                     defaultValue='Username'
                                                     error={props.touched.surname && !!props.errors.surname}
                                                     placeholder="username"/>
                                    </div>

                                    <div>
                                        <FormikInput name="email"
                                                     label="Email"
                                                     defaultValue='Email'
                                                     error={props.touched.email && !!props.errors.email}
                                                     placeholder="Email"/>
                                    </div>
                                    <div>
                                        <FormikInput name="phone"
                                                     label="Phone Number"
                                                     defaultValue='Phone Number'
                                                     error={props.touched.email && !!props.errors.email}
                                                     placeholder="Phone Number"/>
                                    </div>

                                    <div>
                                        <FormikInput name="password"
                                                     label="Password"
                                                     defaultValue='Password'
                                                     error={props.touched.password && !!props.errors.password}
                                                     placeholder="Password"
                                                     type="password"/>
                                    </div>
                                    <div>
                                        <FormikInput name="repeatPassword"
                                                     label="Password Confirm"
                                                     defaultValue='Password Confirm'
                                                     error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                                     placeholder="Password Confirm"
                                                     type="password"/>
                                    </div>

                                    {!props.isSubmitting ?
                                        <Button variant="contained" color="primary" type="submit">Submit</Button>
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

export default ChangeUserPage
