import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StoreObjectSlice {
    value: any,
}
const initialState: StoreObjectSlice = {
    value: {},
}


const storeObjectSlice = createSlice({
    name: 'storeObject',
    initialState,
    reducers: {

        setObject(state, action:PayloadAction<any>) {
            state.value=Object.assign(state.value,action.payload)
        },
        removeObjectArrayElement:(state,action:PayloadAction<any>)=>{
            state.value=Object.assign
            (
                state.value, 
                {[action.payload.dataName]:[...state.value[action.payload.dataName].slice(0,action.payload.index),...state.value[action.payload.dataName].slice(action.payload.index+1,state.value[action.payload.dataName].length)]}
            )
        },
        removeObject:(state,action:PayloadAction<any>)=>{
            state.value=Object.assign(state.value, delete state.value[action.payload])
        },
        unSetObject:(state)=>{
            state.value={}
        },

        
    }
})

//Actions
export const storeObjectActions = storeObjectSlice.actions

//Selector
export const selectStoreObject = (state: { storeObject: { value: any } }) => state.storeObject.value

//Reducer
export const storeObjectReducer = storeObjectSlice.reducer