import {Route, Switch} from "react-router-dom"
import MainPage from "../../pages/MainPage/MainPage";
import Articles from "../../pages/Articles/ArticlesPage";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Ads from "../../pages/Ads/Ads";
import Shop from "../../pages/Shop/Shop";
import ArticlesPage from "../../pages/Articles/ArticlesPage";
import NewArticlePage from "../../pages/NewArticlePage/NewArticlePage";

export default () => (
    <>
        <Switch>
            <Route exact path="/">
                <MainPage/>
            </Route>
            <Route exact path="/articles">
                <ArticlesPage/>
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
            <Route path="/new-article">
                <NewArticlePage/>
            </Route>

        </Switch>
    </>
)