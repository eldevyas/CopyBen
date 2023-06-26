import LoginPage from "@/components/Pages/Auth/LoginPage";
import { useAppSelector } from "@/redux/Hooks";
import { OrderInfo } from "@/redux/Types/Order";
import { CircularProgress, Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Login() {
    const Router = useRouter();
    const isAuthenticated = useAppSelector(
        (state) => state.Auth.isAuthenticated
    );
    const Order: OrderInfo | null = useAppSelector((state) => state.Order);

    useEffect(() => {
        if (isAuthenticated && !Order) {
            Router.push("/");
        } else if (Order && isAuthenticated) {
            Router.push(`/Products/Order?Id=${Order.orderID}`);
        }
    }, [Order, Router, isAuthenticated]);

    return (
        <>
            {isAuthenticated ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        minHeight: "100vh",
                        width: "100%",
                        overflow: "hidden",
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <LoginPage />
            )}
        </>
    );
}
