import {Form, Formik} from "formik";
import * as Yup from "yup";
import Container from "@material-ui/core/Container";
import {Paper, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {addNewArticleWithImage} from "../../api/articlesApi";
import FormikInput from "../../components/FormikInput/FormikInput";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required("validations:articleNameRequired"),
    description: Yup.string()
        .required("validations:articleDescriptionRequired"),
    content: Yup.string()
        .required("validations:articleContentRequired")
})

const NewArticlePage = () => {
    const {t} = useTranslation('newArticle');
    const [imageName, setImageName] = useState();
    const history = useHistory();
    const initialValues = {
        name: '',
        description: '',
        content: '',
        image: null
    }
    const FileUpload = () => {
        document.getElementById('file').click();
    }

    const postNewArticle = (newArticle, {setSubmitting, resetForm}) => {
        setSubmitting(true)

        addNewArticleWithImage(newArticle)
            .then(() => {
                resetForm(initialValues)
                history.push('/articles');
            })
            .finally(() => setSubmitting(false))

    }


    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={postNewArticle}>
            {
                props => (
                    <>
                        <Container maxWidth={"md"} style={{margin: "auto"}}>
                            <Paper elevation={3} style={{margin: "auto", padding: "15px 0"}}>
                                <Form style={{margin: "10px 40px", textAlign: "center"}}>
                                    <Typography color="textPrimary"
                                                align="center"
                                                variant="h4"
                                                paragraph
                                    >
                                        {t('NewArticle')}
                                    </Typography>

                                    <div>
                                        <FormikInput name="name"
                                                     label={t("ArticleName")}
                                                     error={props.touched.name && !!props.errors.name}/>
                                    </div>
                                    <div>
                                        <FormikInput name="description"
                                                     label={t("Description")}
                                                     error={props.touched.description && !!props.errors.description}/>
                                    </div>
                                    <div>
                                        <FormikInput name="content"
                                                     label={t("Content")}
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
                                            {t('ChooseFile')}
                                        </Button>
                                        {!imageName ?
                                            <span>{t('NoFileChosen')}</span>
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
}

export default NewArticlePage
