import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  matchScreen: false,
  tableLayout: [],
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
    BuildTableLayout: (state, action) => {
      state.tableLayout = action.payload;
    },
  },
});

export const { turnMatchScreenOn, turnMatchScreenOff, BuildTableLayout } = Slice.actions;

export default Slice.reducer;
