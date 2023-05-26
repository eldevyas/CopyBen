import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { UserType, Context } from "@/types/Context";

export const AuthContext = createContext<Context | null>(null);

export const AuthProvider: any = ({ children, props }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState<UserType | null>(null);

    useEffect(() => {
        const userInfoFromLocalStorage = localStorage.getItem("userInfo");
        if (userInfoFromLocalStorage) {
            const parsedUserInfo = JSON.parse(userInfoFromLocalStorage);
            setUserInfo(parsedUserInfo);
            setIsLoggedIn(true);
        }
    }, []);

    const login = (userData: UserType) => {
        setIsLoggedIn(true);
        setUserInfo(userData);
        console.log(userData);
        localStorage.setItem("userInfo", JSON.stringify(userData));
        console.log("Local Storage: ", localStorage.getItem("userInfo"));
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserInfo(null);
        localStorage.removeItem("userInfo");
    };

    return React.createElement(
        AuthContext.Provider,
        { value: { isLoggedIn, login, logout, userInfo } },
        children
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
