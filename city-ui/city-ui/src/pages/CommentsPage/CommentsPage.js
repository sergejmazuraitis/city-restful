import React, {useEffect, useState} from "react";
import {
    CircularProgress,
    IconButton,
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
import {deleteCommentById, fetchComments, postNewComment} from "../../api/commentsApi";
import {useParams} from "react-router-dom";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import FormikInput from "../../components/FormikInput/FormikInput";
import {fetchArticleById} from "../../api/articlesApi";
import {useSelector} from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "react-i18next";

const validationSchema = Yup.object().shape({
    content: Yup.string()
        .required()
})

const useStyle = makeStyles({
    table: {
        minWidth: 150,
    },
    title: {
        fontSize: 12,
    },

})
const CommentsPage = () => {

    const {id} = useParams();
    const {t} = useTranslation('oftenUse');
    const userId = useSelector(state => state.user.loginUser?.id);
    const username = useSelector(state => state.user.loginUser?.username);
    const user = useSelector(state => state.user);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState({});
    const initialValues = {
        content: '',
        articleId: id,
        userId,
        username
    };
    useEffect(() => {
        fetchArticleById(id)
            .then(({data}) => {
                setArticle(data)
            })
            .finally(() => setLoading(false))
    }, []);

    useEffect(() => {
        fetchComments(id)
            .then(({data}) => {
                setComments(data)
            }).finally(() => setLoading(false))
    }, []);

    const postComment = (postData, {setSubmitting, resetForm}) => {
        setSubmitting(true)

        postNewComment(postData)
            .then(() => {
                resetForm(initialValues)
                fetchComments(id)
                    .then(({data}) => {
                        setComments(data)
                    })
            })
            .finally(() => {
                setSubmitting(false)
            })
    };

    const deleteComment = (comment) => {
        deleteCommentById(comment.commentId)
            .finally(
                setComments(comments.filter(com => com.commentId !== comment.commentId))
            )
    };

    const classes = useStyle();

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={postComment}
        >
            {props => (
                <>
                    <Container maxWidth="md" style={{margin: "auto"}}>
                        <TableContainer component={Paper} className={classes.table}>
                            <Form style={{margin: 20}}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h4" paragraph>
                                                    {t('Comments')}
                                                </Typography>
                                            </TableCell>
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
                                                        <div>
                                                            <Typography variant="h5" component="h2">
                                                                {comment.username}
                                                            </Typography>
                                                        </div>
                                                        <div>{comment.content}</div>
                                                        <div>
                                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                                {comment.timestamp}
                                                            </Typography>
                                                        </div>

                                                    </TableCell>
                                                    <TableCell align="right">
                                                        { comment.userId === userId || user.loginUser?.roles.includes("ADMIN") ?
                                                            <IconButton
                                                                aria-label="delete-comment"
                                                                aria-controls="menu-appbar"
                                                                aria-haspopup="true"
                                                                onClick={() => deleteComment(comment)}
                                                                color="inherit"
                                                            >
                                                                <DeleteIcon/>
                                                            </IconButton>
                                                            :
                                                            ''
                                                        }
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        {user.loginUser ?

                                            <TableRow>
                                                <TableCell>
                                                    <FormikInput
                                                        id="cont"
                                                        name="content"
                                                        label="Content"
                                                        defaultValue="Content"
                                                        multiline rows={5}
                                                        error={props.touched.content && !!props.errors.content}/>
                                                </TableCell>
                                                <TableCell>
                                                    {!props.isSubmitting ?
                                                        <Button variant="outlined"
                                                                type="submit"
                                                                disabled={props.isSubmitting}>
                                                            {t('Submit')}
                                                        </Button>
                                                        :
                                                        <span>{t('Submitting')}</span>}

                                                </TableCell>
                                            </TableRow>
                                            :
                                            ''
                                        }
                                    </TableBody>
                                </Table>
                            </Form>
                        </TableContainer>
                    </Container>
                </>
            )}
        </Formik>
    )
};

export default CommentsPage;
