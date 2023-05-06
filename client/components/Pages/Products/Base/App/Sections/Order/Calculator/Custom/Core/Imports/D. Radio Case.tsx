import React from "react";
import { ProductFieldType } from "../../Types/ProductFields";
import {
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
export default function RadioCase(props: {
    Field: ProductFieldType;
    Value: any;
    setValue: any;
}) {
    const { Field, Value, setValue } = props;

    return (
        <RadioGroup
            value={Value}
            onChange={(event) => setValue(event.target.value)}
        >
            {Field.options.map((option: any) => (
                <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={option}
                />
            ))}
        </RadioGroup>
    );
}
