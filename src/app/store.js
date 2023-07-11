import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/iceCreamSlice'
import userReducer from '../features/userAsync/userSlice'

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        icecream : icecreamReducer,
        userReducer : userReducer
    }
})

export default store;