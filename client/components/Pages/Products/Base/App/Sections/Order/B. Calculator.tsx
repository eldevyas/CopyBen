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
import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import { SetOrder } from "@/redux/Actions/OrderActions";
import { sendOrder } from "@/lib/sendOrder";
import { useRouter } from "next/router";

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
    userInfo: any;
    Product: any;
    Customization: FormValues | null;
    Files: string[];
};

export default function Calculator(props: { Product: Product } | any) {
    const Router = useRouter();
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

    // Redux Things
    const Dispatch = useAppDispatch();
    const Order = useAppSelector((state) => state.Order);
    const User = useAppSelector((state) => state.User);

    // Final Uplaod of Values

    const callFinalUpload = async (FinalLinks: string[]) => {
        const Info = {
            orderID: orderID,
            userInfo: userInfo,
            Product: props.Product.name,
            Customization: FirstValues,
            Files: FinalLinks,
        };

        Dispatch(SetOrder(Info));

        console.log("Final Upload: ", Info);
        console.log("Dispatched: ", Order);

        if (User.isLoggedIn === true) {
            const SendOrder = await sendOrder(Info);

            if (SendOrder) {
                setSnackbarMessage("Votre commande s'est bien envoyée.");
                setSnackbarSeverity("success");
                handleSnackbarOpen();
                setValue(value + 1);
            } else {
                setSnackbarMessage("Erreur lors de l'envoi de la commande.");
                setSnackbarSeverity("error");
                handleSnackbarOpen();
            }
        } else {
            setSnackbarMessage("Vous devez être connecté pour commander.");
            setSnackbarSeverity("info");
            handleSnackbarOpen();
            Router.push("/auth/login");
        }
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
                <ThankYouScreen Product={props.Product} OrderInfo={Order} />
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
