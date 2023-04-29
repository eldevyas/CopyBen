import { Product } from "@/types/Product";
import Head from "next/head";

interface ProductPageProps {
    product: Product;
}

const ProductPage = ({ product }: ProductPageProps) => {
    return (
        <div className="Page ProductPage">
            <Head>
                <title>CopyBen - {product.name}</title>
            </Head>
            <div className="PageContent">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductPage;
