import { configureStore } from "@reduxjs/toolkit";
import { SinglePokStore } from "./SingleSlice";

export const Store = configureStore({
  reducer: {
    SingleList: SinglePokStore,
  },
});
