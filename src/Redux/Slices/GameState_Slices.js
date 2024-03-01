import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  matchScreen: false,
};

const Slice = createSlice({
  name: "GameState",
  initialState,
  reducers: {
    turnMatchScreenOn: (state) => {
      state.matchScreen = true;
    },
    turnMatchScreenOff: (state) => {
      state.matchScreen = false;
    },
  },
});

export const { turnMatchScreenOn, turnMatchScreenOff } = Slice.actions;

export default Slice.reducer;
