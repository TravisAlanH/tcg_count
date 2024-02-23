// import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import Login_Slices from "./Login_Slices";

const rootReducer = combineReducers({
  Login_Slices,
});

export default rootReducer;
