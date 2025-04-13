
import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: ProductSlice,
    },
});

export default appStore;
