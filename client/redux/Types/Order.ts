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
    orderID: string;
    userInfo: any;
    Product: Product;
    Customization: FormValues | null;
    Files: string[];
};

export type { OrderInfo };