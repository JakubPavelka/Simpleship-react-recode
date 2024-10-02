import { createSlice } from "@reduxjs/toolkit";

interface Hamburger {
  isOpen: boolean;
}

const initialState: Hamburger = {
  isOpen: false,
};

const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export default hamburgerSlice.reducer;
export const { toggleMenu, closeMenu } = hamburgerSlice.actions;
