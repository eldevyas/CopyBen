import Product from "@/types/Product";

type FormValues = {
    Quantity: number;
    Customization: any;
    Delivery: string;
    Conception: string;
    Notes: string;
    "Unit Price": number;
    "Total HT": number;
};

type OrderInfo = {
    orderID: string | null;
    userInfo: any | null;
    Product: Product | null;
    Customization: FormValues | null;
    Files: string[] | null;
};

export type { OrderInfo };