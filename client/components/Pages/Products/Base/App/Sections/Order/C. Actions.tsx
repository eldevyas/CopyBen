import { Box, Button } from "@mui/material";
import React from "react";
import { ArrowUp, DirectSend, DirectUp } from "iconsax-react";

export default function Actions() {
    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "1rem",
                flex: "1",
                minWidth: "250px",
                overflow: "hidden",
                gap: "0.5rem",
            }}
        >
            <Button
                sx={{
                    width: "100%",
                    height: "auto",
                    padding: "1rem",
                }}
                color="primary"
                variant="contained"
                startIcon={<DirectUp color="currentColor" variant="Bulk" />}
            >
                Passer Commande
            </Button>
            <Button
                sx={{
                    width: "100%",
                    height: "auto",
                    padding: "1rem",
                }}
                color="secondary"
                variant="contained"
                startIcon={<DirectSend color="currentColor" variant="Bulk" />}
            >
                Charger Votre Fichier
            </Button>
        </Box>
    );
}
