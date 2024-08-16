import { createSlice } from "@reduxjs/toolkit";
import {fetchContactsThunk,addContactsThunk,deleteContactsThunk} from "./thunk"
import { contactsInitState } from "./init-state";
import { PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "./init-state";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContactsThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchContactsThunk.fulfilled, (state, { payload }: PayloadAction<[]>) => {
                state.items = payload;
                state.isLoading = false;
            })
            .addCase(fetchContactsThunk.rejected, (state, { error }) => {
               
                state.isLoading = false;
            })
            .addCase(addContactsThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addContactsThunk.fulfilled, (state, { payload }: PayloadAction<Contact>) => {
                state.items.push(payload);
                state.isLoading = false;
            })
            .addCase(addContactsThunk.rejected, (state, { error }) => {
                
                state.isLoading = false;
            })
            .addCase(deleteContactsThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteContactsThunk.fulfilled, (state, { payload }: PayloadAction<string>) => {
                state.items = state.items.filter((contact) => contact.id !== payload);
                state.isLoading = false;
            })
            .addCase(deleteContactsThunk.rejected, (state, { error }) => {
                
                state.isLoading = false;
            });
    }
});



// export const { addContact, deleteContactsThunk } = contactsSlice.actions;

export default contactsSlice.reducer;


