import { createSlice } from "@reduxjs/toolkit";
import {currentInitState} from "./current.init-state"
import {fetchcurrentThunk} from "./current.thunk"

const currentSlice = createSlice({
  name: "current",
  initialState: currentInitState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchcurrentThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchcurrentThunk.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(fetchcurrentThunk.rejected, (state, { error }) => {
        state.error = error.message;
        state.isLoading = false;
      });
  },
});


export const currentreducer = currentSlice.reducer;