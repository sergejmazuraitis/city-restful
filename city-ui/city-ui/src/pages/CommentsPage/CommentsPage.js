import React, {useEffect, useState} from "react";
import {
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {fetchComments, postNewComment, deleteCommentById} from "../../api/commentsApi";
import {useParams} from "react-router-dom";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import FormikInput from "../../components/FormikInput/FormikInput";
import {deleteArticleById, fetchArticleById} from "../../api/articlesApi";
import {useSelector} from "react-redux";

const validationSchema = Yup.object().shape({
    content: Yup.string()
        .required()
})

const useStyle = makeStyles({
    table: {
        minWidth: 150,
    }
})
const CommentsPage = () => {
    const {id} = useParams();
    const userId = useSelector(state => state.user.loginUser?.id);
    const st = useSelector(state => state.user)
    console.log('state', st)
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [article, setArticle] = useState({})

    useEffect(() => {
        fetchArticleById(id)
            .then(({data}) => {
                setArticle(data)
            })
            .finally(() => setLoading(false))
    }, [])


    useEffect(() => {
        // componentDidMount && componentDidUpdate
        fetchComments(id)
            .then(({data}) => {
                setComments(data)
            }).finally(() => setLoading(false))
    }, [])

    const postComment = (postData, {setSubmitting}) => {
        setSubmitting(true)

        postNewComment(postData)
            .finally(() => setSubmitting(false))
    }

    const deleteComment = (id) =>  {
        deleteCommentById(id)
    }

    const classes = useStyle()

    return loading ? (<CircularProgress/>)
        :
        (<Formik initialValues={{
            content: '',
            articleId: id,
            userId: userId
        }}
                validationSchema={validationSchema}
                onSubmit={postComment}
        >
            {props => (
                <>
                    <Container maxWidth="md">
                        <TableContainer component={Paper} className={classes.table}>
                            <Form style={{margin: 20}}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Comments</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {loading ?
                                            <TableRow>
                                                <TableCell colSpan={2} align="center">
                                                    <CircularProgress/>
                                                </TableCell>
                                            </TableRow> :
                                            comments.map(comment => (
                                                <TableRow key={comment.commentId}>
                                                    <TableCell align="left" component="th" scope="row">
                                                        {comment.content}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Button onClick={() => deleteComment(comment.commentId)} variant="outlined" color="primary">Delete</Button>
                                                        <Button variant="outlined" color="primary" >Change</Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}

                                        <TableRow>
                                            <TableCell>
                                                <FormikInput name="content" label="Content" multiline rows={5}
                                                             error={props.touched.content && !!props.errors.content}/>
                                            </TableCell>
                                            <TableCell>
                                                {!props.isSubmitting ?
                                                    <Button variant="contained" color="primary"
                                                            type="submit">Submit</Button>
                                                    :
                                                    <span>Submitting...</span>}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Form>
                        </TableContainer>
                    </Container>
                </>
            )}
        </Formik>
    )
}

export default CommentsPage
