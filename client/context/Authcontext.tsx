import { createContext, useContext, useState } from "react";

const AuthContext: any = createContext(null);

export const AuthProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    const login = (userData: any) => {
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
