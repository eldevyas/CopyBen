import { GetStaticPaths, GetStaticProps } from "next";
import { Product } from "@/types/Product";
import ProductPage from "@/components/Pages/Products/ProductPage";
import Products, { getProductByName } from "@/data/Products";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

interface ProductPageProps {
    Product: Product;
}

const ProductPageRoute = ({ Product }: ProductPageProps) => {
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

    return <ProductPage Product={Product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Products.map((Product: Product) => ({
        params: { Product: Product.url },
    }));
    console.clear();
    console.log("Paths: ", paths);

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    // Fetch the data for the product based on the name in the URL
    console.log("Parameters: ", params);
    const ProductName: any = params.Product;
    const Product = getProductByName(ProductName);
    return {
        props: { Product },
    };
};

export default ProductPageRoute;
