import HTTP from "./index";

const loginUser = (loginData) => HTTP.post('/login', loginData);

export {loginUser};