import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./bookSlice";

const appStore = configureStore({
    reducer:{
        books : booksReducer,
    }
});

export default appStore;