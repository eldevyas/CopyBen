/* eslint-disable react/no-unescaped-entities */
import Product from "@/types/Product";
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FirstStep from "./Calculator/1. First Step";
import SecondStep from "./Calculator/2. Second Step";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import ThankYouScreen from "./Calculator/3. Thank You";

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
    Delivery: string;
    Conception: string;
    Notes: string;
};
function generateOrderId(prefix: string, postfix: string): string {
    const timestamp = Date.now().toString().substr(-4); // Get last 6 digits of current timestamp
    const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Characters to use for random string
    const startIndex = Math.floor(Math.random() * (randomChars.length - 4));
    const endIndex = startIndex + 4;
    const randomString = randomChars.substring(startIndex, endIndex);
    return `${prefix}-${timestamp}-${randomString}-${postfix}`;
}

export default function Calculator(props: { product: Product } | any) {
    const [value, setValue] = React.useState(0);
    let GeneratedID: string = generateOrderId("CB", "OD");
    const [orderID, setOrderID] = useState<string>(GeneratedID);
    const [FirstValues, setFirstValues] = useState<FormValues | null>(null);
    const [SecondValues, setSecondValues] = useState<FormValues | null>(null);

    useEffect(() => {
        // alert("Generated ID: " + orderID);
    }, [orderID]);
    useEffect(() => {}, [SecondValues]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    // Final Uplaod of Values
    const callFinalUpload = (FinalLinks: string[]) => {
        const orderInfo = {
            orderID: orderID,
            Product: props.product.name,
            Customization: FirstValues,
            Files: FinalLinks,
        };

        console.table(orderInfo);
        setValue(2);
    };

    return (
        <div {...props}>
            <TabPanel value={value} index={0}>
                <FirstStep
                    orderID={orderID}
                    product={props.product}
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
                    product={props.product}
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
                <ThankYouScreen />
            </TabPanel>
        </div>
    );
}
