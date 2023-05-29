import React from "react";
import Search from "./Utils/B. SearchBar";
import Logo from "./Utils/A. Logo";
import Contact from "./Utils/C. Contact";

export default function Main() {
    return (
        <div className="WebHeader__Main">
            <Logo />
            <Search />
            <Contact />
        </div>
    );
}
