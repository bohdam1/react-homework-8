import { createSlice } from "@reduxjs/toolkit";
import {fetchContactsThunk,addContactsThunk,deleteContactsThunk} from "./thunk"
import { contactsInitState } from "./init-state";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContactsThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
                state.items = payload;
                state.isLoading = false;
            })
            .addCase(fetchContactsThunk.rejected, (state, { error }) => {
                state.error = error.message;
                state.isLoading = false;
            })
            .addCase(addContactsThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
                state.items.push(payload);
                state.isLoading = false;
            })
            .addCase(addContactsThunk.rejected, (state, { error }) => {
                state.error = error.message;
                state.isLoading = false;
            })
            .addCase(deleteContactsThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
                state.items = state.items.filter((contact) => contact.id !== payload);
                state.isLoading = false;
            })
            .addCase(deleteContactsThunk.rejected, (state, { error }) => {
                state.error = error.message;
                state.isLoading = false;
            });
    }
});





export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;


