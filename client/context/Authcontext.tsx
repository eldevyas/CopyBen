import { createContext, useContext, useState } from "react";
import { UserType, Context } from "@/types/Context";

export const AuthContext = createContext<Context | null>(null);

export const AuthProvider: any = ({ children, props }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState<UserType | null>(null);

    const login = (userData: UserType) => {
        setIsLoggedIn(true);
        setUserInfo(userData);
        localStorage.setItem("userInfo", JSON.stringify(userData));
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserInfo(null);
        localStorage.removeItem("userInfo");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, userInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
