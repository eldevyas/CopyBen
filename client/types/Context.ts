interface UserType {
    id: number;
    fname: string;
    lname: string;
    phone: string;
    city: string;
    zip: string;
    address: string;
    email: string;
}

interface Context {
    isLoggedIn: boolean;
    userInfo: UserType | null;
    login: (userData: UserType) => void;
    logout: () => void;
}

export type {
    Context,
    UserType
}