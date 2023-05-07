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
import {
    ProductFields as Fields,
    ProductFieldType as FieldType,
    getDefaultValues,
    ProductFieldType,
    calculatePrice,
} from "./Types/ProductFields";
import ProductField from "./Core/ProductField";

const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(1),
}));

export default function ProductCustomization(props: {
    Product: Product;
    Customization: { [key: string]: any };
    setCustomization: React.Dispatch<
        React.SetStateAction<{ [key: string]: any }>
    >;
}) {
    // Parent Properties
    const Product = props.Product;
    const Customization = props.Customization;
    const setCustomization = props.setCustomization;

    // Product Custom Fields
    const [ProductFields, setProductFields] = useState<FieldType[]>(Fields);
    // State for selected values
    const [selectedValues, setSelectedValues] = useState<{
        [key: string]: any;
    }>(Customization);

    useEffect(() => {
        setCustomization(selectedValues);
    }, [selectedValues, setCustomization]);

    return (
        <Stack
            direction={"column"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            gap={"0.5rem"}
            sx={{
                mb: 2.5,
                width: "100%",
            }}
        >
            {ProductFields.map((field: any) => {
                return (
                    <ProductField
                        key={field.name}
                        Field={field}
                        ParentValue={
                            selectedValues[field.name]
                                ? selectedValues[field.name]
                                : null
                        }
                        setCustomization={setSelectedValues}
                    />
                );
            })}
        </Stack>
    );
}
