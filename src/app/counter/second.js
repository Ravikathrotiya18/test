import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const second = createSlice({
    name: 'ten',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 10
        },
        decrement: (state) => {
            state.value -= 10
        }
    },
})
export const { increment, decrement } = second.actions

export default second.reducer