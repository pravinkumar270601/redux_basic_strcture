import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    mycount : 0
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers: {
        increment :(state)=>{
            state.mycount += 1
        },
        decrement :(state)=>{
            state.mycount -= 1
        },
        reset : (state)=>{
            state.mycount = 0;
        },
        incrementByUserAmount : (state,action)=>{
            state.mycount += action.payload;
        }
    }
})


export const {increment,decrement,reset,incrementByUserAmount} = counterSlice.actions;

export default counterSlice.reducer;
