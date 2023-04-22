import React from "react";
import TopBar from "./Base/1. Top Bar";
import Main from "./Base/2. Main";
import Navigation from "./Base/3. Navigation";

export default function WebHeader() {
    return (
        <div className="Header WebHeader">
            <TopBar />
            <Main />
            <Navigation />
        </div>
    );
}
