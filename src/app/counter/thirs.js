import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const thirs = createSlice({
    name: 'fifteen',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 15
        },
        decrement: (state) => {
            state.value -= 15
        }
    },
})
export const { increment, decrement } = thirs.actions

export default thirs.reducer