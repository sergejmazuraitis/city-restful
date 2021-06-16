import CssBaseline from "@material-ui/core/CssBaseline";
import {BrowserRouter as Router} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/index"
import {Provider} from "react-redux";
import store from "./store";
import city3 from "./img/city3.jpg";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: `url(${city3})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
    },
}));

function App() {

    const classes = useStyles();

    return (
        <Provider store={store}>

            <Router>
                <div className={classes.root}>
                    <CssBaseline/>
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
