import { GetStaticPaths, GetStaticProps } from "next";
import { Product } from "@/types/Product";
import ProductPage from "@/components/Pages/Products/ProductPage";
import Prodcuts, { getProductByName } from "@/data/Products";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

interface ProductPageProps {
    product: Product;
}

const ProductPageRoute = ({ product }: ProductPageProps) => {
    const Router = useRouter();
    const { isLoggedIn }: any = useAuth();

    useEffect(() => {
        const checkAuthentication = () => {
            if (!isLoggedIn) {
                // Redirect to the homepage or a fallback URL
                Router.push("/auth/login");
            }
        };

        checkAuthentication();
    }, [Router, isLoggedIn]);

    return <ProductPage product={product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
    let Hostname = process.env.NEXT_PUBLIC_API_BASE_URL;

    const paths = Prodcuts.map((Product: Product) => ({
        params: { Product: Product.name.toLowerCase().replace(/ /g, "-") },
    }));
    console.clear();
    console.log("Paths: ", paths);

    return { paths, fallback: true };
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
