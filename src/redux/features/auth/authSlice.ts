import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginPayLoad {    
    email: '',
    password: ''
}
export interface AuthSlice {
    isLoggedIn: Boolean,
    logging: Boolean,    
}
const initialState: AuthSlice = {
    isLoggedIn: false,
    logging: false,    
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        twitterLogin(state) {
            state.logging = true            
        },
        login(state, action: PayloadAction<LoginPayLoad>) {
            state.logging = true            
        },
        loginSucess(state, action: PayloadAction<string>) {            
            state.isLoggedIn = true            
            state.logging = false            
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.logging = false            
        },
        logout(state) {
            state.isLoggedIn = false
            state.logging = false
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