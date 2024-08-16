import { RootState } from "../store";

export const selectAuthStatus = (state:RootState) => state.auth.isAuthenticated;

export const selectToken = (state:RootState) => state.auth.data;