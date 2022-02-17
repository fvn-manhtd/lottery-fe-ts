import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserCard, UserFavorite } from "models";

export interface CurrentUserSlice {
    self: User,
    card: UserCard[],
    favorite: UserFavorite[],
    default_card : string
}
const initialState: CurrentUserSlice = {
    self: {},
    card: [],
    favorite: [],
    default_card: '',
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

        removeOneCard(state, action:PayloadAction<string>) {
            state.card = state.card.filter((item) => String(item.id) !== action.payload);
        },
        
        unSetDefaultCard(state) {
            state.default_card = '';
        },
        setDefaultCard(state, action:PayloadAction<string>) {
            state.default_card = action.payload;
        },

        addUserFav(state, action: PayloadAction<UserFavorite[]>) {
            state.favorite = action.payload            
        },

        removeUserFav(state, action:PayloadAction<number>) {
            state.favorite = state.favorite.filter((item) => item.lottery_category_id !== action.payload);            
        },


    }
})

//Actions
export const currentUserActions = currentUserSlice.actions

//Selector
export const selectCurrentUser = (state: { currentUser: { self: User } }) => state.currentUser.self
export const selectCurrentUserCard = (state: { currentUser: { card: UserCard[] } }) => state.currentUser.card
export const selectDefaultCardID = (state: { currentUser: { default_card: string } }) => state.currentUser.default_card

export const selectCurrentUserFav = (state: { currentUser: { favorite: UserFavorite[] } }) => state.currentUser.favorite


//Reducer
export const currentUserReducer = currentUserSlice.reducer