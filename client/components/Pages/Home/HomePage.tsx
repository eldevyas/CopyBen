import Head from "next/head";
import React from "react";
import HeroSlider from "./Base/1. Hero Slider";

export default function HomePage() {
    return (
        <div className="Page HomePage">
            <Head>
                <title>CopyBen - Accueil</title>
            </Head>

            <div className="PageContent">
                <HeroSlider />
            </div>
        </div>
    );
}
