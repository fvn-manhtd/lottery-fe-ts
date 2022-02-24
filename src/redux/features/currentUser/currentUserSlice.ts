import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models";

export interface CurrentUserSlice {
    self: User
}
const initialState: CurrentUserSlice = {
    self: {},
}


const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        unSetCurrentUser(state) {
            state.self = {};
        },
        setCurrentUser(state, action:PayloadAction<User>) {
            state.self = action.payload;
        },

       

    }
})

//Actions
export const currentUserActions = currentUserSlice.actions

//Selector
export const selectCurrentUser = (state: { currentUser: { self: User } }) => state.currentUser.self

//Reducer
export const currentUserReducer = currentUserSlice.reducer