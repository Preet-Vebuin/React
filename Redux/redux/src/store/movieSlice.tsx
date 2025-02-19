import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFromAPI } from "../apis/api"; // ✅ Import API function

// ✅ Async Thunk to Fetch Movies
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page: number, { rejectWithValue }) => {
    try {
      const data = await fetchFromAPI(`paginated?page=${page}`);
      console.log("API Response:", data); // ✅ Log response
      if (!data || !data.data) {
        throw new Error("Invalid API response structure");
      }
      return data.data; // ✅ Returns array of movies
    } catch (error: any) {
      console.error("Fetch Movies Error:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

// ✅ Initial State
const initialState = {
  movies: [],
  isLoading: false,
  error: null,
  page: 1,
};

// ✅ Movies Slice (Reducers + Async Handling)
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload; // Update page number
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
    //   state.error = action.error.message;
      });
  },
});

export const { setPage } = moviesSlice.actions;
export default moviesSlice.reducer;
