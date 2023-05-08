import { Product } from "@/types/Product";
import Head from "next/head";
import ProductContainer from "./Base/App/Product Container";

interface ProductPageProps {
    Product: Product;
}

const ProductPage = ({ Product }: ProductPageProps) => {
    const DocumentTitle = `CopyBen | ${Product.name}`;
    return (
        <div className="Page ProductPage">
            <Head>
                <title>{DocumentTitle}</title>
            </Head>
            <div className="ProductPage__PageContent">
                <ProductContainer
                    className={"ProductPage__PageContent__"}
                    Product={Product}
                />
            </div>
        </div>
    );
};

export default ProductPage;
