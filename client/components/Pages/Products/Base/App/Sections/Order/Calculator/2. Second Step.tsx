import Product from "@/types/Product";
import React, {
    useEffect,
    useState,
    Component,
    useCallback,
    SetStateAction,
    Dispatch,
    FormEvent,
} from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import {
    Input,
    Select,
    Stack,
    Typography,
    SelectChangeEvent,
    MenuItem,
    FormControl,
    FormLabel,
    FormHelperText,
    Button,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    ListItemSecondaryAction,
    CircularProgress,
    TextField,
    Avatar,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import EditableTextField from "./Core/EditableTextField";
import axios from "axios";
import { FileUpload } from "./Core/FileUpload";
import CircularProgressWithLabel from "./Core/CircularProgressWithLabel";

const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(1),
}));

export default function SecondStep(props: { Product: Product } | any) {
    // Step States
    const [hasUploadedFiles, setHasUploadedFiles] = useState<boolean>(false);
    const Loading = props.isLoading;
    const setLoading = props.setIsLoading;
    // Parent Values
    const ParentFiles = props.Files;
    const setParentFiles = props.setFiles;
    const orderID = props.orderID;

    // State Value
    const [Files, setFiles] = useState<File[]>(ParentFiles ? ParentFiles : []);

    // Keep updating Parent Values
    useEffect(() => {
        setParentFiles(Files);
    }, [Files, setParentFiles]);

    // Methods
    const handleDeleteFile = (index: number) => {
        const newFiles = [...Files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    function updateFileName(file: File, newName: string): File {
        const { name, type, size, lastModified }: any = file;
        let newFile = new File([file], newName, {
            type,
            size,
            lastModified,
        } as File);

        Object.assign(newFile, {
            preview: URL.createObjectURL(file),
        });

        return newFile;
    }

    const handleRenameFile = (newName: string, fileIndex: number) => {
        const updatedFile = updateFileName(Files[fileIndex], newName);
        setFiles((prevFiles) => {
            const newFiles = [...prevFiles];
            newFiles[fileIndex] = updatedFile;
            return newFiles;
        });
    };

    // Uploading Features
    const [filesLink, setFilesLink] = useState<string[]>([]);
    const [Uploading, setUploading] = useState(false);
    const [Progress, setProgress] = useState<any>({});
    const [Completed, setCompleted] = useState<any>({});

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    // Upload Endpoint
    let uploadUrl = API_URL + "/upload";

    const handleUpload = () => {
        const totalFiles = Files.length;
        let completedFiles = 0;
        // disable all buttons here
        Files.forEach((file) => {
            const formData = new FormData();
            formData.append("order_id", orderID);
            formData.append("files[]", file);
            setUploading(true);
            // add any additional data to the form data as required
            axios
                .post(uploadUrl, formData, {
                    onUploadProgress: (progressEvent: any) => {
                        const loaded: number = progressEvent.loaded;
                        const total: number = progressEvent.total;
                        const percentCompleted = Math.round(
                            (loaded * 100) / total
                        );
                        setProgress((prevProgress: any) => ({
                            ...prevProgress,
                            [file.name]: percentCompleted,
                        }));
                    },
                })
                .then((response) => {
                    setCompleted((prevCompleted: any) => ({
                        ...prevCompleted,
                        [file.name]: true,
                    }));
                    // increment completedFiles state
                    completedFiles++;
                    if (response.data.success) {
                        setFilesLink((prevFilesLink) => [
                            ...prevFilesLink,
                            ...response.data["uploaded_files"],
                        ]);
                    }
                    if (completedFiles === totalFiles) {
                        setUploading(false);
                        // set hasUploadedFiles state to true when all files are uploaded
                        setHasUploadedFiles(true);
                    }
                })
                .catch((error) => {
                    console.error(error);
                    setUploading(false);
                    // handle errors here
                });
        });
    };

    const callParent = () => {
        setLoading(true);
        props.callNext(filesLink);
    };

    return (
        <div className={props.className}>
            <Stack
                className={`${props.className}__Stack`}
                direction={"column"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                gap={"0.5rem"}
                sx={{
                    mb: 2.5,
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    fontWeight={"bold"}
                    className={`${props.className}__Stack__Title`}
                >
                    PASSER COMMANDE
                </Typography>

                <Div className={`${props.className}__Stack__Description`}>
                    ENVOYER FICHIER EN LIGNE OU PLUS TARD PAR MAIL ICI(CARTE DE
                    VISITE {">"} STANDARD)
                </Div>
            </Stack>

            {!hasUploadedFiles && !Uploading && (
                <FileUpload Files={Files} setFiles={setFiles} />
            )}

            <Grid item xs={12} md={12}>
                <List>
                    {!hasUploadedFiles &&
                        !Uploading &&
                        Files.map((file: File | any, index: number) => (
                            <ListItem
                                key={index}
                                sx={{
                                    width: "100%",
                                }}
                                secondaryAction={
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        color="primary"
                                        onClick={() => handleDeleteFile(index)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemIcon>
                                    {file.preview ? (
                                        <Image
                                            width={30}
                                            height={30}
                                            alt=""
                                            src={file.preview}
                                            style={{ objectFit: "cover" }}
                                        />
                                    ) : (
                                        <FolderIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <EditableTextField
                                        value={file.name}
                                        onChange={(value: any) =>
                                            handleRenameFile(value, index)
                                        }
                                    />
                                    <Typography variant="caption">
                                        {file.type}
                                        {" - "}
                                        {parseFloat(
                                            (file.size / 1000000).toFixed(2)
                                        )}{" "}
                                        MB
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        ))}
                    {Uploading &&
                        Files.map((file: File | any, index: number) => (
                            <ListItem
                                key={index}
                                sx={{
                                    width: "100%",
                                }}
                            >
                                {!Completed[file.name] && (
                                    <ListItemIcon>
                                        <CircularProgressWithLabel
                                            value={
                                                Progress[file.name]
                                                    ? Progress[file.name]
                                                    : 0
                                            }
                                            color={"secondary"}
                                        />
                                    </ListItemIcon>
                                )}
                                {Completed[file.name] && (
                                    <ListItemIcon>
                                        <Avatar>
                                            <CheckIcon />
                                        </Avatar>
                                    </ListItemIcon>
                                )}
                                <ListItemText
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "flex-start",
                                        width: "100%",
                                    }}
                                >
                                    <TextField
                                        value={file.name}
                                        variant="standard"
                                        color="secondary"
                                        fullWidth
                                    />
                                    <Typography variant="caption">
                                        {file.type}
                                        {" - "}
                                        {parseFloat(
                                            (file.size / 1000000).toFixed(2)
                                        )}{" "}
                                        MB
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        ))}
                </List>
            </Grid>
            <Grid item xs={12} md={12}>
                <List>
                    {hasUploadedFiles &&
                        Files.map((file: File | any, index: number) => (
                            <ListItem
                                key={index}
                                sx={{
                                    width: "100%",
                                }}
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={file.name}
                                    secondary={file.type ? file.type : null}
                                />
                            </ListItem>
                        ))}
                </List>
            </Grid>

            <Stack
                className={`${props.className}__Form__Field`}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                gap={"0.5rem"}
                sx={{
                    mb: 2.5,
                    width: "100%",
                }}
            >
                {!Loading && !Uploading && !hasUploadedFiles && (
                    <Button
                        variant="contained"
                        color="secondary"
                        disableElevation
                        onClick={props.callPrevious}
                        fullWidth
                        disabled={Uploading}
                    >
                        Précédent
                    </Button>
                )}
                {!Loading &&
                    !Uploading &&
                    !hasUploadedFiles &&
                    Files.length > 0 && (
                        <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                            onClick={handleUpload}
                            fullWidth
                            startIcon={<UploadIcon />}
                            disabled={Uploading}
                        >
                            Télécharger
                        </Button>
                    )}
                {!Loading && !Uploading && hasUploadedFiles && (
                    <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        onClick={callParent}
                        fullWidth
                        // startIcon={<UploadIcon />}
                        disabled={Uploading}
                    >
                        Commander
                    </Button>
                )}

                {!Loading && !Uploading && Files.length <= 0 && (
                    <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        onClick={callParent}
                        fullWidth
                        // startIcon={<UploadIcon />}
                        disabled={Uploading}
                    >
                        Commander
                    </Button>
                )}

                {(Uploading || Loading) && (
                    <LoadingButton
                        loading
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            py: "0.75rem",
                        }}
                    >
                        {Uploading ? "Téléchargement" : "Commande en cours"}
                    </LoadingButton>
                )}
            </Stack>
        </div>
    );
}
