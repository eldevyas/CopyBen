import React from "react";
import Slider from "react-slick";
export default function Avis() {
    let Testimonials = [
        {
            name: "Leila B.",
            testimonial:
                "J’ai commandé un livre photo pour tester le site. Très bien fait. J’ai été très agréablement surprise. J’ai envoyé le doc vendredi soir et reçu le livre lundi matin. Coursier très gentil. Je suis déjà en train de préparer mes prochaines commandes!",
        },
        {
            name: "Yasmina N.",
            testimonial:
                "Une équipe dynamique, à l'écoute et qui s'engage à vous offrir la qualité escomptée.. N'hésitez pas à passer commande auprès de cette entreprise très sérieuse !!",
        },
        {
            name: "Yassine C.",
            testimonial:
                "Comme pour toutes mes commandes, service client réactif via le chat pour toute question. 24hprint n'est pas juste un nom de domaine. C'est réellement le délai de réalisation de mes commandes. Impression de qualité. Merci.",
        },
    ];

    const settings = {
        className: "Avis__Testimonials__Slider",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        autoPlaySpeed: 300,
        variableWidth: true,
        centerMode: false,
    };

    return (
        <div className="Avis">
            <div className="Avis__Head">
                <div className="Avis__Head__Title">Avis Clients</div>
                <div className="Avis__Head__Description">
                    Ce que disent nos clients...
                </div>
            </div>
            <div className="Avis__Testimonials">
                <Slider {...settings}>
                    {Testimonials.map((Testimonial: any, Index: number) => {
                        return (
                            <div
                                key={Index}
                                className="Avis__Testimonials__Slider__Slide"
                            >
                                <div className="Avis__Testimonials__Slider__Slide__Container">
                                    <div className="Avis__Testimonials__Slider__Slide__Container__Name">
                                        {Testimonial.name}
                                    </div>
                                    <div className="Avis__Testimonials__Slider__Slide__Container__Comment">
                                        &quot;{Testimonial.testimonial}&quot;
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}
