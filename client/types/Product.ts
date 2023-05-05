type Product = {
    name: string;
    description: string;
    readonly images: string[];
    readonly url: string;
    readonly unitPrice: number;
};


export type { Product };
export default Product;