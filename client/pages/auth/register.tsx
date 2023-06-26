import RegisterPage from "@/components/Pages/Auth/RegisterPage";
import { useAppSelector } from "@/redux/Hooks";
import { OrderInfo } from "@/redux/Types/Order";
import { Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Register() {
    const Router = useRouter();
    const isAuthenticated = useAppSelector(
        (state) => state.Auth.isAuthenticated
    );
    const Order: OrderInfo | null = useAppSelector((state) => state.Order);

    useEffect(() => {
        if (isAuthenticated && !Order) {
            // If previous page is not auth page, go back
            Router.push("/");
        } else if (Order && isAuthenticated) {
            Router.push(`/Products/Order?Id=${Order.orderID}`);
        }
    }, [Order, Router, isAuthenticated]);

    // return <RegisterPage />;

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
                <RegisterPage />
            )}
        </>
    );
}
