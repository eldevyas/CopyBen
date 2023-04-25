import ImageWithFallback from "@/components/Global/ImageWithFallbackProps";
import React from "react";
import Slider from "react-slick";

const Slide = (props: any) => {
    return (
        <div className="Slide">
            <ImageWithFallback
                src={props.Image}
                fallbackSrc="/img/Placeholder.png"
                alt="Image"
                fill
                style={{ objectFit: "cover" }}
            />
        </div>
    );
};

export default function HeroSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "MainSlider",
        autoPlay: true,
        autoPlaySpeed: 300,
    };

    let Slides = [
        {
            Image: "/img/Hero Slides/1.png",
            Link: "/",
        },
        {
            Image: "/img/Hero Slides/2.png",
            Link: "/",
        },
        {
            Image: "/img/Hero Slides/3.png",
            Link: "/",
        },
        {
            Image: "/img/Hero Slides/4.png",
            Link: "/",
        },
        {
            Image: "/img/Hero Slides/5.png",
            Link: "/",
        },
    ];

    return (
        <div className="HeroSlider">
            <div className="HeroSlider__Slider">
                <Slider {...settings}>
                    {Slides.map((Product, Index) => {
                        return <Slide key={Index} {...Product} />;
                    })}
                </Slider>
            </div>
        </div>
    );
}
