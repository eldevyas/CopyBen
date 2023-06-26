/* eslint-disable react/no-unescaped-entities */
import { SetOrder, ResetOrder } from "@/redux/Actions/OrderActions";
import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import { OrderInfo } from "@/redux/Types/Order";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Container,
    Snackbar,
    Stack,
    Typography,
} from "@mui/material";
import axios from "axios";
import { Direct, Gallery, Home, Home2, Home3 } from "iconsax-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Order() {
    const [isLoading, setLoading] = useState<boolean>(true);
    const Router = useRouter();
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    // MUI states
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<
        "success" | "error" | "warning" | "info" | undefined
    >(undefined);

    // Methods
    const handleSnackbarOpen = () => {
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const Dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(
        (state) => state.Auth.isAuthenticated
    );
    const User = useAppSelector((state) => state.Auth.User);
    const Order = useAppSelector((state) => state.Order);

    useEffect(() => {
        if (!isAuthenticated) {
            console.log("Not Authenticated yet.");
            Router.push("/auth/login");
        } else {
            const Info = {
                orderID: Order?.orderID || null,
                userInfo: User || null,
                Product: Order?.Product || null,
                Customization: Order?.Customization || null,
                Files: Order?.Files || null,
            };

            Dispatch(SetOrder(Info as OrderInfo));

            console.log("Final Upload: ", Info);
            console.log("Dispatched: ", Order);

            axios
                .post(`${API_URL}/order`, Info)
                .then((res) => {
                    console.log("Response: ", res.data);
                    setSnackbarMessage("Votre commande s'est bien envoyée.");
                    setSnackbarSeverity("success");
                    Dispatch(ResetOrder());
                    handleSnackbarOpen();
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setSnackbarMessage(
                        "Erreur lors de l'envoi de la commande."
                    );
                    setSnackbarSeverity("error");
                    handleSnackbarOpen();
                    setLoading(false);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {isLoading ? (
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
                    <Container
                        maxWidth="sm"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            mt: 10,
                            gap: 2,
                        }}
                    >
                        <Direct size="80" color="currentColor" variant="Bulk" />
                        <Typography variant="h4" sx={{ fontWeight: 900 }}>
                            Merci pour votre commande!
                        </Typography>
                        <Typography variant="body1" align="center">
                            Nous avons bien reçu votre commande. Votre
                            satisfaction est notre priorité, nous allons traiter
                            votre commande dans les meilleurs délais.
                        </Typography>
                        <Stack
                            marginTop={2}
                            direction={{ xs: "column", sm: "row" }}
                            spacing={2}
                        >
                            <Button
                                disableElevation
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={() => {
                                    Router.push("/");
                                }}
                                startIcon={
                                    <Home color="currentColor" variant="Bulk" />
                                }
                                sx={{
                                    whiteSpace: "nowrap",
                                }}
                                fullWidth
                            >
                                Retour à l'accueil
                            </Button>
                            <Button
                                disableElevation
                                variant="outlined"
                                color="primary"
                                size="small"
                                sx={{
                                    color: "primary.main",
                                    whiteSpace: "nowrap",
                                }}
                                onClick={() => {
                                    Router.push("/Products");
                                }}
                                startIcon={
                                    <Gallery
                                        color="currentColor"
                                        variant="Bulk"
                                    />
                                }
                                fullWidth
                            >
                                Voir nos produits
                            </Button>
                        </Stack>
                    </Container>
                </Box>
            )}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={snackbarSeverity}
                    sx={{ width: "100%" }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
}
