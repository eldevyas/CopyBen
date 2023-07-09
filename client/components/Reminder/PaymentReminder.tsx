/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Typography } from "@mui/material";
import { Danger, Whatsapp } from "iconsax-react";
import { useEffect } from "react";

const PaymentReminder = () => {
    useEffect(() => {
        const blockInteractions = () => {
            document.body.style.overflow = "hidden";
            // Add any additional styles or modifications to block interactions
        };

        const unblockInteractions = () => {
            document.body.style.overflow = "";
            // Add any additional styles or modifications to unblock interactions
        };

        blockInteractions();

        return () => {
            unblockInteractions();
        };
    }, []);

    return (
        <Box className="stripe">
            <Box className="stripe_inner" />
            <Box
                sx={{
                    position: "relative",
                    marginTop: "0",
                    marginBottom: "2.5rem",
                    padding: "1rem",
                    borderRadius: "1rem",
                    // backgroundColor: "rgba(255, 255, 255, 0.5)",
                    zIndex: 10000,
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // color: "#d31027",
                    color: "#fff",
                }}
            >
                <Danger variant="Broken" size="100" color="currentColor" />
            </Box>
            <Box
                sx={{
                    maxWidth: "40rem",
                    width: "100%",
                    zIndex: 10000,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 800,
                        marginBottom: "1rem",
                    }}
                    textTransform={"uppercase"}
                >
                    Veuillez payer les Développeurs !
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 500,
                        marginBottom: "1rem",
                    }}
                    textTransform={"uppercase"}
                >
                    On a pas encore reçu le paiement pour le travail qu'on a
                    fait pour vous.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 500,
                        marginBottom: "1rem",
                    }}
                    textTransform={"uppercase"}
                >
                    Le site{" "}
                    <Typography
                        variant="body1"
                        component="span"
                        sx={{
                            fontWeight: 800,
                        }}
                    >
                        Copyben.ma
                    </Typography>{" "}
                    est un site de démonstration, il n'est pas encore en
                    production. Si vous voulez publier le site en production,
                    veuillez nous payer.
                </Typography>

                {/* <Button
                    variant="contained"
                    color="error"
                    startIcon={
                        <Whatsapp
                            variant="Bulk"
                            size="24"
                            color="currentColor"
                        />
                    }
                    sx={{
                        fontWeight: 800,
                        padding: "0.75rem 1rem",
                        backgroundColor: "white",
                        color: "rgba(255, 50, 50, 1)",
                        // Hover
                        "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                        },
                    }}
                >
                    WhatsApp
                </Button> */}
            </Box>
        </Box>
    );
};

export default PaymentReminder;
