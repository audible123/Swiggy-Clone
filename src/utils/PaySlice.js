import { createSlice } from "@reduxjs/toolkit";

const paySlice = createSlice({
    name:"price",
    initialState:{
        totalprice:"",
    },
    reducers:{
        addPrice:(state,action)=>{
            state.totalprice = action.payload;
        }
    }
})


export const {addPrice} = paySlice.actions;
export default paySlice.reducer;