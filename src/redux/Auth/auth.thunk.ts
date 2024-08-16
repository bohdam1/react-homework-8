import { createAsyncThunk } from "@reduxjs/toolkit";
import {PublickApi, token, privateApi} from "../../components/API/API"
import { selectToken } from "./auth.selector";
import { FormData } from "../../components/LoginForm/LoginForm";
import { RootState } from "../store";

export const fetchLoginThunk = createAsyncThunk('auth/login', async (formData:FormData) => {
    const { data } = await PublickApi.post('/users/login', formData);
    token.set( `Bearer ${data.token}`)
    return data;
  });

  export const LogoutThunk = createAsyncThunk('logout', async (_,{getState}) => {
    const stateToken = selectToken(getState() as RootState);
    
    if (stateToken && stateToken.token) {
        token.set(`Bearer ${stateToken.token}`);
        const { data } = await privateApi.post('/users/logout');
        return data;
    } else {
        throw new Error("Token is missing or invalid");
    }
});