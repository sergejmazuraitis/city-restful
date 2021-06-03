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
        color: "blue"
    }

}));

const ArticleCard = () => {
    const classes = useStyles();
    const { id } = useParams()
    const [article, setArticle] = useState({})

    const deleteArticle = (id) =>  {
        deleteArticleById(id)
    }

    useEffect(() => {
        fetchArticleById(id)
            .then(({data}) => {
                setArticle(data)
            })
    }, [])
    return (
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
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default ArticleCard
