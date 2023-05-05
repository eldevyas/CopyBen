import Product from "@/types/Product";
import React from "react";
import Catalogue from "./Order/A. Catalogue";
import Calculator from "./Order/B. Calculator";
import Customize from "./Order/C. Customize";

export default function Order(props: { product: Product | any } | any) {
    return (
        <div {...props}>
            <Catalogue
                images={props.product.images}
                className={props.className + "__Catalogue"}
            />
            <Calculator
                product={props.product}
                className={props.className + "__Calculator"}
            />
            <Customize
                product={props.product}
                className={props.className + "__Customize"}
            />
        </div>
    );
}
