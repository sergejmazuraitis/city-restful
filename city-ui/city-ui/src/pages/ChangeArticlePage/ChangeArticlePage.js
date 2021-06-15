import {Form, Formik} from "formik";
import * as Yup from "yup";
import Container from "@material-ui/core/Container";
import {CircularProgress, Paper, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormikInput from "../../components/FormikInput/FormikInput";
import React, {useEffect, useState} from "react";
import {fetchArticleById, updateArticle} from "../../api/articlesApi";
import {useHistory, useParams} from "react-router-dom";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required(),
    description: Yup.string()
        .required(),
    content: Yup.string()
        .required()
})

const ChangeArticlePage = () => {
    const {id} = useParams();
    const [imageName, setImageName] = useState();
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);

    const history = useHistory();
    const initialValues = {
        id: article.id,
        name: article.name,
        description: article.description,
        content: article.content,
        image: article.image
    }

    useEffect(() => {
        fetchArticleById(id)
            .then(({data}) => {
                setArticle(data)
            })
            .finally(() => setLoading(false))
    }, []);

    const changeArticle = (article, {setSubmitting, resetForm}) => {
        setSubmitting(true)

        updateArticle(article)
            .then(() => {
                resetForm(initialValues)
                history.push('/articles');
            })
            .finally(() => setSubmitting(false))
    };

    const FileUpload = () => {
        document.getElementById('file').click();
    };

    return loading ? (<CircularProgress/>) :

        (<Formik initialValues={initialValues}
                 enableReinitialize
                 validationSchema={validationSchema}
                 onSubmit={changeArticle}
            >
                {
                    props => (
                        <>
                            <Container maxWidth={"md"} style={{margin: "auto"}}>
                                <Paper elevation={3} style={{margin: "auto", padding: "15px 0"}}>
                                    <Form style={{margin: 20, textAlign: "center"}}>
                                        <Typography color="textPrimary"
                                                    align="center"
                                                    variant="h4"
                                                    paragraph
                                        >
                                            Change Article
                                        </Typography>

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
                                        <div style={{margin: "5px 0", textAlign: "left"}}>
                                            <input id="file"
                                                   name="image"
                                                   type="file"
                                                   style={{
                                                       display: "none"
                                                   }}
                                                   onChange={(event) => {
                                                       setImageName(event.currentTarget.files[0].name);
                                                       props.setFieldValue("image", event.currentTarget.files[0]);

                                                   }}
                                                   className="form-control"/>
                                            <Button variant="outlined"
                                                    onClick={() => FileUpload()}>
                                                Chose file
                                            </Button>
                                            {!imageName ?
                                                <span>Choosed old image</span>
                                                :
                                                <span>{imageName}</span>
                                            }
                                        </div>

                                        {!props.isSubmitting ?
                                            <Button variant="contained"
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
export default ChangeArticlePage
