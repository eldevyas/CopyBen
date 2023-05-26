import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useAuth } from "@/context/AuthContext";
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

export default function Login() {
    // Auth Context
    const { isLoggedIn, login, logout, userInfo }: any = useAuth();

    // Process States
    const [isSending, setSending] = React.useState<boolean>(false);

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

        const URL = `${API_URL}/login`;

        axios
            .post(URL, data)
            .then((res) => {
                console.log(res);
                if (res.data == "Email ou Mot de passe incorrect.") {
                    setSending(false);
                    setSnackbarMessage("Email ou Mot de passe incorrect.");
                    setSnackbarSeverity("error");
                    setSnackbarOpen(true);
                    return;
                }
                setSending(false);
                login(res.data["loggedIn"]);
                setSnackbarMessage("Connexion réussie !");
                setSnackbarSeverity("success");
                setSnackbarOpen(true);
            })
            .catch((error) => {
                setSending(false);
                setSnackbarMessage(
                    "Échec de la connexion! Veuillez réessayer."
                );
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
                console.log(error);
            });
    };

    return (
        <Container component="main" maxWidth="xs">
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
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                >
                    Se Connecter
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Adresse e-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mot de passe"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Se souvenir de moi"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disableElevation
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: "primary.main",
                            color: "white",
                        }}
                    >
                        {isSending ? "Chargement..." : "S'identifier"}
                    </Button>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item>
                            <NextLink href="/auth/register">
                                <Typography variant="body1" color={"GrayText"}>
                                    {
                                        "Vous n'avez pas de compte ? Inscrivez-vous"
                                    }
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
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}
