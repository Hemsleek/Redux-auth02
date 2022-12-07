import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,

}

const authReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            const userData = action.payload
            return { ...state, user: userData }
        },
        logout(state, action) {
            return { ...state, user: null }
        }
    }
})

export const { login, logout } = authReducer.actions

export default authReducer.reducer