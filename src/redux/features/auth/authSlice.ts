import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginPayLoad {    
    email: '',
    password: ''
}
export interface AuthSlice {
    isLoggedIn: Boolean,
    logging: Boolean,
    logouting: Boolean,
}
const initialState: AuthSlice = {
    isLoggedIn: false,
    logging: false,
    logouting: false
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        socialLogin(state, _action:PayloadAction<string>) {
            state.logging = true            
        },
        login(state, _action:PayloadAction<LoginPayLoad>) {
            state.logging = true            
        },
        loginSucess(state) {
            state.isLoggedIn = true
            state.logging = false
        },
        loginFailed(state) {
            state.isLoggedIn = false
            state.logging = false
        },
        logout(state) {            
            state.logouting = true
        },
        logoutSucess(state) {
            state.isLoggedIn = false
            state.logouting = false
        },
        reset(state) {
            state = undefined;
        }
    }
})

//Actions
export const authActions = authSlice.actions

//Selector
export const selectIsLoggedIn = (state: { auth: { isLoggedIn: Boolean; }; }) => state.auth.isLoggedIn
export const selectIsLogging = (state: { auth: { logging: Boolean; }; }) => state.auth.logging
export const selectIsLogouting = (state: { auth: { logouting: Boolean; }; }) => state.auth.logouting


//Reducer
export const authReducer = authSlice.reducer