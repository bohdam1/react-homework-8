import axios from "axios";

export const privateApi = axios.create({
    baseURL: 'https://connections-api.goit.global',
   
})

export const PublickApi = axios.create({
    baseURL: 'https://connections-api.goit.global',
   
})

export const token = {
    set:(token) =>{
        privateApi.defaults.headers.Authorization = token;
    },

    remove: () => {
        privateApi.defaults.headers.Authorization = null;
    }
}