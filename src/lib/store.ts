
import { configureStore } from "@reduxjs/toolkit"
import myReducer from "@/lib/features/carData/carDataSlice"
export const store = configureStore({
    reducer: myReducer

})
