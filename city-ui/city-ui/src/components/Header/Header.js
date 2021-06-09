import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {IconButton, Menu, MenuItem, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import {AccountCircle} from "@material-ui/icons";

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
    const loginUser = useSelector(state => state.user.loginUser)
    const {t} = useTranslation('header');
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
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

                        {
                            loginUser?.roles.includes("ADMIN") ?
                                <Link variant="button" color="textPrimary" to="/new-article"
                                      className={classes.link} activeClassName={classes.active} component={NavLink}>
                                    New Article
                                </Link>
                                :
                                ""
                        }

                        {loginUser?.fullName ?
                            <>
                                <Typography variant="h6" component="span">
                                    Sveiki, {loginUser.fullName}
                                </Typography>
                                <Button variant="button" color="textPrimary" onClick={() => {window.location.href="/"}}
                                        className={classes.link} activeClassName={classes.active} >
                                    Logout
                                </Button>
                                {auth && (
                                    <>
                                        <IconButton
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleMenu}
                                            color="inherit"
                                        >
                                            <AccountCircle />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <Link variant="button" color="textPrimary" to="/account"
                                                      className={classes.link} activeClassName={classes.active} component={NavLink}>
                                                   My Account
                                                </Link>

                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>Properties</MenuItem>
                                        </Menu>
                                    </>
                                )}
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