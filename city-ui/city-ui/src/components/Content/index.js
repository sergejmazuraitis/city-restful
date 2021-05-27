import {Route, Switch} from "react-router-dom"
import MainPage from "../../pages/MainPage/MainPage";
import Articles from "../../pages/Articles/ArticlesPage";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Ads from "../../pages/Ads/Ads";
import Shop from "../../pages/Shop/Shop";

export default () => (
    <>
        <Switch>
            <Route exact path="/">
                <MainPage/>
            </Route>
            <Route exact path="/articles">
                <Articles/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/ads">
                <Ads/>
            </Route>
            <Route path="/shop">
                <Shop/>
            </Route>
        </Switch>
    </>
)