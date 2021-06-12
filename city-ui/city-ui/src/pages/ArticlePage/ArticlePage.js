import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {NavLink, useHistory, useParams} from 'react-router-dom';
import {deleteArticleById, fetchArticleById} from "../../api/articlesApi";
import Link from "@material-ui/core/Link";
import {CircularProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";


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
    const {t} = useTranslation('article');
    const {id} = useParams();
    const history = useHistory()
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const user = useSelector(state => state.user);

    const deleteArticle = (id) => {
        deleteArticleById(id)
            .finally(()=> (
                history.push('/articles')))
    };

    useEffect(() => {
        fetchArticleById(id)
            .then(({data}) => {
                setArticle(data)
            })
            .finally(() => setLoading(false))
    }, []);

    return loading ? (<CircularProgress/>) :
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
                                <Link underline="none"
                                      variant="button"
                                      color="textPrimary"
                                      to={"/comments/" + id}
                                      className={classes.link}
                                      activeClassName={classes.active}
                                      component={NavLink}>
                                    <Button variant="outlined">
                                        {t('Comments')}
                                    </Button>
                                </Link>
                            </Grid>
                            {
                                user.loginUser?.roles?.includes("ADMIN") ?
                                    <>
                                        <Grid item>
                                            <Link underline="none"
                                                  variant="button"
                                                  color="textPrimary"
                                                  to={"/change-article/" + id}
                                                  className={classes.link}
                                                  activeClassName={classes.active}
                                                  component={NavLink}>
                                                <Button variant="outlined">
                                                    {t('ChangeArticle')}
                                                </Button>
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Button onClick={() => deleteArticle(id)}
                                                    variant="outlined">
                                                {t('DeleteArticle')}
                                            </Button>
                                        </Grid>
                                    </>
                                    :
                                    ''
                            }
                        </Grid>
                    </div>
                </Container>
            </div>
        )
}

export default ArticleCard
