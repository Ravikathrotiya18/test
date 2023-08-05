import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const fourth = createSlice({
    name: 'random',
    initialState,
    reducers: {
        input: (state, action) => {
            state.value += action.payload
        },
    },
})
export const { input } = fourth.actions

export default fourth.reducer