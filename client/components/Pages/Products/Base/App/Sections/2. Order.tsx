import Product from "@/types/Product";
import React from "react";
import Catalogue from "./Order/A. Catalogue";
import Calculator from "./Order/B. Calculator";

export default function Order(props: { Product: Product | any } | any) {
    return (
        <div {...props}>
            <Catalogue
                images={props.Product.images}
                className={props.className + "__Catalogue"}
            />
            <Calculator
                Product={props.Product}
                className={props.className + "__Calculator"}
            />
        </div>
    );
}
