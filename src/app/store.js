import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice'
import second from './counter/second'
import thirs from './counter/thirs'
import fourth from './counter/fourth'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        ten : second,
        fifteen : thirs,
        random : fourth,
    },
})