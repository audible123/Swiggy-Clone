import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import PaySlice from "./PaySlice";

const store= configureStore({
    reducer:{
        cart:CartSlice,
        price:PaySlice,
    }

})

export default store