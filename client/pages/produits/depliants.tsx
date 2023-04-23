import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SimpleSlider from "../slider/SimpleSlider";

export default function Page() {
    return (
        <div className="ProductPage">
            <div className="TitleBar">
                <div className="Title">Nos Produits {">"} Dépliants</div>
                <div className="Breadcrumb">
                    <Breadcrumbs
                        aria-label="Breadcrumb"
                        separator={<NavigateNextIcon fontSize="small" />}
                    >
                        <Link color="inherit" href="#">
                            Accueil
                        </Link>
                        <Link color="inherit" href="#">
                            Nos Produits
                        </Link>
                        <Link color="inherit" href="#">
                            Dépliants
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>
            <div className="Calculateur">
                <div className="Item Info">
                    <SimpleSlider />
                </div>
                <div className="Item App">
                    <div className="Left">
                        <h1 className="h1">Etape 1 : Calculateur de prix </h1>
                        <p className="p">
                            Prix dégressifs selon la quantité et l'impression
                        </p>
                        <div className="FirstDiv">
                            <label className="lab">Taille</label>
                            <input
                                className="BasicInput"
                                type="text"
                                value={"A4 -29,7 * 21cm"}
                                disabled
                            />
                        </div>
                        <div className="FirstDiv">
                            <label className="lab">Quantité</label>
                            <select className="BasicInput">
                                <option value="">2500</option>
                                <option value="">5000</option>
                                <option value="">10000</option>
                                <option value="">15000</option>
                                <option value="">20000</option>
                            </select>
                        </div>

                        <div className="FirstDiv">
                            <label className="lab">Papier</label>
                            <input
                                className="BasicInput"
                                type="text"
                                value={"135 gr - Couché"}
                                disabled
                            />
                        </div>

                        <div className="FirstDiv">
                            <label className="lab">Impression</label>
                            <select className="BasicInput">
                                <option value="">Recto Verso </option>
                                <option value="">Recto</option>
                            </select>
                        </div>

                        <div className="FirstDiv">
                            <label className="lab">
                                Délais de livraison prévisionnel -- Super Promo
                                A4
                            </label>
                            <input
                                className="BasicInput"
                                type="text"
                                value={"Stantard > 5 à 7 jours ouvrés"}
                                disabled
                            />
                        </div>
                        <div className="FirstDiv">
                            <label className="lab">
                                Vous avez besoin de conception pour ce produit ?
                            </label>
                            <select className="BasicInput">
                                <option className="Option" value="">
                                    oui
                                </option>
                                <option className="Option" value="">
                                    non
                                </option>
                            </select>
                        </div>

                        <div className="FirstDiv FixedDiv">
                            <div className="YellowSection">
                                <p className="YellowSectionParag">
                                    Total HT:1 347,81Dh
                                </p>
                                <p className="LittlePar">Prix unitaire 0,54</p>
                            </div>
                        </div>

                        <div>
                            <p>more informations</p>
                            <details>
                                <summary className="ButtonHide"></summary>

                                <select className="BasicInput">
                                    <option className="OptinLiver">
                                        Livraison gratuite
                                    </option>
                                </select>
                            </details>
                        </div>
                        <hr className="HR" />

                        <div>
                            <p className="lab">
                                Télécharger ou recevoir des messages{" "}
                            </p>
                            <details>
                                <summary className="ButtonHide"></summary>
                                <input
                                    className="BasicInput"
                                    type="email"
                                    placeholder="email"
                                />
                            </details>
                        </div>
                    </div>
                </div>
                <div className="Item Actions">div3</div>
            </div>
        </div>
    );
}
