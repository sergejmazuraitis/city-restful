import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import user from "./slices/userSllice";


const constructStore = () => {

    const store = configureStore({
        reducer: {
            user
        },
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
        preloadedState: {}
    })

    return store
};

const store = constructStore();
export default store;