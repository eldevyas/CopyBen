"use strict";
exports.__esModule = true;
exports.calculatePrice = exports.getDefaultValues = exports.ProductFields = void 0;
exports.ProductFields = [
    {
        name: "Assemblage",
        type: "Select",
        defaultValue: "Spiral plastique",
        options: [
            {
                label: "Dos carré collé",
                type: "Standard",
                value: 0
            },
            {
                label: "Spiral plastique",
                type: "Multiple",
                value: {
                    "100": 7,
                    "+100": 10
                }
            },
            {
                label: "Spiral métallique",
                type: "Multiple",
                value: {
                    "100": 10,
                    "+100": 15
                }
            },
            {
                label: "Séré Feuille",
                type: "Multiple",
                value: {
                    "100": 7,
                    "+100": 10
                }
            },
        ]
    },
    {
        name: "Taille Orientation",
        type: "Select",
        defaultValue: "Portrait",
        options: [
            {
                label: "Au fermé",
                type: "Standard",
                value: 0
            },
            {
                label: "Portrait",
                type: "Standard",
                value: 0
            },
            {
                label: "Paysage",
                type: "Standard",
                value: 0
            },
        ]
    },
    {
        name: "Couverture",
        type: "Checkbox",
        defaultValue: "Pelliculage Brillant",
        options: [
            {
                label: "Papier Couverture",
                type: "Standard",
                value: 0
            },
            {
                label: "Couchée Matte 300 Gram",
                type: "Standard",
                value: 0
            },
            {
                label: "Pelliculage",
                type: "Multiple",
                value: [
                    // { label: "Sans Pelliculage", value: 10 },
                    { label: "Pelliculage Brillant", value: 15 },
                    { label: "Pelliculage Matte", value: 15 },
                ]
            },
        ]
    },
    {
        name: "Nombre des pages",
        defaultValue: 50,
        min: 50,
        max: 500,
        type: "Number",
        options: []
    },
    {
        name: "Type de papier",
        type: "Select",
        defaultValue: "80g Navigateur",
        options: [
            {
                label: "80g target",
                type: "Standard",
                value: "80gT"
            },
            {
                label: "80g Navigateur",
                type: "Standard",
                value: "80gN"
            },
            {
                label: "90g",
                type: "Standard",
                value: "90gN"
            },
            {
                label: "135g Couché matte",
                type: "Standard",
                value: "135gC"
            },
        ]
    },
    {
        name: "Impression",
        type: "Select",
        defaultValue: "Couleur Recto-Verso",
        options: [
            {
                label: "Couleur Recto",
                type: "Multiple",
                value: {
                    "80gT": 0.5,
                    "80gN": 0.7,
                    "90gN": 0.8,
                    "135gC": 1
                }
            },
            {
                label: "Couleur Recto-Verso",
                type: "Multiple",
                value: {
                    "80gT": 0.5,
                    "80gN": 0.7,
                    "90gN": 0.8,
                    "135gC": 1
                }
            },
            {
                label: "N&B Recto",
                type: "Multiple",
                value: {
                    "80gT": 0.25,
                    "80gN": 0.3,
                    "90gN": 0.4,
                    "135gC": 1
                }
            },
            {
                label: "N&B Recto-Verso",
                type: "Multiple",
                value: {
                    "80gT": 0.25,
                    "80gN": 0.3,
                    "90gN": 0.4,
                    "135gC": 1
                }
            },
        ]
    },
];
function getDefaultValues() {
    var getDefaultValue = function (field) {
        switch (field.type) {
            case "Select":
                return field.defaultValue;
            case "Checkbox":
                return field.defaultValue;
            case "Number":
                return field.defaultValue;
            default:
                return field.defaultValue;
        }
    };
    var defaultState = {};
    exports.ProductFields.forEach(function (field) {
        var defaultValue = getDefaultValue(field);
        defaultState[field.name] = defaultValue;
    });
    return defaultState;
}
exports.getDefaultValues = getDefaultValues;
function calculatePrice(SelectedOptions) {
    var TotalSelectedOptionsPrice = 0;
    var TotalSelectedOptionsDetails = [];
    Object.entries(SelectedOptions).forEach(function (_a) {
        var OptionKey = _a[0], OptionValue = _a[1];
        var OptionPrice = 0;
        var OptionPriceDetails = {
            Name: OptionKey,
            Value: OptionValue,
            Price: 0
        };
        exports.ProductFields.forEach(function (Field, Index) {
            Field.name === OptionKey &&
                (function () {
                    switch (Field.type) {
                        case "Select":
                            Field.options.forEach(function (FieldOption, Index) {
                                if (FieldOption.type === "Standard" &&
                                    FieldOption.label === OptionValue &&
                                    typeof FieldOption.value == "number") {
                                    OptionPrice = FieldOption.value;
                                }
                                else if (FieldOption.type === "Multiple" &&
                                    FieldOption.label === OptionValue &&
                                    typeof FieldOption.value == "object") {
                                    // Assemblage Case - Based on Number of Pages.
                                    if (OptionKey == "Assemblage") {
                                        // Get Number of Pages
                                        // Required for Price Calculaation based on pages number.
                                        var PagesCount = SelectedOptions["Nombre des pages"]
                                            ? SelectedOptions["Nombre des pages"]
                                            : 50;
                                        // Pricing Information
                                        var Pricing = FieldOption.value;
                                        // Pricing Calculation
                                        if (PagesCount <= 100) {
                                            OptionPrice = Pricing["100"];
                                        }
                                        else {
                                            OptionPrice = Pricing["+100"];
                                        }
                                    }
                                    else if (OptionKey === "Impression") {
                                        var PagesCount = SelectedOptions["Nombre des pages"]
                                            ? SelectedOptions["Nombre des pages"]
                                            : 50;
                                        var PaperType_1 = SelectedOptions["Type de papier"]
                                            ? SelectedOptions["Type de papier"]
                                            : "90g";
                                        var Pricing = FieldOption.value;
                                        if (exports.ProductFields.find(function (Field) {
                                            return Field.name ===
                                                "Type de papier";
                                        })) {
                                            var PaperTypeObject = exports.ProductFields.find(function (Field) {
                                                return Field.name ===
                                                    "Type de papier";
                                            });
                                            var FoundPaperType = PaperTypeObject.options.find(function (PaperTypeOption) {
                                                return PaperTypeOption.label ===
                                                    PaperType_1;
                                            });
                                            if (FoundPaperType) {
                                                var SinglePagePrice = Pricing[FoundPaperType.value];
                                                var AllPagesPrice = SinglePagePrice *
                                                    PagesCount;
                                                OptionPrice = AllPagesPrice;
                                            }
                                            else {
                                                OptionPrice = 0;
                                            }
                                        }
                                    }
                                }
                            });
                            break;
                        case "Checkbox":
                            Field.options.forEach(function (FieldOption, Index) {
                                if (FieldOption.type === "Standard" &&
                                    FieldOption.label === OptionValue &&
                                    typeof FieldOption.value == "number") {
                                    OptionPrice = FieldOption.value;
                                }
                                else if (FieldOption.type === "Multiple" &&
                                    FieldOption.value.find(function (InnerValue) { return InnerValue.label === OptionValue; }) &&
                                    typeof FieldOption.value == "object") {
                                    var FullOptionField = FieldOption.value.find(function (InnerValue) { return InnerValue.label === OptionValue; });
                                    OptionPrice =
                                        FullOptionField === null || FullOptionField === void 0 ? void 0 : FullOptionField.value;
                                }
                            });
                            break;
                        case "Number":
                            break;
                        default:
                            break;
                    }
                })();
        });
        // Pricing Details
        OptionPriceDetails.Price = OptionPrice;
        TotalSelectedOptionsDetails.push(OptionPriceDetails);
        TotalSelectedOptionsPrice += OptionPrice;
    });
    console.table(TotalSelectedOptionsDetails);
    return { TotalSelectedOptionsDetails: TotalSelectedOptionsDetails, TotalSelectedOptionsPrice: TotalSelectedOptionsPrice };
}
exports.calculatePrice = calculatePrice;
