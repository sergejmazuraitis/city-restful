import {Route, Switch} from "react-router-dom"
import MainPage from "../../pages/MainPage/MainPage";
import ArticlesPage from "../../pages/Articles/ArticlesPage";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Ads from "../../pages/Ads/Ads";
import Shop from "../../pages/Shop/Shop";
import NewArticlePage from "../../pages/NewArticlePage/NewArticlePage";
import ArticlePage from "../../pages/ArticlePage/ArticlePage";
import ChangeArticlePage from "../../pages/ChangeArticlePage/ChangeArticlePage";
import CommentsPage from "../../pages/CommentsPage/CommentsPage";
import SecuredRoute from "../SecuredRoute/SecuredRoute";

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
            <SecuredRoute path="/new-article" roles={["ADMIN"]}>
                <NewArticlePage/>
            </SecuredRoute>
            <Route path="/article/:id">
                <ArticlePage/>
            </Route>
            <Route path="/change-article/:id">
                <ChangeArticlePage/>
            </Route>
            <Route path="/comments/:id">
                <CommentsPage/>
            </Route>

        </Switch>
    </>
)