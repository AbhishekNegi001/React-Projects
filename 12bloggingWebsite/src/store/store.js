import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "../features/slice";
// for keeping the check of if user is authetic or not
const store = configureStore({
    reducer: {
        auth: authSliceReducer
    }
})

export default store;