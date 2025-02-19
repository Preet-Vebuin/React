import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial state for the counter
const initialState = {
  count: 0,
};

// Create a slice (contains reducer + actions)
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state,action : PayloadAction<number>) => {
         state.count +=action.payload
    }  
  },
});

// Export actions
export const { increment, decrement, reset,incrementByAmount} = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
