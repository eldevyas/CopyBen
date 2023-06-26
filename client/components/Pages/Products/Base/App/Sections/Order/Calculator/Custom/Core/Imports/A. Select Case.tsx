import { MenuItem, Select, Box } from "@mui/material";
import React from "react";
import { ProductFieldType } from "../../Types/ProductFields";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckIcon from "@mui/icons-material/Check";
import { ArrowDown2, ArrowDown3 } from "iconsax-react";

const CustomIcon = (props: any) => {
    return <ArrowDown2 color="currentColor" variant="Linear" {...props} />;
};

export default function SelectCase(props: {
    Field: ProductFieldType;
    Value: any;
    setValue: any;
}) {
    const { Field, Value, setValue } = props;
    return (
        <Select
            name="Conception"
            variant="outlined"
            fullWidth
            value={Value ? Value : Field.options[0].label}
            placeholder="Choisissez une valeur"
            onChange={(event: any) => {
                return setValue(event.target.value as string);
            }}
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
                "& .MuiSelect-icon": {
                    color: "black",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    marginInlineEnd: "10px",
                },
                "& .MuiSelect-select:focus": {
                    backgroundColor: "#eeeeee",
                    borderRadius: "12px",
                    outline: "none !important",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #eeeeee !important",
                    borderRadius: "200px",
                },
            }}
            IconComponent={CustomIcon}
            MenuProps={{
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                },
                // getContentAnchorEl: null,
                PaperProps: {
                    sx: {
                        backgroundColor: "white",
                        border: "1px solid #eeeeee !important",
                        borderRadius: "5px",
                        transition: "none !important",
                        "& .MuiMenuItem-root": {
                            "&.Mui-selected": {
                                backgroundColor: "lightgray",
                                "&:hover": {
                                    backgroundColor: "lightgray",
                                },
                                "& .MuiListItemIcon-root": {
                                    color: "darkgray",
                                },
                            },
                        },
                    },
                },
            }}
        >
            {Field.options.map((Option) => {
                return (
                    <MenuItem key={Option.label} value={Option.label}>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            width="100%"
                        >
                            <span>{Option.label}</span>
                        </Box>
                    </MenuItem>
                );
            })}
        </Select>
    );
}
