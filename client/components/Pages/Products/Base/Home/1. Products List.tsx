import ImageWithFallback from "@/components/Global/ImageWithFallbackProps";
import Products from "@/data/Products";
import React from "react";

const Card = (props: any) => {
    return (
        <div className="ProductsList__Cards__Card">
            <div className="ProductsList__Cards__Card__Content">
                <div className="ProductsList__Cards__Card__Content__Title">
                    {props.Title}
                </div>
                <div className="ProductsList__Cards__Card__Content__Description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illo, aliquam earum dignissimos quisquam voluptate possimus
                    commodi recusandae doloremque placeat, numquam quia est
                    reprehenderit inventore adipisci deserunt in quasi deleniti
                    nisi?
                </div>
            </div>
            <div className="ProductsList__Cards__Card__Image">
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

export default function ProductsList({ Query }: { Query: string }) {
    const filteredProducts = Products.filter((Product) => {
        return Query != null && Query != ""
            ? Product.name.toLowerCase().includes(Query.toLowerCase())
            : Product;
    });
    return (
        <div className="ProductsList">
            <div className="ProductsList__Title">Produits</div>
            <div className="ProductsList__Cards">
                {filteredProducts.map((Product, Index) => {
                    return <Card key={Index} Title={Product.name} />;
                })}
            </div>
        </div>
    );
}
