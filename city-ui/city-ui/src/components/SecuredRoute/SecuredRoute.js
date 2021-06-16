import {useSelector} from "react-redux";
import _ from "lodash";
import {Route, Redirect} from "react-router-dom";

const SecuredRoute = ({roles, ...props}) => {
    const userRoles = useSelector(state => state.user.loginUser?.roles);
    const authorized = !!_.intersection(userRoles, roles).length;

    return authorized ? <Route {...props} /> : <Redirect to="/login" />
    };

export default SecuredRoute;