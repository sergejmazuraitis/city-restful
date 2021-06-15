import {deleteUserById, getUserById} from '../../api/userRegisterApi'
import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useSelector} from "react-redux";
import {CircularProgress, Container} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const MyAccountPage = () => {
    const classes = useStyles();
    const {t} = useTranslation('myAccount');

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const userId = useSelector(state => state.user.loginUser?.id)

    const deleteUser = (id) => {
        deleteUserById(id)
        window.location.href = "/"
    };

    useEffect(() => {
        getUserById(userId)
            .then(({data}) => {
                setUser(data)
            })
            .finally(() => setLoading(false))
    }, []);

    return loading ? (
            <div style={{
                margin: "auto"
            }}>
                <CircularProgress/>
            </div>)
        :
        (<Container maxWidth={"sm"} style={{margin: "auto"}}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {t('YourAccount')}
                        </Typography>
                        <hr/>
                        <Typography className={classes.pos} color="textPrimary">
                            {user.name}
                        </Typography>
                        <Typography className={classes.pos} color="textPrimary">
                            {user.surname}
                        </Typography>
                        <Typography className={classes.pos} color="textPrimary">
                            {user.username}
                        </Typography>
                        <Typography className={classes.pos} color="textPrimary">
                            {user.phone}
                        </Typography>
                        <Typography className={classes.pos} color="textPrimary">
                            {user.email}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => deleteUser(userId)} size="small">{t('DeleteAccount')}</Button>
                        <Link underline="none" variant="button" color="textPrimary" to={"/user/" + userId}
                              className={classes.link} activeClassName={classes.active} component={NavLink}>
                            <Button size="small">{t('ChangeAccount')}</Button>
                        </Link>

                    </CardActions>
                </Card>
            </Container>
        );
}

export default MyAccountPage