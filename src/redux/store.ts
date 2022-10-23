import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices";
import {peopleReducer} from "./slices/people.slice";


const rootReducer = combineReducers({
    movieReducer,
    peopleReducer

});

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    RootState,
    AppStore,
    AppDispatch
};

export {
    setupStore
};