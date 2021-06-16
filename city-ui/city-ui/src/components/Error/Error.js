import {Button, Grid} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";
import my from "../../img/404.png";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    back: {
        backgroundImage: `url(${my})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '350px',
        minWidth: '250px'
    }
}));


const Error = () => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth={"sm"}
                       style={{margin: "15px auto", textAlign: "center"}}
                       className={classes.back}>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Button style={{margin: "auto"}}
                                variant="contained"
                                to="/"
                                component={NavLink}>
                            Back
                        </Button>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
};

export default Error;