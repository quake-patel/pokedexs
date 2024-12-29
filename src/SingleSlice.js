import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonList: "",
};

const SingleSlice = createSlice({
  name: "SingleList",
  initialState,
  reducers: {
    createsingleList: (state, action) => {
      state.pokemonList += action.payload;
    },
  },
});

export const { createsingleList } = SingleSlice.actions;
export const SinglePokStore = SingleSlice.reducer;
