import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import NextLink from "next/link";

import axios from "axios";
import { Login } from "@/redux/Slices/AuthSlice";
import { useAppDispatch } from "@/redux/Hooks";
import { useRouter } from "next/router";

function Copyright(props: any) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://copyben.ma/">
                CopyBen
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Register() {
    // Redux Things
    const Dispatch = useAppDispatch();

    // Router
    const Router = useRouter();

    // Process States
    const [isSending, setSending] = useState<boolean>(false);

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

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setSending(true);
        const data = new FormData(event.currentTarget);
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const URL = `${API_URL}/register`;

        console.log("Data sent: ", event.currentTarget);

        axios
            .post(URL, data)
            .then((response) => {
                console.log(response);
                setSending(false);
                setSnackbarMessage("Inscrit avec succès!");
                Dispatch(Login(response.data.user));
                Router.back();
                setSnackbarSeverity("success");
                setSnackbarOpen(true);
            })
            .catch((error) => {
                setSending(false);
                console.log(error);
                if (
                    error.response &&
                    error.response.data &&
                    error.response.data.errors
                ) {
                    const validationErrors = error.response.data.errors;
                    const errorMessage =
                        Object.values(validationErrors).join(" ");
                    setSnackbarMessage(errorMessage);
                } else {
                    setSnackbarMessage(
                        "Échec de l'inscription! Veuillez réessayer."
                    );
                }
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
            });
    };

    return (
        <Container component="main" maxWidth="xs" sx={{ mb: 3 }}>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography
                    component="h1"
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        color: "primary.main",
                    }}
                >
                    S&apos;inscrire
                </Typography>
                <Box
                    component="form"
                    // noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="Prénom"
                                autoFocus
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Nom de famille"
                                name="lastName"
                                autoComplete="family-name"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Adresse e-mail"
                                name="email"
                                autoComplete="email"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Mot de passe"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="phone_number"
                                label="Numéro de téléphone"
                                id="phone-number"
                                autoComplete="tel"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="address-level2"
                                name="city"
                                required
                                fullWidth
                                id="city"
                                label="Ville"
                                autoFocus
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="zipCode"
                                label="Code Postal"
                                name="zipCode"
                                autoComplete="postal-code"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                fullWidth
                                id="AddressLineOne"
                                label="Adresse 1"
                                name="AddressLineOne"
                                autoComplete="address-line1"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                fullWidth
                                id="AddressLineTwo"
                                label="Adresse 2"
                                name="AddressLineTwo"
                                autoComplete="address-line2"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                    {isSending ? (
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, cursor: "wait" }}
                            disableElevation
                        >
                            Chargement...
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disableElevation
                        >
                            S&apos;inscrire
                        </Button>
                    )}
                    <Grid container justifyContent="center">
                        <Grid item>
                            <NextLink href="/auth/login">
                                <Typography variant="body1" color={"GrayText"}>
                                    {"Vous avez déjà un compte? Connectez-vous"}
                                </Typography>
                            </NextLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
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
            <Copyright sx={{ mt: 5, mb: 5 }} />
        </Container>
    );
}
