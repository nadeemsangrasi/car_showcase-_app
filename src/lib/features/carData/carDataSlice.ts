import { CarInfo } from "@/types/type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { carData: CarInfo[] | any, loading: boolean } = {
    carData: [],
    loading: true,

}
export const carDataSlice: any = createSlice({
    name: "carData",
    initialState,
    reducers: {
        addData: (state: { carData: CarInfo[] | any, loading: boolean } = initialState, action: { payload: { data: CarInfo, loading: boolean } }) => {
            if (action.payload?.data !== undefined) {
                state.carData = action.payload?.data
                state.loading = action.payload.loading

            }

        }
    }
})

export let { addData } = carDataSlice.actions
export default carDataSlice.reducer