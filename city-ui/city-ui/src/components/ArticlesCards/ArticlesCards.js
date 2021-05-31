import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {fetchArticles} from "../../api/articlesApi";
import {NavLink} from "react-router-dom";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    active: {
        fontWeight: "bolder",
        color: "blue"
    }

}));


export default function Album() {
    const classes = useStyles();
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchArticles()
            .then(({data}) => {
                console.log(data)
                setArticles(data)
            })
    }, [])

    return (
        <>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {articles.map((article) => (
                        <Grid item key={article} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {article.name}
                                    </Typography>
                                    <Typography>
                                        {article.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link variant="button" color="textPrimary" to={"/article/" + article.id}
                                          className={classes.link} activeClassName={classes.active} component={NavLink}>
                                        Read Article
                                    </Link>
                                    <Button size="small" color="primary">
                                        Edit
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}