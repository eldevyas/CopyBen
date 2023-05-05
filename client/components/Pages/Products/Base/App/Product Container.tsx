import React from "react";
import ProductTitle from "./Sections/1. Product Title";
import Product from "@/types/Product";
import Order from "./Sections/2. Order";

export default function ProductContainer(Props: { product: Product } | any) {
    return (
        <div className="ProductPage__PageContent__ProductContainer">
            <ProductTitle
                Name={Props.product.name}
                className="ProductPage__PageContent__ProductContainer__ProductTitle"
            />
            <Order
                product={Props.product}
                className="ProductPage__PageContent__ProductContainer__Order"
            />
        </div>
    );
}
