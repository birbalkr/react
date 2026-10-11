import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        userName: null,
        isAuthenticated: false,
        isloading: false
    },
    reducers: {
        login: (state, action) => {
            state.userName = action.payload;
            state.isAuthenticated = true;
        },
        addUser: (state, action) => {
            state.userName = action.payload
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.userName = null
            state.isAuthenticated = false
        },
    }

})

export const { login, addUser, logout } = AuthSlice.actions
export default AuthSlice.reducer