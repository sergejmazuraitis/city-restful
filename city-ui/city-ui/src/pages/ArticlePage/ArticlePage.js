import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useParams} from 'react-router-dom';
import {fetchArticleById, deleteArticleById} from "../../api/articlesApi";
import Link from "@material-ui/core/Link";
import {CircularProgress} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    active: {
        fontWeight: "bolder",
        color: "yellow"
    }

}));

const ArticleCard = () => {
    const classes = useStyles();
    const { id } = useParams()
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)

    const deleteArticle = (id) =>  {
        deleteArticleById(id)
    }

    useEffect(() => {
        fetchArticleById(id)
            .then(({data}) => {
                setArticle(data)
            })
            .finally(() => setLoading(false))
    }, [])

    return loading ? ( <CircularProgress/> ) :
         (
        <div className={classes.heroContent}>
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    {article.name}
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    {article.content}
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Link variant="button" color="textPrimary" to={"/change-article/" + id}
                                  className={classes.link} activeClassName={classes.active} component={NavLink}>
                                Change Article
                            </Link>
                        </Grid>
                        <Grid item>
                            <Button onClick={() => deleteArticle(id)} variant="contained" color="primary">
                                Delete Article
                            </Button>
                        </Grid>
                        <Grid item>
                            <Link variant="button" color="textPrimary" to={"/comment/" + id}
                                  className={classes.link} activeClassName={classes.active} component={NavLink}>
                                Comment Article
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link variant="button" color="textPrimary" to={"/comments/" + id}
                                  className={classes.link} activeClassName={classes.active} component={NavLink}>
                                Read Comments
                            </Link>
                        </Grid>

                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default ArticleCard
