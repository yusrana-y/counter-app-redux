import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"CounterSlice",
    initialState:{count:0},
    reducers:{
        //define the actions when state needs to be updated
        increment: (state)=>{
            state.count++
        },

        decrement : (state) => {
            state.count--
        },

        reset : (state)=>{
            return {...state,count:0}
        },

        incrementByAmount : (state,valueFromComponent) => {
            state.count += +valueFromComponent.payload
        }
    }
})

export default counterSlice.reducer
export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions