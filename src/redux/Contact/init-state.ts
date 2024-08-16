export const contactsInitState:Contacts = {
    items: [],
    isLoading: false,
    error: null,
};
export interface Contacts {
    items: Contact[],
    isLoading: boolean,
    error: null | string,
}

export interface Contact {
    id: string;
    name: string;
    number: string;
}
    