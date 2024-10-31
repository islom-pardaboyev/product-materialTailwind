import { createSlice } from "@reduxjs/toolkit";

export const ShowSidebar = createSlice({
  name: "showSidebar",
  initialState: false,
  reducers: {
    toggleSidebar: (state) => !state,
  },
});

export const { toggleSidebar } = ShowSidebar.actions;