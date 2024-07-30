import { createAsyncThunk } from "@reduxjs/toolkit";
import {privateApi,token} from "../../components/API/API"
import { selectToken } from "../Auth/auth.selector";

export const fetchcurrentThunk = createAsyncThunk('current', async (_,{getState,rejectWithValue }) => {
  const stateToken = selectToken(getState())

  if(!stateToken){
    return rejectWithValue()
  }
  token.set( `Bearer ${stateToken.token}`) 
  const { data } = await privateApi.get('/users/current',);
  return data;
});


