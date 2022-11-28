import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const authReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {

        },
        signup(state, action) {

        }
    }
})

export const { login, signup } = authReducer.actions

export default authReducer.reducer