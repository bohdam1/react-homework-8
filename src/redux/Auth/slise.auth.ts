import { createSlice } from "@reduxjs/toolkit";
import {authInitState} from "./init-state.auth"
import {fetchLoginThunk} from "./auth.thunk"
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {LogoutThunk} from "./auth.thunk"
import { PayloadAction  } from "@reduxjs/toolkit";



const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLoginThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(fetchLoginThunk.rejected, (state, action: PayloadAction<any>) => { 
        
        
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(LogoutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LogoutThunk.fulfilled, (state) => {
        state.data = null;
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(LogoutThunk.rejected, (state, action: PayloadAction<any>) => { // Типізуйте `action` згідно з вашим випадком
       
        state.isLoading = false;
      });
  },
});

const persistConfig = {
  key : "auth",
  storage,
  whitelist : ["data"],
}

export const authreducer = persistReducer( persistConfig,authSlice.reducer);