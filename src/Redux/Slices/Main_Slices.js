// import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import Login_Slices from "./Login_Slices";
import GameState_Slices from "./GameState_Slices";
import MTGCommander_Slices from "./MTGSlices/MTGCommander_Slices";

const rootReducer = combineReducers({
  Login_Slices,
  GameState_Slices,
  MTGCommander_Slices,
});

export default rootReducer;
