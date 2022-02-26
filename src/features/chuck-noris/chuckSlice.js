import { createSlice } from "@reduxjs/toolkit";
import { initialChuckState } from "./initialState";

export const chuckSlice = createSlice({
  name: "chuck-jokes",
  initialState: initialChuckState(),
  reducers: {
    setJokes(state, action) {
      if (state.jokes.data.length < 10) {
        state.jokes.data = [...state.jokes.data, ...action.payload.data];
      } else {
        state.jokes = {
          ...action.payload,
          data: [...state.jokes.data.slice(1), ...action.payload.data],
        };
      }
      localStorage.setItem("jokes", JSON.stringify(state.jokes));
    },
    resetJokes(state) {
      state.jokes = {
        data: [],
      };
      localStorage.setItem("jokes", JSON.stringify({ data: [] }));
    },
    setJoke(state, action) {
      state.joke = action.payload;
    },
    resetJoke(state) {
      state.joke = {};
    },
    filterFavorites(state, action) {
      state.jokes.data = state.jokes.data.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("jokes", JSON.stringify(state.jokes));
    },
  },
});
