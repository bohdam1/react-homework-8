import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi, token } from "../../components/API/API";
import { RootState } from "../store"; 
import { selectToken } from "../Auth/auth.selector";

export const fetchcurrentThunk = createAsyncThunk(
  'current',
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState; 
    const stateToken = selectToken(state) ;

    if (!stateToken) {
      return rejectWithValue("Token not found");
    }

    token.set(`Bearer ${stateToken.token}`);
    const { data } = await privateApi.get('/users/current');
    return data;
  }
);
