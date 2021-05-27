import React, {useContext} from "react";
import AppBar from "@material-ui/core/AppBar";
import {Badge, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";

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

    return (
        <React.Fragment>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        City
                    </Typography>
                    <nav>
                        <Link   variant="button" color="textPrimary" to="/articles"
                              className={classes.link} activeClassName={classes.active} component={NavLink}>
                            Articles
                        </Link>
                        <Link variant="button" color="textPrimary" to="/ads"
                              className={classes.link} activeClassName={classes.active} component={NavLink}>
                            Ads
                        </Link>
                        <Link variant="button" color="textPrimary" to="/shop"
                              className={classes.link} activeClassName={classes.active} component={NavLink}>
                            Shop
                        </Link>
                        <Link   variant="button" color="textPrimary" to="/login"
                                className={classes.link} activeClassName={classes.active} component={NavLink}>
                            Login/Registration
                        </Link>
                    </nav>
                </Toolbar>
            </AppBar>

        </React.Fragment>
    )
}