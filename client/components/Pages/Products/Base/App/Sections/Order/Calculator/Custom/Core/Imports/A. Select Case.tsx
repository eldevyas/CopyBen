import { MenuItem, Select } from "@mui/material";
import React from "react";
import { ProductFieldType } from "../../Types/ProductFields";

export default function SelectCase(props: {
    Field: ProductFieldType;
    Value: any;
    setValue: any;
}) {
    const { Field, Value, setValue } = props;
    return (
        <Select
            name="Conception"
            fullWidth
            value={Value ? Value : Field.options[0].label}
            placeholder="Choisissez une valeur"
            onChange={(event: any) => {
                return setValue(event.target.value as string);
            }}
        >
            {/* <MenuItem value={"Oui"}>Oui</MenuItem>
                    <MenuItem value={"Non"}>Non</MenuItem> */}
            {Field.options.map((Option) => {
                return (
                    <MenuItem key={Option.label} value={Option.label}>
                        {Option.label}
                    </MenuItem>
                );
            })}
        </Select>
    );
}
