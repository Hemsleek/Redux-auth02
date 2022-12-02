import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false
}

const loaderReducer = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        startLoading(state, action) {
            return { ...state, isLoading: true }
        },
        stopLoading(state, action) {
            return { ...state, isLoading: false }
        }

    }
})

export const { startLoading, stopLoading } = loaderReducer.actions

export default loaderReducer.reducer