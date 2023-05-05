import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import myImg from "@/public/img/Placeholder.png";
import ImageWithFallback from "@/components/Global/ImageWithFallbackProps";

export default function Catalogue(props: any) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        swipeToSlide: true,
        speed: 300,
        cssEase: "ease",
        nextArrow: <></>,
        prevArrow: <></>,
    };

    return (
        <div {...props}>
            <div className={`${props.className}__Title`}>Catalogue</div>
            <Slider {...settings} className={`${props.className}__Slider`}>
                {props.images?.map((IMG: string, Index: number) => (
                    <div
                        key={Index}
                        className={`${props.className}__Slider__Slide`}
                    >
                        <ImageWithFallback
                            src={IMG}
                            fallbackSrc="/img/Placeholder.png"
                            alt="Image"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
