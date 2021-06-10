import {Form, Formik} from "formik";
import * as Yup from "yup";
import Container from "@material-ui/core/Container";
import {FormControl, Paper, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {addNewArticle, addNewArticleWithImage} from "../../api/articlesApi";
import FormikInput from "../FormikInput/FormikInput";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required(),
    description: Yup.string()
        .required(),
    content: Yup.string()
        .required()
})

export default () => (
    <Formik initialValues={{
        name: '',
        description: '',
        content: '',
        image: null
    }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                console.log('values', values)
                addNewArticleWithImage(values)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => actions.setSubmitting(false))
            }}>
        {
            props => (
                <>
                    <Container maxWidth={"md"} >
                        <Paper elevation={3}>
                            <h2 style={{margin: "auto"}}>New Articlde</h2>
                            <Form style={{margin: 20}} encType="multipart/form-data">
                                <div>
                                    <FormikInput name="name" label="Article Name"
                                                 error={props.touched.name && !!props.errors.name}/>
                                </div>
                                <div>
                                    <FormikInput name="description" label="Description"
                                                 error={props.touched.description && !!props.errors.description}/>
                                </div>
                                <div>
                                    <FormikInput name="content" label="Content" multiline rows={10}
                                                 error={props.touched.content && !!props.errors.content}/>
                                </div>

                                <div>
                                    <FormikInput  name="image"  type="file"/>
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
