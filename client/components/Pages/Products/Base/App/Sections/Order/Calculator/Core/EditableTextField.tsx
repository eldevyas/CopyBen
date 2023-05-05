import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
    value: string;
    onChange: (newValue: string) => void;
}

const Div = styled("div")(({ theme }) => ({
    // ...theme.typography.h6,
    backgroundColor: "transparent",
    color: "black",
    padding: theme.spacing(0),
    fontWeight: 700,
    fontSize: "0.9rem",
}));

const EditableTextField: React.FC<Props> = ({ value, onChange }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [textValue, setTextValue] = useState(value);

    const handleFocus = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
        onChange(textValue);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextValue(event.target.value);
    };

    const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
            // Perform the desired action when enter key is pressed
            setIsEditing(false);
        }
    };

    return isEditing ? (
        <TextField
            value={textValue}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
            variant="standard"
            fullWidth
            onKeyDown={handleKeyDown}
        />
    ) : (
        // <Div onClick={handleFocus}>{value}</Div>
        <TextField
            value={value}
            variant="standard"
            fullWidth
            InputProps={{
                readOnly: true,
                endAdornment: (
                    <IconButton aria-label="edit" onClick={handleFocus}>
                        <EditIcon />
                    </IconButton>
                ),
            }}
        />
    );
};

export default EditableTextField;
