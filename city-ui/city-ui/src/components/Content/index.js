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
import MyAccountPage from "../../pages/MyAccountPage/MyAccountPage";
import ChangeUserPage from "../../pages/ChngeUserPage/ChangeUserPage";

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
            <SecuredRoute path="/new-article" roles={["ADMIN"]}>
                <NewArticlePage/>
            </SecuredRoute>
            <Route path="/article/:id">
                <ArticlePage/>
            </Route>
            <SecuredRoute path="/change-article/:id" roles={["ADMIN"]}>
                <ChangeArticlePage/>
            </SecuredRoute>
            <Route path="/comments/:id">
                <CommentsPage/>
            </Route>
            <SecuredRoute path="/account" roles={["ADMIN", "USER"]}>
                <MyAccountPage/>
            </SecuredRoute>
            <SecuredRoute path="/user/:id" roles={["ADMIN", "USER"]}>
                <ChangeUserPage/>
            </SecuredRoute>

        </Switch>
    </>
)