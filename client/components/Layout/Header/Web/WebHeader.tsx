import React, { useRef, useState } from "react";
import TopBar from "./Base/1. Top Bar";
import Main from "./Base/2. Main";
import Navigation from "./Base/3. Navigation";
// import useScrollPosition from "@/hooks/useScrollPosition";

const WebHeader = () => {
    return (
        <>
            <div className={`WebHeader Header`}>
                <TopBar />
                <Main />
            </div>
            <div className="WebHeader__Sticky">
                <Navigation />
            </div>
        </>
    );
};

export default WebHeader;
