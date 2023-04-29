import Head from "next/head";
import React from "react";
import HeroSlider from "./Base/1. Hero Slider";
import SuperPromotions from "./Base/2. Super Promotions";
import Categories from "./Base/3. Categories";
import Valeurs from "./Base/4. Valeurs";
import Service from "./Base/5. Service";
import Avis from "./Base/6. Avis";

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
                <Valeurs />
                <Service />
                <Avis />
            </div>
        </div>
    );
}
