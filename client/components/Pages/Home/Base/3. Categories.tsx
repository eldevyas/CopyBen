import ImageWithFallback from "@/components/Global/ImageWithFallbackProps";
import React from "react";

const Card = (props: any) => {
    return (
        <div className="Categories__Cards__Card">
            <div className="Categories__Cards__Card__Content">
                <div className="Categories__Cards__Card__Content__Title">
                    {props.Title}
                </div>
                <div className="Categories__Cards__Card__Content__Description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illo, aliquam earum dignissimos quisquam voluptate possimus
                    commodi recusandae doloremque placeat, numquam quia est
                    reprehenderit inventore adipisci deserunt in quasi deleniti
                    nisi?
                </div>
            </div>
            <div className="Categories__Cards__Card__Image">
                <ImageWithFallback
                    src={props.Image}
                    fallbackSrc="/img/Placeholder.png"
                    alt="Image"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    );
};

export default function Categories() {
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
        <div className="Categories">
            <div className="Categories__Title">Catégories</div>
            <div className="Categories__Cards">
                {Products.map((Product, Index) => {
                    return <Card key={Index} {...Product} />;
                })}
            </div>
        </div>
    );
}
