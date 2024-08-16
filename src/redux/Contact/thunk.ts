import { createAsyncThunk } from "@reduxjs/toolkit";
import {token, privateApi} from "../../components/API/API"
import { selectToken } from "../Auth/auth.selector";
import { RootState } from "../store";


// Fetch contacts
export const fetchContactsThunk = createAsyncThunk('contacts/fetch', async (_, { getState }) => {
    const stateToken = selectToken(getState() as RootState);

    if (stateToken && stateToken.token) {
        token.set(`Bearer ${stateToken.token}`);
        const { data } = await privateApi.get('/contacts');
        return data;
    } else {
        throw new Error("Token is missing or invalid");
    }
});

// Add contact
export const addContactsThunk = createAsyncThunk('contacts/add', async (contact: object, { getState }) => {
    const stateToken = selectToken(getState() as RootState);

    if (stateToken && stateToken.token) {
        token.set(`Bearer ${stateToken.token}`);
        const { data } = await privateApi.post('/contacts', contact);
        return data;
    } else {
        throw new Error("Token is missing or invalid");
    }
});

// Delete contact
export const deleteContactsThunk = createAsyncThunk('contacts/delete', async (id: string, { getState }) => {
    const stateToken = selectToken(getState() as RootState);

    if (stateToken && stateToken.token) {
        token.set(`Bearer ${stateToken.token}`);
        await privateApi.delete(`/contacts/${id}`);
        return id;
    } else {
        throw new Error("Token is missing or invalid");
    }
});





