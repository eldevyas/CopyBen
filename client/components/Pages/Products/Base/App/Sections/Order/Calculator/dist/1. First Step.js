"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var Product_Customization_1 = require("./Custom/Product Customization");
var Div = styles_1.styled("div")(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({}, theme.typography.button), { backgroundColor: theme.palette.primary.main, color: "white", padding: theme.spacing(1) }));
});
function FirstStep(props) {
    var ParentValues = props.Values;
    var validateStep = props.validateStep;
    // Props Product
    var Product = props.product;
    var UnitPrice = Product.unitPrice;
    // Form Fields
    var _a = react_1.useState((ParentValues === null || ParentValues === void 0 ? void 0 : ParentValues.Quantity) ? ParentValues.Quantity : 1), Quantity = _a[0], setQuantity = _a[1];
    var _b = react_1.useState((ParentValues === null || ParentValues === void 0 ? void 0 : ParentValues.Customization) ? ParentValues.Customization : 1), Customization = _b[0], setCustomization = _b[1];
    var _c = react_1.useState((ParentValues === null || ParentValues === void 0 ? void 0 : ParentValues.Delivery) ? ParentValues.Delivery
        : "Standard > 5 à 7 jours ouvrés"), Delivery = _c[0], setDelivery = _c[1];
    var _d = react_1.useState((ParentValues === null || ParentValues === void 0 ? void 0 : ParentValues.Conception) ? ParentValues.Conception : "Non"), Conception = _d[0], setConception = _d[1];
    var _e = react_1.useState((ParentValues === null || ParentValues === void 0 ? void 0 : ParentValues.Notes) ? ParentValues.Notes : ""), Notes = _e[0], setNotes = _e[1];
    var _f = react_1.useState({
        Quantity: Quantity,
        Customization: Customization,
        Delivery: Delivery,
        Conception: Conception,
        Notes: Notes
    }), Values = _f[0], setValues = _f[1];
    // Calculated Values
    var _g = react_1.useState(UnitPrice * Quantity), Total = _g[0], setTotal = _g[1];
    //
    // Track Total Value
    react_1.useEffect(function () {
        var Total = UnitPrice * Quantity;
        setTotal(Total);
    }, [Quantity, UnitPrice]);
    react_1.useEffect(function () {
        setValues({
            Quantity: Quantity,
            Customization: Customization,
            Delivery: Delivery,
            Conception: Conception,
            Notes: Notes
        });
    }, [Conception, Customization, Delivery, Notes, Quantity]);
    // Const Handle Submission
    var handleSubmit = function () {
        validateStep(Values);
        props.callNext();
    };
    //
    return (react_1["default"].createElement("div", { className: props.className },
        react_1["default"].createElement(material_1.Stack, { className: props.className + "__Stack", direction: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "0.5rem", sx: {
                mb: 2.5
            } },
            react_1["default"].createElement(material_1.Typography, { variant: "h4", component: "h2", fontWeight: "bold", className: props.className + "__Stack__Title" },
                "Etape 1 : Calculateur du Prix",
                " "),
            react_1["default"].createElement(Div, { className: props.className + "__Stack__Description" }, "Prix d\u00E9gressifs selon la quantit\u00E9 et l'impression")),
        react_1["default"].createElement(material_1.Stack, { className: props.className + "__Form", direction: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "0.5rem", sx: {
                mb: 2.5,
                width: "100%"
            } },
            react_1["default"].createElement(material_1.FormControl, { className: props.className + "__Form__Field", sx: {
                    mb: 2.5,
                    width: "100%"
                } },
                react_1["default"].createElement(material_1.FormLabel, null, "Quantit\u00E9"),
                react_1["default"].createElement(material_1.Input, { className: "BasicInput", type: "number", inputProps: {
                        min: 1,
                        max: 5000,
                        step: 1
                    }, name: "Quantit\u00E9", fullWidth: true, value: Quantity, onChange: function (event) {
                        return setQuantity(event.target.value);
                    } })),
            react_1["default"].createElement(Product_Customization_1["default"], { Product: props.product, Customization: Customization, setCustomization: setCustomization }),
            react_1["default"].createElement(material_1.FormControl, { className: props.className + "__Form__Field", sx: {
                    mb: 2.5,
                    width: "100%"
                } },
                react_1["default"].createElement(material_1.FormLabel, null, "D\u00E9lais de livraison pr\u00E9visionnel"),
                react_1["default"].createElement(material_1.Input, { className: "BasicInput", type: "text", value: Delivery, onChange: function (event) {
                        return setDelivery(event.target.value);
                    }, readOnly: true, fullWidth: true })),
            react_1["default"].createElement(material_1.FormControl, { className: props.className + "__Form__Field", sx: {
                    mb: 2.5,
                    width: "100%"
                }, variant: "standard" },
                react_1["default"].createElement(material_1.FormLabel, null, "Vous avez besoin de conception pour ce produit ?"),
                react_1["default"].createElement(material_1.Select, { name: "Conception", fullWidth: true, value: Conception, onChange: function (event) {
                        return setConception(event.target.value);
                    } },
                    react_1["default"].createElement(material_1.MenuItem, { value: "Oui" }, "Oui"),
                    react_1["default"].createElement(material_1.MenuItem, { value: "Non" }, "Non")),
                react_1["default"].createElement(material_1.FormHelperText, null)),
            react_1["default"].createElement(material_1.FormControl, { className: props.className + "__Form__Field", variant: "standard", sx: {
                    mb: 2.5,
                    width: "100%"
                } },
                react_1["default"].createElement(material_1.FormLabel, null, "Notes"),
                react_1["default"].createElement(material_1.Input, { className: "BasicInput", type: "text", fullWidth: true, multiline: true, value: Notes, onChange: function (event) {
                        return setNotes(event.target.value);
                    } })),
            react_1["default"].createElement(material_1.Stack, { className: props.className + "__Form__Field", direction: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "0.5rem", sx: {
                    mb: 2.5,
                    width: "100%"
                } },
                react_1["default"].createElement(Div, { className: props.className + "__Form__Field__Total", sx: {
                        fontSize: 20,
                        width: "100%",
                        textAlign: "right"
                    } },
                    react_1["default"].createElement(material_1.Typography, { paragraph: true, component: "div" }, "Total HT :"),
                    Total.toLocaleString("fr-MA", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }),
                    " ",
                    "MAD"),
                react_1["default"].createElement(Div, { className: props.className + "__Form__Field__Total", sx: {
                        fontSize: 15,
                        width: "100%",
                        textAlign: "right",
                        backgroundColor: "#000",
                        color: "#fff"
                    } },
                    react_1["default"].createElement(material_1.Typography, { paragraph: true, component: "div" }, "Prix Unitaire:"),
                    " ",
                    Product.unitPrice.toLocaleString("fr-MA", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }),
                    " MAD")),
            react_1["default"].createElement(material_1.Stack, { className: props.className + "__Form__Field", direction: "row", justifyContent: "flex-start", alignItems: "flex-start", gap: "0.5rem", sx: {
                    mb: 2.5,
                    width: "100%"
                } },
                react_1["default"].createElement(material_1.Button, { variant: "contained", color: "secondary", disableElevation: true, disabled: true, fullWidth: true }, "Pr\u00E9c\u00E9dent"),
                react_1["default"].createElement(material_1.Button, { variant: "contained", color: "primary", disableElevation: true, fullWidth: true, onClick: handleSubmit }, "Suivant")))));
}
exports["default"] = FirstStep;
