import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers";
import cartReducer from "./reducers/cartSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    },
    devTools: process.env.NODE_ENV === "development",
})

export default store;