import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementForSlice(state, action) {
            state.value = state.value + action.payload
        },
        decrementForSlice(state, action) {
            state.value = state.value - action.payload
        },
        resetForSlice(state) {
            return initialState
        }
    }
})
export const { incrementForSlice, decrementForSlice, resetForSlice } = counterSlice.actions
export default counterSlice.reducer