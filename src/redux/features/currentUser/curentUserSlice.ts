import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserCard } from "models";

export interface CurrentUserSlice {
    self: User,
    card: UserCard[],
    payjp_customer_id : string
}
const initialState: CurrentUserSlice = {
    self: {},
    card: [],
    payjp_customer_id: ''
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
        },

        
        unSetPayjpCustomerID(state) {
            state.payjp_customer_id = '';
        },
        setPayjpCustomerID(state, action:PayloadAction<string>) {
            state.payjp_customer_id = action.payload;
        }
    }
})

//Actions
export const currentUserActions = currentUserSlice.actions

//Selector
export const selectCurrentUser = (state: { currentUser: { self: User } }) => state.currentUser.self
export const selectCurrentUserCard = (state: { currentUser: { card: UserCard[] } }) => state.currentUser.card
export const selectPayjpCustomerID = (state: { currentUser: { payjp_customer_id: string } }) => state.currentUser.payjp_customer_id


//Reducer
export const currentUserReducer = currentUserSlice.reducer