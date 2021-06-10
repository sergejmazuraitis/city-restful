import {makeStyles} from "@material-ui/core/styles";
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Container, Paper} from '@material-ui/core'
import download from "../../img/download.jpg";
import bycicles from "../../img/bycicle.jpg";
import city1 from "../../img/city1.jpg";
import cityRoad from "../../img/city-road.jpg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";


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
    const {t} = useTranslation('header');

    let items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            title: "Pavadinimas 1",
            image: city1
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            title: "Pavadinimas 2",
            image: bycicles
        },
        {
            name: "Random Name #3",
            description: "Hello World!",
            title: "Pavadinimas 3",
            image: cityRoad
        },
    ]

    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Container maxWidth={"sm"} style={{margin: "15px auto", textAlign: "center"}}>
                <nav>

                    <Link underline="none" variant="button" color="textPrimary" to="/articles"
                          className={classes.link} activeClassName={classes.active} component={NavLink}>
                        {t('Articles')}
                    </Link>

                    <Link underline="none" variant="button" color="textPrimary" to="/ads"
                          className={classes.link} activeClassName={classes.active} component={NavLink}>
                        Ads
                    </Link>

                    {
                        loginUser?.roles.includes("ADMIN") ?
                            <Link variant="button" color="textPrimary" to="/new-article"
                                  className={classes.link} activeClassName={classes.active} component={NavLink}>
                                New Article
                            </Link>
                            :
                            ""
                    }

                </nav>

            </Container>

            {/*<Carousel>*/}
            {/*    {*/}
            {/*        items.map((item, i) => <Item key={i} item={item}/>)*/}
            {/*    }*/}
            {/*</Carousel>*/}

        </>
    )
}

const Item = (props) => {
    const classes = useStyles();

    return (
        // <Paper>
        //     <h2>{props.item.name}</h2>
        //     <p>{props.item.description}</p>
        //
        //     <Button className="CheckButton">
        //         Check it out!
        //     </Button>
        // </Paper>

        <Container>
            <Paper className={classes.mainFeaturedPost} style={{backgroundImage: `url(${props.item.image})`}}>
                {/* Increase the priority of the hero background image */}
                {<img style={{display: 'none'}} src={props.item.image}/>}
                <div className={classes.overlay}/>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                {props.item.title}
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                {props.item.description}
                            </Typography>
                            <Link variant="subtitle1" href="#">
                                Linkas
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default MainPage