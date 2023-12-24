import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIVisible: false },

  reducers: {
    toggle(state) {
      state.cartIVisible = !state.cartIVisible;
    },
  },
});

export const uiActions = uiSlice.actions

export default uiSlice