import React, {
    useEffect,
    useState,
    Component,
    useCallback,
    SetStateAction,
    Dispatch,
    FormEvent,
} from "react";
import { styled } from "@mui/material/styles";
import { useDropzone } from "react-dropzone";
import { Stack, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(1),
}));

export const FileUpload = (props: {
    setFiles: Dispatch<SetStateAction<File[]>>;
    Files: File[];
}) => {
    // Parent Control
    const setFiles = props.setFiles;
    const Files = props.Files;

    // Drop Zone Configuration
    const onDrop = useCallback(
        (acceptedFiles: any) => {
            setFiles((prevFiles: any) => [
                ...prevFiles,
                ...acceptedFiles.map((file: any) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                ),
            ]);
        },
        [setFiles]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <div>
            <Div
                {...getRootProps()}
                sx={{
                    backgroundColor: "#fcfcfc",
                    borderColor: "#ccc",
                    borderWidth: "0.2rem",
                    borderStyle: "dashed",
                    color: "#ccc",
                    width: "100%",
                    minHeight: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": {
                        borderColor: "primary.main",
                        cursor: "pointer",
                    },
                }}
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <Stack
                        direction={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={"2rem"}
                    >
                        <UploadFileIcon
                            fontSize="large"
                            sx={{ fontSize: "5rem" }}
                        />

                        <Typography
                            variant="h6"
                            component={"h2"}
                            textAlign={"center"}
                            fontWeight={"bold"}
                        >
                            Déposez les fichiers ici...
                        </Typography>
                    </Stack>
                ) : (
                    <Stack
                        direction={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={"2rem"}
                    >
                        <UploadFileIcon
                            fontSize="large"
                            sx={{ fontSize: "5rem" }}
                        />
                        <Typography
                            variant="h6"
                            component={"h2"}
                            textAlign={"center"}
                            fontWeight={"bold"}
                        >
                            Faites glisser et déposez des fichiers ici, ou
                            cliquez pour sélectionner des fichiers
                        </Typography>
                    </Stack>
                )}
            </Div>
        </div>
    );
};
