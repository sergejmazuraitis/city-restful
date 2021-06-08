import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {Box, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
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

export default () => {
    const classes = useStyles();
    const userFullName = useSelector(state => state.user.loginUser?.fullName)
    const {t} = useTranslation('header');
    return (
        <>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        City
                    </Typography>
                    <nav>
                        <Link variant="button" color="textPrimary" to="/articles"
                              className={classes.link} activeClassName={classes.active} component={NavLink}>
                            {t('Articles')}
                        </Link>
                        <Link variant="button" color="textPrimary" to="/ads"
                              className={classes.link} activeClassName={classes.active} component={NavLink}>
                            Ads
                        </Link>
                        <Link variant="button" color="textPrimary" to="/login"
                              className={classes.link} activeClassName={classes.active} component={NavLink}>
                            Login/Registration
                        </Link>
                        <Link variant="button" color="textPrimary" to="/new-article"
                              className={classes.link} activeClassName={classes.active} component={NavLink}>
                            New Article
                        </Link>
                            {userFullName ?
                                <>
                                    <Typography variant="h6" component="span">
                                        Sveiki, {userFullName}
                                    </Typography>
                                    <Button color="secondary" variant="contained" className={classes.link}>
                                        Logout
                                    </Button>
                                </>
                                :
                                <>
                                    <Button color="primary" to="/login" variant="contained" component={NavLink}>
                                        Login/Registration
                                    </Button>
                                </>
                            }
                        <LanguageSelector/>
                    </nav>
                </Toolbar>
            </AppBar>

        </>
    )
}