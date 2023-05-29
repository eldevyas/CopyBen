import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdb-react-ui-kit";
import Link from "next/link";
import products from "@/data/Products";

export default function Footer() {
    return (
        <MDBFooter className="Footer text-center text-lg-start">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Rejoignez-nous sur les réseaux sociaux :</span>
                </div>

                <div>
                    <a href="#" className="me-4 text-reset">
                        <MDBIcon color="secondary" fab icon="facebook-f" />
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <MDBIcon color="secondary" fab icon="twitter" />
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <MDBIcon color="secondary" fab icon="google" />
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <MDBIcon color="secondary" fab icon="instagram" />
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <MDBIcon color="secondary" fab icon="linkedin" />
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <MDBIcon color="secondary" fab icon="github" />
                    </a>
                </div>
            </section>

            <section className="">
                <MDBContainer className="text-center text-md-start mt-5">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <MDBIcon
                                    color="secondary"
                                    icon="gem"
                                    className="me-3"
                                />
                                CopyBen
                            </h6>
                            <p>
                                Découvrez un univers de connaissances avec
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                CopyBen, votre source d'inspiration et de
                                savoir. Explorez notre vaste collection de
                                livres, profitez de nos services de lecture en
                                ligne et plongez dans un monde de découvertes
                                littéraires. CopyBen, votre compagnon de
                                lecture.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Produits
                            </h6>
                            {products.map((Product) => (
                                <p key={Product.name}>
                                    <Link
                                        href={Product.url}
                                        className="text-reset"
                                    >
                                        {Product.name}
                                    </Link>
                                </p>
                            ))}
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Liens Rapides
                            </h6>
                            <p>
                                <Link href="/" className="text-reset">
                                    Accueil
                                </Link>
                            </p>
                            <p>
                                <Link href="/Products" className="text-reset">
                                    Produits
                                </Link>
                            </p>
                        </MDBCol>

                        <MDBCol
                            md="4"
                            lg="3"
                            xl="3"
                            className="mx-auto mb-md-0 mb-4"
                        >
                            <h6 className="text-uppercase fw-bold mb-4">
                                COORDONNÉES
                            </h6>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="home"
                                    className="me-2"
                                />
                                116 avenue Ennour Kamra Cym Rabat - Maroc
                            </p>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="envelope"
                                    className="me-3"
                                />
                                contact@copyben.ma
                            </p>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="phone"
                                    className="me-3"
                                />{" "}
                                + 212 662 730 021
                            </p>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="print"
                                    className="me-3"
                                />
                                {"+ 212 522 680 795 "}
                            </p>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="print"
                                    className="me-3"
                                />
                                {"+ 212 522 680 785"}
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div
                className="text-center p-4"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
                © 2023 Copyright:{" "}
                <a className="text-reset fw-bold">CopyBen.ma</a>
            </div>
        </MDBFooter>
    );
}
