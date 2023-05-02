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

import axios from "axios";

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
        const url = "http://127.0.0.1:8000/api/register";

        axios
            .post(url, data)
            .then((res) => {
                console.log(res.status);
                setSending(false);
                setSnackbarMessage("Inscrit avec succès!");
                setSnackbarSeverity("success");
                setSnackbarOpen(true);
            })
            .catch((error) => {
                setSending(false);
                setSnackbarMessage(
                    "Échec de l'inscription ! Veuillez réessayer."
                );
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
                console.log(error);
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disableElevation
                    >
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        {isSending ? "Chargement..." : "S'inscrire"}
                    </Button>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Vous avez déjà un compte? Connectez-vous
                            </Link>
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
