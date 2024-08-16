export const authInitState: auth = {
    data: {
        user: {
            name: "",
            email: "",
           
        },
        token: ""
    },
    isLoading: false,
    isAuthenticated: false,
    error: null,
};


export interface auth {
    data:null| {
        user:user
        token: null|string;
    };
    isLoading: boolean;
    isAuthenticated: boolean;
    error: any | string | null;
}

interface user {
    name: string;
    email: string;
    
    
}