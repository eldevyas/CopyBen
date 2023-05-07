import { Product } from "@/types/Product";
import Head from "next/head";
import ProductContainer from "./Base/App/Product Container";

interface ProductPageProps {
    product: Product;
}

const ProductPage = ({ product }: ProductPageProps) => {
    return (
        <div className="Page ProductPage">
            <Head>
                <title>CopyBen | {product.name}</title>
            </Head>
            <div className="ProductPage__PageContent">
                <ProductContainer
                    className={"ProductPage__PageContent__"}
                    Product={product}
                />
            </div>
        </div>
    );
};

export default ProductPage;
