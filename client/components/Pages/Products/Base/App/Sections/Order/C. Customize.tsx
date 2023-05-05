import Product from "@/types/Product";
import React from "react";

export default function Customize(props: Product | any) {
    return <div {...props}>Customize</div>;
}
