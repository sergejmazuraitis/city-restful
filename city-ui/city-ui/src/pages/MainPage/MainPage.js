import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import {Button, CircularProgress, Container, Paper} from '@material-ui/core'
import download from "../../img/download.jpg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {fetchLast5Articles} from "../../api/articlesApi";
import NewArticle from "../NewArticlePage/NewArticlePage";


const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: "transparent"
    },
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: `url(${download})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    active: {
        fontWeight: "bolder",
        color: "#7986cb"
    },


}));

const MainPage = (props) => {
    const classes = useStyles();
    const loginUser = useSelector(state => state.user.loginUser)
    const {t} = useTranslation('mainPage');
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchLast5Articles()
            .then(({data}) => {
                console.log(data)
                setArticles(data)
            }).finally(() => setLoading(false))

    }, [])


    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Container maxWidth={"sm"} style={{margin: "15px auto", textAlign: "center"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Button variant="contained" to="/articles"
                              className={classes.link}
                                activeClassName={classes.active}
                                component={NavLink}>
                            {t('Articles')}
                        </Button>
                    </Grid>
                    {
                        loginUser?.roles.includes("ADMIN") ?
                            <Grid item xs={12}>
                                <Button variant="contained" to="/new-article"
                                      className={classes.link} activeClassName={classes.active} component={NavLink}>
                                    {t('NewArticle')}
                                </Button>
                            </Grid>

                            :
                            ""
                    }

                </Grid>
            </Container>

            {loading ? (
                <div style={{
                    margin: "auto"
                }}>
                    <CircularProgress/>
                </div>
                ) :
                <>
                    <Carousel>
                    {
                        articles.map((item, i) => <Item key={i} item={item}/>)
                    }
                </Carousel>
                </>

            }

        </>
    )
}

const Item = (props) =>
{
    const classes = useStyles();
    const {t} = useTranslation('mainPage');

    return (

        <Container>
            <Paper className={classes.mainFeaturedPost}
                   style={{
                       backgroundImage: `url("data:image/jpg;base64, ${props.item.image}")`
                   }}>
                {/* Increase the priority of the hero background image */}
                {<img style={{display: 'none'}} src={"data:image/jpg;base64, " + props.item.image}/>}
                <div className={classes.overlay}/>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                {props.item.name}
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                {props.item.description}
                            </Typography>
                            <Link underline="none"
                                variant="subtitle1"
                                to={"/article/" + props.item.id}
                                component={NavLink}>
                                <Button variant="contained">
                                    {t('Read')}
                                </Button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default MainPage