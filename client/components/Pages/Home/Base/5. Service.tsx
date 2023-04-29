import ImageWithFallback from "@/components/Global/ImageWithFallbackProps";
import React from "react";

const Card = (props: any) => {
    return (
        <div className="Service__Services__Card">
            <div className="Service__Services__Card__Content">
                <div className="Service__Services__Card__Content__Title">
                    {props.Title}
                </div>
                <div className="Service__Services__Card__Content__Description">
                    {props.Description}
                </div>
            </div>
            <div className="Service__Services__Card__Image">
                <ImageWithFallback
                    src={props.Image}
                    fallbackSrc="/img/Placeholder.png"
                    alt="Image"
                    fill
                    style={{ objectFit: "cover" }}
                />{" "}
            </div>
        </div>
    );
};

export default function Service() {
    let Services = [
        {
            Title: "Modèles personnalisables en ligne",
            Description:
                "Plusieurs designs sur chaque produit personnalisable gratuitement en ligne sur notre studio graphique.",
            Image: "",
        },
        {
            Title: "Support à l'écoute",
            Description:
                "Nous sommes disponible tout au long de la semaine de 8h30 à 20h pour vous accompagner sur notre site via email / live chat / WhatsApp / appel téléphonique",
            Image: "",
        },
        {
            Title: "Imprimerie en ligne innovante",
            Description:
                "Profitez de notre expertise et un rapport qualité prix irréprochable pour tout type d'impression",
            Image: "",
        },
        {
            Title: "100% Sécurisé",
            Description:
                "Nous garantissons une confidentialité de vos données et fichiers personnelles et vos coordonnées. ",
            Image: "",
        },
    ];
    return (
        <div className="Service">
            <div className="Service__Title">Notre service à la clientèle</div>
            <div className="Service__Services">
                {Services.map((CardProps: any, Index: number) => (
                    <Card key={Number} {...CardProps} />
                ))}
            </div>
        </div>
    );
}
