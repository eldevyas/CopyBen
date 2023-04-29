import ImageWithFallback from "@/components/Global/ImageWithFallbackProps";
import Products from "@/data/Products";
import React from "react";

const Card = (props: any) => {
    return (
        <div className="Categories__Cards__Card">
            <div className="Categories__Cards__Card__Content">
                <div className="Categories__Cards__Card__Content__Title">
                    {props.Title}
                </div>
                <div className="Categories__Cards__Card__Content__Description">
                    {props.Description}
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
    return (
        <div className="Categories">
            <div className="Categories__Title">Catégories</div>
            <div className="Categories__Cards">
                {Products.map((Product, Index) => {
                    return (
                        <Card
                            key={Index}
                            Title={Product.name}
                            Description={Product.description}
                            Image={Product.images[0]}
                        />
                    );
                })}
            </div>
        </div>
    );
}
