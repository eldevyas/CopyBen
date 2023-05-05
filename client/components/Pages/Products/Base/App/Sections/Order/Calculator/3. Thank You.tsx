/* eslint-disable react/no-unescaped-entities */
import { Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";

const ThankYouScreen = () => {
    const Router = useRouter();
    //
    //
    return (
        <Container
            maxWidth="sm"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 10,
            }}
        >
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 900 }}>
                Merci pour votre commande!
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                Nous avons bien reçu votre commande. Votre satisfaction est
                notre priorité, nous allons traiter votre commande dans les
                meilleurs délais.
            </Typography>
            <Button
                disableElevation
                variant="contained"
                color="primary"
                sx={{ mt: 4 }}
                onClick={() => {
                    Router.push("/");
                }}
            >
                Retour à l'accueil
            </Button>
        </Container>
    );
};

export default ThankYouScreen;
