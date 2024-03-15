import {configureStore} from "@reduxjs/toolkit"
import counterReducer from '../features/counter/counterSlice'

// counterName
export const store = configureStore({
    reducer:{
        countername : counterReducer,
    }
})  