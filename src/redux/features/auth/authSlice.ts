import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models/user";

export interface LoginPayLoad {    
    email: '',
    password: ''
}
export interface AuthSlice {
    isLoggedIn: Boolean,
    logging: Boolean
}
const initialState: AuthSlice = {
    isLoggedIn: false,
    logging: false
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayLoad>) {
            state.logging = true
            console.log(action)
        },
        loginSucess(state, action: PayloadAction<User>) {            
            state.isLoggedIn = true
            state.logging = false
            console.log(action)
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.logging = false
            console.log(action)
        },
        logout(state) {
            state.isLoggedIn = false
        }
    }
})

//Actions
export const authActions = authSlice.actions

//Selector
export const selectIsLoggedIn = (state: { auth: { isLoggedIn: Boolean; }; }) => state.auth.isLoggedIn
export const selectIsLogging = (state: { auth: { logging: Boolean; }; }) => state.auth.logging


//Reducer
export const authReducer = authSlice.reducer