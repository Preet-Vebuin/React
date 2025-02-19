import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer, // Register movies reducer
  },
});

export type RootState = ReturnType<typeof store.getState>; // ✅ Define RootState
export type AppDispatch = typeof store.dispatch; // ✅ Define AppDispatch

export default store;