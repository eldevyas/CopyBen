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

const ProductPageRoute = () => {
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

    return <ProductPage Product={Products[2]} />;
};

export default ProductPageRoute;
