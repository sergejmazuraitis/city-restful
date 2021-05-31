import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from 'react-router-dom';
import {fetchArticleById, fetchArticles} from "../../api/articlesApi";


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
}));

export default function ArticleCard() {
    const classes = useStyles();
    const { id } = useParams()
    const [article, setArticle] = useState({})
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
                            <Button variant="contained" color="primary">
                               Change Article
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Delete Article
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}
