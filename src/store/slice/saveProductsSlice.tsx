import { createSlice } from "@reduxjs/toolkit";

export const SavedProducts = createSlice({
    name: "savedProducts",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload as never);
        },
    },
})

export const {addProduct} = SavedProducts.actions