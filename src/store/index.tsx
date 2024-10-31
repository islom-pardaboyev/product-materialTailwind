import { configureStore } from "@reduxjs/toolkit";
import {SavedProducts}  from "./slice/saveProductsSlice";
import { ShowSidebar } from "./slice/showSidebarSlice";

export const store = configureStore({
    reducer: {
        [SavedProducts.name]: SavedProducts.reducer,
        [ShowSidebar.name]: ShowSidebar.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;