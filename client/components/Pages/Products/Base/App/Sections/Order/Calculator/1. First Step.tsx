import Product from "@/types/Product";
import React, { useEffect, useState } from "react";
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
    TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ProductCustomization from "./Custom/Product Customization";
import {
    getDefaultValues,
    ProductFieldType as FieldType,
    calculatePrice,
} from "./Custom/Types/ProductFields";
import { ArrowDown2 } from "iconsax-react";

const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: "#000",
    color: "white",
    padding: theme.spacing(1),
    spacing: theme.spacing(0),
    gap: theme.spacing(),
    borderRadius: "5px",
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

const CustomIcon = (props: any) => {
    return <ArrowDown2 color="currentColor" variant="Linear" {...props} />;
};

export default function FirstStep(props: { product: Product } | any) {
    let ParentValues: FormValues = props.Values;
    let validateStep = props.validateStep;
    // Props Product
    let Product: Product = props.product;
    let UnitPrice = Product.unitPrice;

    // Form Fields
    const [Quantity, setQuantity] = useState<number>(
        ParentValues?.Quantity ? ParentValues.Quantity : 1
    );
    const [Customization, setCustomization] = useState<{ [key: string]: any }>(
        getDefaultValues()
    );
    const [Delivery, setDelivery] = useState<string>(
        ParentValues?.Delivery
            ? ParentValues.Delivery
            : "Standard > 5 à 7 jours ouvrés"
    );
    const [Conception, setConception] = useState<string>(
        ParentValues?.Conception ? ParentValues.Conception : "Non"
    );
    const [Notes, setNotes] = useState<string>(
        ParentValues?.Notes ? ParentValues.Notes : ""
    );

    const [OptionsPrice, setOptionsPrice] = useState<{
        TotalSelectedOptionsDetails: any;
        TotalSelectedOptionsPrice: number;
    }>(calculatePrice(Customization));

    // Track Total Value
    const [Total, setTotal] = useState<number>(
        (UnitPrice + OptionsPrice.TotalSelectedOptionsPrice) * Quantity
    );
    //
    // Calculated Values
    const [Values, setValues] = useState<FormValues>({
        Quantity: Quantity,
        Customization: Customization,
        Delivery: Delivery,
        Conception: Conception,
        Notes: Notes,
        "Unit Price": UnitPrice + OptionsPrice.TotalSelectedOptionsPrice,
        "Total HT": Total,
    });
    useEffect(() => {
        let Total =
            (UnitPrice + OptionsPrice.TotalSelectedOptionsPrice) * Quantity;
        setTotal(Total);
    }, [OptionsPrice.TotalSelectedOptionsPrice, Quantity, UnitPrice]);

    useEffect(() => {
        setValues({
            Quantity: Quantity,
            Customization: Customization,
            Delivery: Delivery,
            Conception: Conception,
            Notes: Notes,
            "Unit Price": UnitPrice + OptionsPrice.TotalSelectedOptionsPrice,
            "Total HT": Total,
        });
        setOptionsPrice(calculatePrice(Customization));
    }, [
        Conception,
        Customization,
        Delivery,
        Notes,
        OptionsPrice.TotalSelectedOptionsPrice,
        Quantity,
        Total,
        UnitPrice,
    ]);

    // Handle Submission
    const handleSubmit = () => {
        validateStep(Values);
        props.callNext();
    };

    //
    return (
        <div className={props.className}>
            <Stack
                direction={"column"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                gap={"0.5rem"}
                sx={{
                    mb: 2.5,
                }}
            >
                <Typography variant="h4" component="h2" fontWeight={"bold"}>
                    Etape 1 : Calculateur du Prix{" "}
                </Typography>

                <Div>
                    Prix dégressifs selon la quantité et l&apos;impression
                </Div>
            </Stack>

            <Stack
                direction={"column"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                gap={"0.5rem"}
                sx={{
                    mb: 2.5,
                    width: "100%",
                }}
            >
                {/* Quantity */}
                <FormControl
                    className={`${props.className}__Form__Field`}
                    sx={{
                        mb: 2.5,
                        width: "100%",
                    }}
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
                        Quantité
                    </FormLabel>
                    <TextField
                        type="number"
                        inputProps={{
                            min: 1,
                            max: 5000,
                            step: 1,
                        }}
                        name="Quantité"
                        fullWidth
                        value={Quantity}
                        onChange={(event: React.ChangeEvent<any>) => {
                            return setQuantity(event.target.value as number);
                        }}
                        sx={{
                            backgroundColor: "#f2f2f2",
                            borderRadius: "200px",
                            border: "1px solid #eeeeee",
                            outline: "none !important",
                            overflow: "hidden",
                            "& .MuiInputBase-input": {
                                borderRadius: "200px",
                                padding: "10px 20px",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "1px solid #eeeeee !important",
                                borderRadius: "200px",
                            },
                        }}
                    />
                </FormControl>

                {/*  */}
                <ProductCustomization
                    Product={props.product}
                    Customization={Customization}
                    setCustomization={setCustomization}
                />

                {/* Delivery */}
                <FormControl
                    sx={{
                        mb: 2.5,
                        width: "100%",
                    }}
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
                        Délais de livraison prévisionnel
                    </FormLabel>
                    <TextField
                        type="text"
                        value={Delivery}
                        variant="outlined"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            return setDelivery(event.target.value as string);
                        }}
                        fullWidth
                        disabled
                        sx={{
                            backgroundColor: "#f2f2f2",
                            borderRadius: "200px",
                            border: "1px solid #eeeeee",
                            outline: "none !important",
                            overflow: "hidden",
                            "& .MuiInputBase-input": {
                                borderRadius: "200px",
                                padding: "10px 20px",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "1px solid #eeeeee !important",
                                borderRadius: "200px",
                            },
                        }}
                    />
                </FormControl>

                {/* Conception */}
                <FormControl
                    sx={{
                        mb: 2.5,
                        width: "100%",
                    }}
                    variant="standard"
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
                        Vous avez besoin de conception pour ce produit ?
                    </FormLabel>
                    <Select
                        name="Conception"
                        fullWidth
                        variant="outlined"
                        value={Conception}
                        onChange={(event: any) => {
                            return setConception(event.target.value as string);
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
                        <MenuItem value={"Oui"}>Oui</MenuItem>
                        <MenuItem value={"Non"}>Non</MenuItem>
                    </Select>
                    <FormHelperText></FormHelperText>
                </FormControl>

                {/* Notes */}
                <FormControl
                    variant="standard"
                    sx={{
                        mb: 2.5,
                        width: "100%",
                    }}
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
                        Notes
                    </FormLabel>
                    <TextField
                        type="text"
                        variant="outlined"
                        fullWidth
                        // multiline={true}
                        value={Notes}
                        onChange={(event: any) => {
                            return setNotes(event.target.value as string);
                        }}
                        sx={{
                            backgroundColor: "#f2f2f2",
                            borderRadius: "200px",
                            border: "1px solid #eeeeee",
                            outline: "none !important",
                            overflow: "hidden",
                            "& .MuiInputBase-input": {
                                borderRadius: "200px",
                                padding: "10px 20px",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "1px solid #eeeeee !important",
                                borderRadius: "200px",
                            },
                        }}
                    />
                </FormControl>

                <Stack
                    direction={"column"}
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                    gap={"0.5rem"}
                    sx={{
                        mb: 2.5,
                        width: "100%",
                    }}
                >
                    <Div
                        sx={{
                            fontSize: 20,
                            width: "100%",
                            textAlign: "right",
                        }}
                    >
                        <Typography variant="h6" component={"span"}>
                            Total HT:{" "}
                        </Typography>
                        <Typography
                            variant="h6"
                            component={"span"}
                            fontWeight={800}
                        >
                            {Total.toLocaleString("fr-MA", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}{" "}
                            MAD
                        </Typography>
                        <Div
                            sx={{
                                fontSize: 15,
                                width: "100%",
                                textAlign: "right",
                            }}
                        >
                            <Typography variant="caption" component={"span"}>
                                Prix Unitaire:{" "}
                            </Typography>
                            <Typography variant="caption" component={"span"}>
                                {(
                                    UnitPrice +
                                    OptionsPrice.TotalSelectedOptionsPrice
                                ).toLocaleString("fr-MA", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                                {" MAD"}
                            </Typography>
                        </Div>
                    </Div>
                </Stack>

                <Stack
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                    gap={"0.5rem"}
                    sx={{
                        mb: 2.5,
                        width: "100%",
                    }}
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        disableElevation
                        disabled
                        fullWidth
                    >
                        Précédent
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        fullWidth
                        onClick={handleSubmit}
                    >
                        Suivant
                    </Button>
                </Stack>
            </Stack>
        </div>
    );
}
