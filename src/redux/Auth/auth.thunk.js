import { createAsyncThunk } from "@reduxjs/toolkit";
import {PublickApi, token, privateApi} from "../../components/API/API"
import { selectToken } from "./auth.selector";

export const fetchLoginThunk = createAsyncThunk('auth/login', async (formData) => {
    const { data } = await PublickApi.post('/users/login', formData);
    token.set( `Bearer ${data.token}`)
    return data;
  });

export const LogoutThunk = createAsyncThunk('logout', async (_,{getState, }) => {
    const stateToken = selectToken(getState())
  
    
    token.set( `Bearer ${stateToken.token}`) 
    const { data } = await privateApi.post('/users/logout',);
    return data;
  });
  