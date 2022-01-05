import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserCard } from "models";

export interface CurrentUserSlice {
    self: User,
    card: UserCard[],
}
const initialState: CurrentUserSlice = {
    self: {},
    card: [],
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

        unSetCurrentUserCard(state) {
            state.card = [];
        },
        setCurrentUserCard(state, action:PayloadAction<UserCard[]>) {
            state.card = action.payload;
        }
    }
})

//Actions
export const currentUserActions = currentUserSlice.actions

//Selector
export const selectCurrentUser = (state: { currentUser: { self: User } }) => state.currentUser.self
export const selectCurrentUserCard = (state: { currentUser: { card: UserCard } }) => state.currentUser.card


//Reducer
export const currentUserReducer = currentUserSlice.reducer