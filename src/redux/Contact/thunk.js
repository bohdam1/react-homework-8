import { createAsyncThunk } from "@reduxjs/toolkit";
import {token, privateApi} from "../../components/API/API"
import { selectToken } from "../Auth/auth.selector";



// Fetch contacts
export const fetchContactsThunk = createAsyncThunk('contacts/fetch', async (_, { getState }) => {
    const stateToken = selectToken(getState());
    token.set(`Bearer ${stateToken.token}`);
    const { data } = await privateApi.get('/contacts');
    return data;
});

// Add contact
export const addContactsThunk = createAsyncThunk('contacts/add', async (contact, { getState }) => {
    const stateToken = selectToken(getState());
    token.set(`Bearer ${stateToken.token}`);
    const { data } = await privateApi.post('/contacts', contact);
    return data;
});

// Delete contact
export const deleteContactsThunk = createAsyncThunk('contacts/delete', async (id, { getState }) => {
    const stateToken = selectToken(getState());
    token.set(`Bearer ${stateToken.token}`);
    await privateApi.delete(`/contacts/${id}`);
    return id;
});






