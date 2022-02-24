import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserCardItem, UserFavorite } from "models";

export interface CurrentUserDataSlice {    
    card: UserCardItem[],
    favorite: UserFavorite[],
    default_card: string,
    payment_method: string,
}
const initialState: CurrentUserDataSlice = {    
    card: [],
    favorite: [],
    default_card: '',
    payment_method: '',
}


const currentUserDataSlice = createSlice({
    name: 'currentUserData',
    initialState,
    reducers: {
        unSetCurrentUserCard(state) {
            state.card = [];
        },
        
        setCurrentUserCard(state, action:PayloadAction<UserCardItem[]>) {
            state.card = action.payload;
        },

        removeOneCard(state, action:PayloadAction<string>) {
            state.card = state.card.filter((item) => String(item.id) !== action.payload);
        },
        
        unSetDefaultCard(state) {
            state.default_card = '';
        },
        setDefaultCard(state, action: PayloadAction<string>) {            
            state.default_card = action.payload;
        },

        addUserFav(state, action: PayloadAction<UserFavorite[]>) {
            state.favorite = action.payload            
        },

        removeUserFav(state, action:PayloadAction<UserFavorite[]>) {
            state.favorite = action.payload 
        },
        setPaymentMethod(state, action:PayloadAction<string>) {
            state.payment_method = action.payload;
        },
        removePaymentMethod(state) {
            state.payment_method = '';
        },


    }
})

//Actions
export const currentUserDataActions = currentUserDataSlice.actions

//Selector
export const selectCurrentUserCard = (state: { currentUser: { card: UserCardItem[] } }) => state.currentUser.card
export const selectDefaultCardID = (state: { currentUser: { default_card: string } }) => state.currentUser.default_card

export const selectCurrentUserFav = (state: { currentUser: { favorite: UserFavorite[] } }) => state.currentUser.favorite

export const selectPaymethod = (state: { currentUser: { paymethod: string } }) => state.currentUser.paymethod;


//Reducer
export const currentUserDataReducer = currentUserDataSlice.reducer