import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    toast: {
        state: false,
        toastMessage: ''
    }

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
        },
        showToast(state, action) {
            const toastMessage = action.payload
            return { ...state, toast: { state: true, toastMessage } }
        },
        closeToast(state, action) {
            return { ...state, toast: { state: false, toastMessage: '' } }
        }

    }
})

export const { startLoading, stopLoading, closeToast, showToast } = loaderReducer.actions

export default loaderReducer.reducer