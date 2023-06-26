import React, { useEffect, useState } from "react";
import Product from "@/types/Product";
import {
    ProductFields as Fields,
    ProductFieldType as FieldType,
} from "./../Types/ProductFields";
import SelectCase from "./Imports/A. Select Case";
import CheckboxCase from "./Imports/B. Checkbox Case";
import NumberCase from "./Imports/C. Number Case";
import RadioCase from "./Imports/D. Radio Case";
import TextCase from "./Imports/E. Text Case";
import { FormControl, FormLabel } from "@mui/material";

export default function ProductField(props: {
    ParentValue: any;
    // onChange: any;
    Field: FieldType;
    setCustomization: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}) {
    const { Field, setCustomization, ParentValue } = props;
    const [Value, setValue] = useState<any>(ParentValue);

    useEffect(() => {
        setCustomization((prev: Record<string, any>) => ({
            ...prev,
            [Field.name]: Value,
        }));
    }, [Field.name, Value, setCustomization]);

    return (
        <FormControl
            sx={{
                mb: 2.5,
                width: "100%",
            }}
            variant="outlined"
        >
            <FormLabel
                sx={{
                    mb: 1,
                    fontWeight: "bold",
                    paddingInline: "20px",
                    // focus
                    "&.Mui-focused": {
                        color: "#000000",
                    },
                }}
            >
                {Field.name}
            </FormLabel>
            {Field.type === "Select" && (
                <SelectCase Field={Field} Value={Value} setValue={setValue} />
            )}
            {Field.type === "Checkbox" && (
                <CheckboxCase Field={Field} Value={Value} setValue={setValue} />
            )}
            {Field.type === "Number" && (
                <NumberCase Field={Field} Value={Value} setValue={setValue} />
            )}
            {Field.type === "RadioGroup" && (
                <RadioCase Field={Field} Value={Value} setValue={setValue} />
            )}
            {Field.type === "TextField" && (
                <TextCase Field={Field} Value={Value} setValue={setValue} />
            )}
        </FormControl>
    );
}
