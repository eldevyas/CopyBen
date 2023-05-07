export const ProductFields: ProductFieldType[] = [
    {
        name: "Assemblage",
        type: "Select",
        defaultValue: "Spiral plastique",
        options: [
            {
                label: "Dos carré collé",
                type: "Standard",
                value: 0,
            },
            {
                label: "Spiral plastique",
                type: "Multiple",
                value: {
                    "100": 7,
                    "+100": 10,
                },
            },
            {
                label: "Spiral métallique",
                type: "Multiple",
                value: {
                    "100": 10,
                    "+100": 15,
                },
            },
            {
                label: "Séré Feuille",
                type: "Multiple",
                value: {
                    "100": 7,
                    "+100": 10,
                },
            },
        ],
    },
    {
        name: "Taille Orientation",
        type: "Select",
        defaultValue: "Portrait",
        options: [
            {
                label: "Au fermé",
                type: "Standard",
                value: 0,
            },
            {
                label: "Portrait",
                type: "Standard",
                value: 0,
            },
            {
                label: "Paysage",
                type: "Standard",
                value: 0,
            },
        ],
    },
    {
        name: "Couverture",
        type: "Checkbox",
        defaultValue: "Pelliculage Brillant",
        options: [
            {
                label: "Papier Couverture",
                type: "Standard",
                value: 0,
            },
            {
                label: "Couchée Matte 300 Gram",
                type: "Standard",
                value: 0,
            },
            {
                label: "Pelliculage",
                type: "Multiple",
                value: [
                    // { label: "Sans Pelliculage", value: 10 },
                    { label: "Pelliculage Brillant", value: 15 },
                    { label: "Pelliculage Matte", value: 15 },
                ],
            },
        ],
    },
    {
        name: "Nombre des pages",
        defaultValue: 50,
        min: 50,
        max: 500,
        type: "Number",
        options: [],
    },
    {
        name: "Type de papier",
        type: "Select",
        defaultValue: "80g Navigateur",
        options: [
            {
                label: "80g target",
                type: "Standard",
                value: "80gT",
            },
            {
                label: "80g Navigateur",
                type: "Standard",
                value: "80gN",
            },
            {
                label: "90g",
                type: "Standard",
                value: "90gN",
            },
            {
                label: "135g Couché matte",
                type: "Standard",
                value: "135gC",
            },
        ],
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
                    "135gC": 1,
                },
            },
            {
                label: "Couleur Recto-Verso",
                type: "Multiple",
                value: {
                    "80gT": 0.5,
                    "80gN": 0.7,
                    "90gN": 0.8,
                    "135gC": 1,
                },
            },
            {
                label: "N&B Recto",
                type: "Multiple",
                value: {
                    "80gT": 0.25,
                    "80gN": 0.3,
                    "90gN": 0.4,
                    "135gC": 1,
                },
            },
            {
                label: "N&B Recto-Verso",
                type: "Multiple",
                value: {
                    "80gT": 0.25,
                    "80gN": 0.3,
                    "90gN": 0.4,
                    "135gC": 1,
                },
            },
        ],
    },
];

export type ProductFieldType = {
    name: string;
    type: string;
    defaultValue: string | number;
    min?: number;
    max?: number;
    options: {
        label: string;
        type: string | "Multiple" | "Select" | "Checkbox" | "Checkbox";
        value:
            | string
            | number
            | {
                  100: number;
                  "+100": number;
              }
            | {
                  "80gT": number;
                  "80gN": number;
                  "90gN": number;
                  "135gC": number;
              }
            | { label: string; value: number }[];
    }[];
};

export function getDefaultValues(): { [key: string]: any } {
    const getDefaultValue = (field: ProductFieldType): any => {
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

    const defaultState: { [key: string]: any } = {};

    ProductFields.forEach((field) => {
        const defaultValue: any = getDefaultValue(field);
        defaultState[field.name] = defaultValue;
    });

    return defaultState;
}

export function calculatePrice(SelectedOptions: { [key: string]: any }): {
    TotalSelectedOptionsDetails: any;
    TotalSelectedOptionsPrice: number;
} {
    let TotalSelectedOptionsPrice = 0;
    let TotalSelectedOptionsDetails:
        | {
              Name: string;
              Value: string | number;
              Price: number;
          }[]
        | any = [];

    Object.entries(SelectedOptions).forEach(([OptionKey, OptionValue]) => {
        let OptionPrice = 0;
        let OptionPriceDetails: {
            Name: string;
            Value: string | number;
            Price: number;
        } = {
            Name: OptionKey as string,
            Value: OptionValue as string | number,
            Price: 0 as number,
        };
        ProductFields.forEach((Field, Index) => {
            Field.name === OptionKey &&
                (() => {
                    switch (Field.type) {
                        case "Select":
                            Field.options.forEach((FieldOption, Index) => {
                                if (
                                    FieldOption.type === "Standard" &&
                                    FieldOption.label === OptionValue &&
                                    typeof FieldOption.value == "number"
                                ) {
                                    OptionPrice = FieldOption.value as number;
                                } else if (
                                    FieldOption.type === "Multiple" &&
                                    FieldOption.label === OptionValue &&
                                    typeof FieldOption.value == "object"
                                ) {
                                    // Assemblage Case - Based on Number of Pages.
                                    if (OptionKey == "Assemblage") {
                                        // Get Number of Pages
                                        // Required for Price Calculaation based on pages number.
                                        let PagesCount = SelectedOptions[
                                            "Nombre des pages"
                                        ]
                                            ? SelectedOptions[
                                                  "Nombre des pages"
                                              ]
                                            : 50;

                                        // Pricing Information
                                        let Pricing: {
                                            [key: string | number]: any;
                                        } = FieldOption.value;

                                        // Pricing Calculation
                                        if (PagesCount <= 100) {
                                            OptionPrice = Pricing["100"];
                                        } else {
                                            OptionPrice = Pricing["+100"];
                                        }
                                    } else if (OptionKey === "Impression") {
                                        let PagesCount = SelectedOptions[
                                            "Nombre des pages"
                                        ]
                                            ? SelectedOptions[
                                                  "Nombre des pages"
                                              ]
                                            : 50;

                                        let PaperType = SelectedOptions[
                                            "Type de papier"
                                        ]
                                            ? SelectedOptions["Type de papier"]
                                            : "90g";

                                        let Pricing: {
                                            [key: string | number]: any;
                                        } = FieldOption.value;

                                        if (
                                            ProductFields.find(
                                                (Field) =>
                                                    Field.name ===
                                                    "Type de papier"
                                            )
                                        ) {
                                            const PaperTypeObject: ProductFieldType =
                                                ProductFields.find(
                                                    (Field) =>
                                                        Field.name ===
                                                        "Type de papier"
                                                ) as ProductFieldType;

                                            const FoundPaperType: {
                                                label: string;
                                                type: string;
                                                value: number;
                                            } = PaperTypeObject.options.find(
                                                (PaperTypeOption) =>
                                                    PaperTypeOption.label ===
                                                    PaperType
                                            ) as {
                                                label: string;
                                                type: string;
                                                value: number;
                                            };

                                            if (FoundPaperType) {
                                                let SinglePagePrice =
                                                    Pricing[
                                                        FoundPaperType.value
                                                    ];
                                                let AllPagesPrice =
                                                    SinglePagePrice *
                                                    PagesCount;
                                                OptionPrice = AllPagesPrice;
                                            } else {
                                                OptionPrice = 0;
                                            }
                                        }
                                    }
                                }
                            });
                            break;
                        case "Checkbox":
                            Field.options.forEach((FieldOption, Index) => {
                                if (
                                    FieldOption.type === "Standard" &&
                                    FieldOption.label === OptionValue &&
                                    typeof FieldOption.value == "number"
                                ) {
                                    OptionPrice = FieldOption.value as number;
                                } else if (
                                    FieldOption.type === "Multiple" &&
                                    (
                                        FieldOption.value as {
                                            label: string;
                                            value: number;
                                        }[]
                                    ).find(
                                        (InnerValue: {
                                            label: string;
                                            value: number;
                                        }) => InnerValue.label === OptionValue
                                    ) &&
                                    typeof FieldOption.value == "object"
                                ) {
                                    let FullOptionField = (
                                        FieldOption.value as {
                                            label: string;
                                            value: number;
                                        }[]
                                    ).find(
                                        (InnerValue: {
                                            label: string;
                                            value: number;
                                        }) => InnerValue.label === OptionValue
                                    );

                                    OptionPrice =
                                        FullOptionField?.value as number;
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
    return { TotalSelectedOptionsDetails, TotalSelectedOptionsPrice };
}
