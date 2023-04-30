import { GetStaticPaths, GetStaticProps } from "next";
import { Product } from "@/types/Product";
import ProductPage from "@/components/Pages/Products/ProductPage";
import { getProductByName } from "@/data/Products";

interface ProductPageProps {
    product: Product;
}

const ProductPageRoute = ({ product }: ProductPageProps) => {
    return <ProductPage product={product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
    let Hostname = process.env.NEXT_PUBLIC_API_BASE_URL;

    const products = await fetch(`${Hostname}/products`).then((res) =>
        res.json()
    );
    const paths = products.map((product: Product) => ({
        params: { Product: product.name.toLowerCase().replace(/ /g, "-") },
    }));
    console.clear();
    console.log("Paths: ", paths);

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    // Fetch the data for the product based on the name in the URL
    console.log("Parameters: ", params);
    const productName: any = params.Product;
    const product = getProductByName(productName);
    // return { props: { product } };
    return {
        props: { product },
    };
};

export default ProductPageRoute;