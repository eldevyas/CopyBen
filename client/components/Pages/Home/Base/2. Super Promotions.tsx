import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
import ImageWithFallback from "@/components/Global/ImageWithFallbackProps";
import Products from "@/data/Products";

const Slide = (props: any) => {
    console.log(props.Title, " ", props.Image);
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
        swipeToSlide: true,
        autoPlay: true,
        autoPlaySpeed: 300,
        variableWidth: true,
        centerMode: true,
        className: "SuperPromotions__Slider",
    };

    return (
        <div className="SuperPromotions">
            <div className="SuperPromotions__Title">Nos Supers Promotions</div>
            <Slider {...settings}>
                {Products.map((Product, Index) => {
                    return (
                        <Slide
                            key={Index}
                            Title={Product.name}
                            Image={Product.images[0]}
                        />
                    );
                })}
            </Slider>
        </div>
    );
}
