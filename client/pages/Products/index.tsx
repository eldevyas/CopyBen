import ProductsPage from "@/components/Pages/Products/ProductsPage";
import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();
    const { q }: any = router.query;

    // If no products were filtered, display all products
    const Query = q ? q : q;

    return <ProductsPage Query={Query} />;
}
