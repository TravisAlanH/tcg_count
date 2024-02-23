import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: {},
};

const Slice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    UserData: (state, payload) => {
      state.user = payload;
    },
    LogoutUser: (state) => {
      state.user = {};
    },
  },
});

export const { UserData, LogoutUser } = Slice.actions;

export default Slice.reducer;
