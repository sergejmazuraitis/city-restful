import {Route, Switch} from "react-router-dom"
import MainPage from "../../pages/MainPage/MainPage";
import Articles from "../../pages/Articles/ArticlesPage";

export default () => (
    <>
        <Switch>
            <Route exact path="/">
                <MainPage/>
            </Route>
            <Route exact path="/articles">
                <Articles/>
            </Route>
        </Switch>
    </>
)