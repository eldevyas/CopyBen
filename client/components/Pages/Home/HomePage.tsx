import Head from "next/head";
import React from "react";
import HeroSlider from "./Base/1. Hero Slider";
import SuperPromotions from "./Base/2. Super Promotions";
import Categories from "./Base/3. Categories";

export default function HomePage() {
    return (
        <div className="Page HomePage">
            <Head>
                <title>CopyBen - Accueil</title>
            </Head>

            <div className="PageContent">
                <HeroSlider />
                <SuperPromotions />
                <Categories />
            </div>
        </div>
    );
}
