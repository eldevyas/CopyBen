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
            sx={{
                backgroundColor: "#f2f2f2",
                borderRadius: "200px",
                border: "1px solid #eeeeee",
                outline: "none !important",
                overflow: "hidden",
                "& .MuiSelect-root": { borderRadius: "200px" },
                "& .MuiSelect-select": {
                    borderRadius: "200px",
                    padding: "10px 20px",
                },
                "& .MuiInputBase-root": {
                    borderRadius: "200px",
                    padding: "10px 20px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #eeeeee !important",
                    borderRadius: "200px",
                },
            }}
        />
    );
}
