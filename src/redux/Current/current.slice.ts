import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {currentInitState} from "./current.init-state"
import {fetchcurrentThunk} from "./current.thunk"
import { Current } from "./current.init-state";
const currentSlice = createSlice({
  name: "current",
  initialState: currentInitState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchcurrentThunk.pending, (state) => {
        
      })
      .addCase(fetchcurrentThunk.fulfilled, (state, { payload }: PayloadAction<Current>) => {
        state.data = payload;
       
      })
      .addCase(fetchcurrentThunk.rejected, (state, { error }) => {
       
      });
  },
});


export const currentreducer = currentSlice.reducer;