import React from "react";
import ProductsList from "./Base/Home/1. Products List";
import Head from "next/head";

export default function ProductsPage({ Query }: { Query: string }) {
    return (
        <div className="Page ProductsPage">
            <Head>
                <title>CopyBen - Produits</title>
            </Head>
            <div className="PageContent">
                <ProductsList Query={Query} />
            </div>
        </div>
    );
}
