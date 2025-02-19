
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer, // Register movies reducer
  },
});


export default store;
