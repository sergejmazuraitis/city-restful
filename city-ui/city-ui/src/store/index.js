import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";


const constructStore = () => {

    const store = configureStore({
        reducer: {},
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
        preloadedState: {}
    })
}

export default constructStore