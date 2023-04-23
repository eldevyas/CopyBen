import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SimpleSlider from '../slider/SimpleSlider';


export default function Page() {

    const [quantite, setQuantite] = useState(2500);
    const price = quantite*0.54;
    // console.log(quantite)
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
                    <form>
                    <div className="Left">
                        <h1 className="h1">Etape 1 : Calculateur de prix </h1>
                        <p className="p">Prix dégressifs selon la quantité et l&apos;impression</p>
                        <div className="FirstDiv">
                            <label className="lab">Taille</label>
                            <input className="BasicInput" type="text" value={"A4 -29,7 * 21cm"} disabled />
                        </div>
                        <div className="FirstDiv">
                            <label className="lab">Quantité</label>
                            <select onChange={(e)=>setQuantite(parseInt(e.target.value))} className="BasicInput">
                                <option className="Option" value="2500">2500</option>
                                <option className="Option" value="5000">5000</option>
                                <option className="Option" value="10000">10000</option>
                                <option className="Option" value="15000">15000</option>
                                <option className="Option" value="20000">20000</option>
                            </select>
                        </div>

                        <div className="FirstDiv">
                            <label className="lab">Papier</label>
                            <input className="BasicInput" type="text" value={"135 gr - Couché"} disabled />
                        </div>

                        <div className="FirstDiv">
                            <label className="lab">Impression</label>
                            <select className="BasicInput">
                                <option className="Option" value="">Recto Verso </option>
                                <option className="Option" value="">Recto</option>
                            </select>
                        </div>

                        <div className="FirstDiv">
                            <label className="lab" >Délais de livraison prévisionnel -- Super Promo A4</label>
                            <input className="BasicInput" type="text" value={"Stantard > 5 à 7 jours ouvrés"} disabled />
                        </div>
                        <div className="FirstDiv">
                            <label className="lab">Vous avez besoin de conception pour ce produit ?</label>
                            <select className="BasicInput">
                                <option className="Option" value="">oui</option>
                                <option className="Option" value="">non</option>
                            </select>
                        </div>

                        <div className="FirstDiv FixedDiv">
                            <div className="YellowSection">
                                <p className="YellowSectionParag">Total HT : {price.toFixed(2)} Dh</p>
                                <p className="LittlePar">Prix unitaire 0,54</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <details>
                            <summary className="ButtonHide">more informations</summary>
                            <select className="BasicInput">
                                <option className="OptinLiver">Livraison gratuite</option>
                            </select>
                        </details>
                    </div>
                    {/* <hr className="HR" /> */}
                    <div>
                        <details>
                            <summary className="ButtonHide">Télécharger ou recevoir des messages</summary>
                            <input className="BasicInput" type="email" placeholder="email" />
                        </details>
                    </div>
                    <button className="ValidButt">Vaider Votre Commande</button>
                    </form>
                </div>
                <div className="Item Actions">
                    <div>
                    <p className="H3Style">Etape2 : Personnaliser et commander</p> 
                    </div>
                    <div>
                    <button className="BlackButton">Passer Commande  Envoyer fichier en ligneou plus tard par mail ici</button>
                    </div>
                    <div>
                    <button className="PinkButton">Choisir un design modifiable en ligne</button>
                    </div>
                    <div>
                    <button className="GreyButton">Choisir un design modifiable en ligne</button>
                    </div>
                    <div>
                    <button className="YellowButton">Besoin d'aide pour le design ou pour une modification ?</button>
                    </div>
                    <div>
                    <button className="BlueButton">Demander un devis sur mesure ?</button>
                    </div>
                </div>
            </div>
            <div>
              <hr />
            </div>
            
        </div>
    );
}
