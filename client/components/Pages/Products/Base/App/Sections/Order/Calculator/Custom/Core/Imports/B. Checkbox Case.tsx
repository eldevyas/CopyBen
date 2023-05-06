import React from "react";
import { ProductFieldType } from "../../Types/ProductFields";
import {
    FormControlLabel,
    Checkbox,
    Box,
} from "@mui/material";

export default function CheckboxCase(props: {
    Field: ProductFieldType;
    Value: any;
    setValue: any;
}) {
    const { Field, Value, setValue } = props;

    return (
        <>
            {Field.options.map((Option: any) => {
                const children = Array.isArray(Option.value)
                    ? Option.value.map((InnerOption: any) => (
                          <FormControlLabel
                              key={InnerOption.label}
                              label={InnerOption.label}
                              control={
                                  <Checkbox
                                      checked={Value === InnerOption.label}
                                      onChange={() =>
                                          setValue(InnerOption.label)
                                      }
                                  />
                              }
                          />
                      ))
                    : null;
                return (
                    <>
                        <FormControlLabel
                            key={Option.label}
                            label={Option.label}
                            control={
                                <Checkbox
                                    checked={
                                        Array.isArray(Option.value)
                                            ? false
                                            : Option.label === Value
                                    }
                                    onChange={() => {
                                        Array.isArray(Option.value)
                                            ? setValue(Option.value[0].label)
                                            : setValue(Option.label);
                                    }}
                                    indeterminate={
                                        Array.isArray(Option.value) &&
                                        Option.value.some(
                                            (InnerOption: any) =>
                                                InnerOption.label === Value
                                        )
                                    }
                                />
                            }
                        />
                        {children && (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    ml: 3,
                                }}
                            >
                                {children}
                            </Box>
                        )}
                    </>
                );
            })}
        </>
    );
}
