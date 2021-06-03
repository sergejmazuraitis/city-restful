import {Form, Formik} from "formik";
import * as Yup from "yup";
import Container from "@material-ui/core/Container";
import {FormControl, Paper, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormikInput from "../../components/FormikInput/FormikInput";
import {useEffect, useState} from "react";
import {fetchArticleById, updateArticle} from "../../api/articlesApi";
import {useParams} from "react-router-dom";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required(),
    description: Yup.string()
        .required(),
    content: Yup.string()
        .required()
})

const ChangeArticlePage = () => {
    const { id } = useParams()

    const [article, setArticle] = useState({})
    useEffect(() => {
        fetchArticleById(id)
            .then(({data}) => {
                setArticle(data)
            })
    }, [])

    const changeArticle = (article, {setSubmitting}) => {
        setSubmitting(true)

        updateArticle(article)
            .then(() => {
                console.log('changed')
            })
            .finally(() => setSubmitting(false))
    }


    return (
        <Formik initialValues={{
            id: article.id,
            name: article.name,
            description: article.description,
            content: article.content
        }}
                enableReinitialize
                validationSchema={validationSchema}
                onSubmit={changeArticle}
                >
            {
                props => (
                    <>
                        <Container maxWidth={"md"}>
                            <Paper elevation={3}>
                                <h2>New Article</h2>
                                <Form style={{margin: 20}}>

                                    <div>
                                        <FormikInput name="name"
                                                     label="Article Name"
                                                     defaultValue='Article Name'
                                                     error={props.touched.name && !!props.errors.name}/>
                                    </div>
                                    <div>
                                        <FormikInput name="description"
                                                     label="Description"
                                                     defaultValue='Description'
                                                     error={props.touched.description && !!props.errors.description}/>
                                    </div>
                                    <div>
                                        <FormikInput name="content"
                                                     label="Content"
                                                     defaultValue='Content'
                                                     multiline rows={10}
                                                     error={props.touched.content && !!props.errors.content}/>
                                    </div>

                                    {!props.isSubmitting ?
                                        <Button variant="contained"
                                                color="primary"
                                                type="submit"
                                                disabled={props.isSubmitting}>Submit</Button>
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
export default ChangeArticlePage
