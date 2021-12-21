import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[],
};

const lotteryIndexSlice = createSlice({
    name:'lotteries',
    initialState,
    reducers:{
        getLotteries(){},
        setLotteries(state,action){
            state.value=action.payload
        },
    }
})

export const {getLotteries,setLotteries} = lotteryIndexSlice.actions;
export const lotteryIndexReducer = lotteryIndexSlice.reducer;
export const selectLotteries=state=>state.lotteries.value;