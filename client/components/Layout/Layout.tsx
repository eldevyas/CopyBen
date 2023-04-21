import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout(props: any) {
    return (
        // Page Layout repeated overall pages.
        <div className="PageLayout">
            <Header />
            {...props.children}
            <Footer />
        </div>
    );
}
