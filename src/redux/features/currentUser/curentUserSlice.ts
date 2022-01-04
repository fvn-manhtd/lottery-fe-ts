import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models";

export interface CurrentUserSlice {
    data: User,
}
const initialState: CurrentUserSlice = {
    data: {}
}


const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        unSetCurrentUser(state) {
            state.data = {};
        },
        setCurrentUser(state, action:PayloadAction<User>) {
            state.data = action.payload;
        },
    }
})

//Actions
export const currentUserActions = currentUserSlice.actions

//Selector
export const getCurrentUser = (state: { currentUser: { data: User } }) => state.currentUser.data


//Reducer
export const currentUserReducer = currentUserSlice.reducer