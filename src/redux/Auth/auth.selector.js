export const selectAuthStatus = (state) => state.auth.isAuthenticated;
export const selectToken = (state) => state.auth.data;