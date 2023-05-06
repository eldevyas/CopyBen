import React from "react";
import { ProductFieldType } from "../../Types/ProductFields";
import { Input } from "@mui/material";

export default function NumberCase(props: {
    Field: ProductFieldType;
    Value: any;
    setValue: any;
}) {
    const { Field, Value, setValue } = props;

    return (
        <Input
            type="number"
            inputProps={{
                min: Field.min,
                max: Field.max,
                step: 50,
            }}
            name={Field.name}
            fullWidth
            value={Value}
            onChange={(event: React.ChangeEvent<any>) => {
                return setValue(event.target.value as number);
            }}
            onBlur={(event: any) => {
                if ((event.target.value as number) < 50) {
                    return setValue(50);
                } else if ((event.target.value as number) > 500) {
                    return setValue(500);
                }
            }}
        />
    );
}
