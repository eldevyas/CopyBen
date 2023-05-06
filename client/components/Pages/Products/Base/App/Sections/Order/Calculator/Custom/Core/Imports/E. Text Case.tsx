import React from "react";
import { ProductFieldType } from "../../Types/ProductFields";
import { TextField } from "@mui/material";
export default function TextCase(props: {
    Field: ProductFieldType;
    Value: any;
    setValue: any;
}) {
    const { Field, Value, setValue } = props;

    return (
        <TextField
            value={Value}
            onChange={(event) => setValue(event.target.value)}
            variant="outlined"
        />
    );
}
