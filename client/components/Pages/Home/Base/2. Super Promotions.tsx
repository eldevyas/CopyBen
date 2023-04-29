import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
import ImageWithFallback from "@/components/Global/ImageWithFallbackProps";

const Slide = (props: any) => {
    return (
        <div className="Slide">
            <div className="Card">
                <div className="Card__Image">
                    <ImageWithFallback
                        src={props.Image}
                        fallbackSrc="/img/Placeholder.png"
                        alt="Image"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="Card__Content">
                    <div className="Card__Content__Title">{props.Title}</div>
                    <Button
                        variant="text"
                        className="Card__Content__Button"
                        endIcon={<DoubleArrowOutlinedIcon />}
                    >
                        Commander en ligne
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default function SuperPromotions() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        autoPlaySpeed: 300,
        variableWidth: true,
        centerMode: true,
        className: "SuperPromotions__Slider",
    };

    let Products = [
        {
            Image: "/img/Cartes De Visite.png",
            Title: "Cartes De Visite",
        },
        {
            Image: "/img/Flyers.png",
            Title: "Flyers",
        },
        {
            Image: "/img/Dépliants.png",
            Title: "Dépliants",
        },
        {
            Image: "/img/Brochures.png",
            Title: "Brochures",
        },
        {
            Image: "/img/Affiches.png",
            Title: "Affiches",
        },
        {
            Image: "/img/Chemises.png",
            Title: "Chemises",
        },
        {
            Image: "/img/Chemise à Rabat.png",
            Title: "Chemise à Rabat",
        },
        {
            Image: "/img/Bloc Note.png",
            Title: "Bloc Note",
        },
        {
            Image: "/img/Calendrier.png",
            Title: "Calendrier",
        },
        {
            Image: "/img/Lettres à en tete.png",
            Title: "Lettres à en tete",
        },
        {
            Image: "/img/Enveloppe.png",
            Title: "Enveloppe",
        },
        {
            Image: "/img/Carnet de tickets.png",
            Title: "Carnet de tickets",
        },
    ];

    return (
        <div className="SuperPromotions">
            <div className="SuperPromotions__Title">Nos Supers Promotions</div>
            <Slider {...settings}>
                {Products.map((Product, Index) => {
                    return <Slide key={Index} {...Product} />;
                })}
            </Slider>
        </div>
    );
}
