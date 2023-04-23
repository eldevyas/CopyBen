import React from "react";
import Slider from "react-slick";

export default function HeroSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "MainSlider",
    };

    return (
        <div className="HeroSlider">
            <div className="HeroSlider__Slider">
                <Slider {...settings}>
                    <div className="Slide">
                        <h3>1</h3>
                    </div>
                    <div className="Slide">
                        <h3>2</h3>
                    </div>
                    <div className="Slide">
                        <h3>3</h3>
                    </div>
                    <div className="Slide">
                        <h3>4</h3>
                    </div>
                    <div className="Slide">
                        <h3>5</h3>
                    </div>
                    <div className="Slide">
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
