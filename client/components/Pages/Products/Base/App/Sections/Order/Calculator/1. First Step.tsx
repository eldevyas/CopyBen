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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ProductCustomization from "./Custom/Product Customization";

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
    const [Customization, setCustomization] = useState<any>(
        ParentValues?.Customization ? ParentValues.Customization : 1
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

    const [Values, setValues] = useState<FormValues>({
        Quantity: Quantity,
        Customization: Customization,
        Delivery: Delivery,
        Conception: Conception,
        Notes: Notes,
    });

    // Calculated Values
    const [Total, setTotal] = useState<number>(UnitPrice * Quantity);
    //
    // Track Total Value
    useEffect(() => {
        let Total = UnitPrice * Quantity;
        setTotal(Total);
    }, [Quantity, UnitPrice]);

    useEffect(() => {
        setValues({
            Quantity: Quantity,
            Customization: Customization,
            Delivery: Delivery,
            Conception: Conception,
            Notes: Notes,
        });
    }, [Conception, Customization, Delivery, Notes, Quantity]);

    // Const Handle Submission
    const handleSubmit = () => {
        validateStep(Values);
        props.callNext();
    };

    //
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
                    Etape 1 : Calculateur du Prix{" "}
                </Typography>

                <Div className={`${props.className}__Stack__Description`}>
                    Prix dégressifs selon la quantité et l&apos;impression
                </Div>
            </Stack>

            <Stack
                className={`${props.className}__Form`}
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
                    <FormLabel>Quantité</FormLabel>
                    <Input
                        className="BasicInput"
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
                    className={`${props.className}__Form__Field`}
                    sx={{
                        mb: 2.5,
                        width: "100%",
                    }}
                >
                    <FormLabel>Délais de livraison prévisionnel</FormLabel>
                    <Input
                        className="BasicInput"
                        type="text"
                        value={Delivery}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            return setDelivery(event.target.value as string);
                        }}
                        readOnly={true}
                        fullWidth
                    />
                </FormControl>

                {/* Conception */}
                <FormControl
                    className={`${props.className}__Form__Field`}
                    sx={{
                        mb: 2.5,
                        width: "100%",
                    }}
                    variant="standard"
                >
                    <FormLabel>
                        Vous avez besoin de conception pour ce produit ?
                    </FormLabel>
                    <Select
                        name="Conception"
                        fullWidth
                        value={Conception}
                        onChange={(event: any) => {
                            return setConception(event.target.value as string);
                        }}
                    >
                        <MenuItem value={"Oui"}>Oui</MenuItem>
                        <MenuItem value={"Non"}>Non</MenuItem>
                    </Select>
                    <FormHelperText></FormHelperText>
                </FormControl>

                {/* Notes */}
                <FormControl
                    className={`${props.className}__Form__Field`}
                    variant="standard"
                    sx={{
                        mb: 2.5,
                        width: "100%",
                    }}
                >
                    <FormLabel>Notes</FormLabel>
                    <Input
                        className="BasicInput"
                        type="text"
                        fullWidth
                        multiline={true}
                        value={Notes}
                        onChange={(event: any) => {
                            return setNotes(event.target.value as string);
                        }}
                    />
                </FormControl>

                <Stack
                    className={`${props.className}__Form__Field`}
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
                        className={`${props.className}__Form__Field__Total`}
                        sx={{
                            fontSize: 20,
                            width: "100%",
                            textAlign: "right",
                        }}
                    >
                        <Typography paragraph component={"div"}>
                            Total HT :
                        </Typography>
                        {Total.toLocaleString("fr-MA", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}{" "}
                        MAD
                    </Div>

                    <Div
                        className={`${props.className}__Form__Field__Total`}
                        sx={{
                            fontSize: 15,
                            width: "100%",
                            textAlign: "right",
                            backgroundColor: "#000",
                            color: "#fff",
                        }}
                    >
                        <Typography paragraph component={"div"}>
                            Prix Unitaire:
                        </Typography>{" "}
                        {Product.unitPrice.toLocaleString("fr-MA", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}
                        {" MAD"}
                    </Div>
                </Stack>

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
