import Image from "next/image";
import React from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Search from "./Utils/B. SearchBar";
import Logo from "./Utils/A. Logo";
import Contact from "./Utils/C. Contact";
import products from "@/data/Products";

export default function Main() {
    const onSearch = (String: string) => {
        alert(`Searched: ${String}`);
    };
    return (
        <div className="WebHeader__Main">
            <Logo />
            <Search Products={products} />
            <Contact />
        </div>
    );
}
