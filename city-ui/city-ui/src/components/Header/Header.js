import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {IconButton, Menu, MenuItem, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {AccountCircle} from "@material-ui/icons";
import {logout} from "../../store/slices/userSllice";

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: "transparent"
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
        fontSize: 25
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    active: {
        fontWeight: "bolder",
        color: "#7986cb"
    },
    title: {
        fontSize: 14,
    },
    center: {
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}));


const Header = () => {
    const classes = useStyles();
    const loginUser = useSelector(state => state.user.loginUser)
    const {t} = useTranslation('header');
    const [auth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch()
    const open = Boolean(anchorEl);
    const history = useHistory();
    const location = useLocation();

    const logoutOnClick = () => {
        dispatch(logout())
        const from = location.state?.from
        console.log(from)
        history.push(from || '/')
    }

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
                    <nav>
                        <Link color="inherit"
                              underline="none"
                              noWrap
                              to="/"
                              className={classes.toolbarTitle}
                              component={NavLink}
                        >
                            {t('City')}
                        </Link>
                    </nav>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>

                    </Typography>
                    <nav>

                        {auth && (
                            <>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle/>
                                </IconButton>
                                <Menu align="center"
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

                                    {loginUser ?
                                        <>
                                            <Typography className={classes.title}
                                                        color="textSecondary"
                                                        align="center"
                                                        gutterBottom>
                                                {t('Hello')} {loginUser.username}
                                            </Typography>
                                            <MenuItem onClick={handleClose} align="center">
                                                <Button variant="button"
                                                        align="center"
                                                        color="textPrimary"
                                                        to="/account"
                                                        className={classes.link} activeClassName={classes.active}
                                                        component={NavLink}>
                                                    {t('MyAccount')}
                                                </Button>

                                            </MenuItem>
                                            <MenuItem onClick={handleClose} align="center">
                                                <Button variant="button"
                                                        align="center"
                                                        color="textPrimary"
                                                        onClick={() => {
                                                            logoutOnClick()
                                                        }}
                                                        className={classes.link}
                                                        activeClassName={classes.active}
                                                >
                                                    {t('Logout')}
                                                </Button>
                                            </MenuItem>
                                        </>
                                        :
                                        <MenuItem onClick={handleClose}>
                                            <Button variant="button"
                                                    align="center"
                                                    color="textPrimary"
                                                    to="/login"
                                                    component={NavLink}>
                                                {t('Login')}
                                            </Button>
                                        </MenuItem>
                                    }

                                </Menu>
                            </>
                        )}

                        <LanguageSelector/>
                    </nav>
                </Toolbar>
            </AppBar>

        </>
    )
};

export default Header;