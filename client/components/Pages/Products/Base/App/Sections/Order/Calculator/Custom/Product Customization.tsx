import React, { useEffect, useState } from "react";
import Product from "@/types/Product";
import {
    Input,
    Select,
    Stack,
    Typography,
    SelectChangeEvent,
    MenuItem,
    FormControl,
    FormLabel,
    FormHelperText,
    Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(1),
}));

let ProductFields = {
    "Bloc Note": {
        label: "Bloc Note",
        unitPrice: 23.06,
        fields: [
            {
                name: "Assemblage",
                type: "Select",
                options: [
                    {
                        label: "Dos carré collé",
                        type: "Standard",
                        value: 0,
                    },
                    {
                        label: "Spiral plastique",
                        type: "Multiple",
                        value: {
                            100: 7,
                            "+100": 10,
                        },
                    },
                    {
                        label: "Spiral métallique",
                        type: "Multiple",
                        value: {
                            100: 10,
                            "+100": 15,
                        },
                    },
                    {
                        label: "Séré Feuille",
                        type: "Multiple",
                        value: {
                            100: 7,
                            "+100": 10,
                        },
                    },
                ],
            },
        ],
    },
};

export default function ProductCustomization(props: {
    Product: Product;
    Customization: any;
    setCustomization: any;
}) {
    // Product Custom Fields
    const [ProductType, setProductType] = useState<string>("");
    const [ProductName, setProductName] = useState<string>("");
    const [ProductFields, setProductFields] = useState<{}[]>([]);

    useEffect(() => {}, []);

    return <form></form>;
}
