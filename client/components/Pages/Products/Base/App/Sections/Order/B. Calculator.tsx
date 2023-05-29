/* eslint-disable react/no-unescaped-entities */
import Product from "@/types/Product";
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FirstStep from "./Calculator/1. First Step";
import SecondStep from "./Calculator/2. Second Step";
import { Alert, Snackbar, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import ThankYouScreen from "./Calculator/3. Thank You";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(1),
}));

type FormValues = {
    Quantity: number;
    Customization: any;
    Delivery: string;
    Conception: string;
    Notes: string;
    "Unit Price": number;
    "Total HT": number;
};

function generateOrderId(prefix: string, postfix: string): string {
    const timestamp = Date.now().toString().substr(-4); // Get last 6 digits of current timestamp
    const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Characters to use for random string
    const startIndex = Math.floor(Math.random() * (randomChars.length - 4));
    const endIndex = startIndex + 4;
    const randomString = randomChars.substring(startIndex, endIndex);
    return `${prefix}-${timestamp}-${randomString}-${postfix}`;
}

type OrderInfo = {
    orderID: string;
    Product: any;
    Customization: FormValues | null;
    Files: string[];
};

export default function Calculator(props: { Product: Product } | any) {
    // MUI states
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<
        "success" | "error" | "warning" | "info" | undefined
    >(undefined);

    // Methods
    const handleSnackbarOpen = () => {
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };
    // Get Order Info from LoggenIn user
    const { userInfo }: any = useAuth();

    const [value, setValue] = React.useState(0);
    let GeneratedID: string = generateOrderId("CB", "OD");
    const [orderID, setOrderID] = useState<string>(GeneratedID);
    const [FirstValues, setFirstValues] = useState<FormValues | null>(null);
    const [SecondValues, setSecondValues] = useState<FormValues | null>(null);
    const [OrderInfo, setOrderInfo] = useState<OrderInfo | null>(null);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    // Final Uplaod of Values

    const callFinalUpload = (FinalLinks: string[]) => {
        const Info = {
            orderID: orderID,
            userInfo: userInfo,
            Product: props.Product.name,
            Customization: FirstValues,
            Files: FinalLinks,
        };

        setOrderInfo(Info);

        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        axios
            .post(`${API_URL}/order`, Info)
            .then((response) => {
                // handle success response here
                console.log(response.data);
                setValue(2);
                setSnackbarMessage("Commande envoyée !");
                setSnackbarSeverity("success");
                setSnackbarOpen(true);
            })
            .catch((error) => {
                // handle error response here
                console.error(error);
                setSnackbarMessage(error.message);
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
                setValue(0);
            });
        console.table(Info);
    };

    return (
        <div {...props}>
            <TabPanel value={value} index={0}>
                <FirstStep
                    orderID={orderID}
                    product={props.Product}
                    className={props.className + "__FirstStep"}
                    Values={FirstValues}
                    validateStep={setFirstValues}
                    callNext={() => {
                        setValue(value + 1);
                    }}
                    callPrevious={() => {
                        setValue(value - 1);
                    }}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SecondStep
                    orderID={orderID}
                    product={props.Product}
                    className={props.className + "__SecondStep"}
                    Files={SecondValues}
                    setFiles={setSecondValues}
                    callNext={(Links: string[]) => {
                        callFinalUpload(Links);
                    }}
                    callPrevious={() => {
                        setValue(value - 1);
                    }}
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ThankYouScreen Product={props.Product} OrderInfo={OrderInfo} />
            </TabPanel>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={snackbarSeverity}
                    sx={{ width: "100%" }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}
