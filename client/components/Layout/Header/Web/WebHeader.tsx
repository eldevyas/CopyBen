import React from "react";
import TopBar from "./Base/1. Top Bar";

export default function WebHeader() {
    return (
        <div className="Header WebHeader">
            <TopBar />
            <div className="Header__Main"></div>
            <div className="Header__Navigation"></div>
        </div>
    );
}
