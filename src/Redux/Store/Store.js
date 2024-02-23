import { configureStore } from "@reduxjs/toolkit";
import Reducers from "../Slices/Main_Slices";

export const store = configureStore({
  reducer: {
    data: Reducers,
  },
});
