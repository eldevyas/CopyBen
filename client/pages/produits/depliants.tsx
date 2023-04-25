import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SimpleSlider from "../slider/SimpleSlider";

const initValues = {
    name: "",
    email: "",
    taille: "A4 -29,7 * 21cm",
    quantite: "2500",
    papier: "135 gr - Couché",
    impression: "Recto Verso",
};
const initState = { values: initValues };

// Mailer imports
import { sendContactForm } from "../../lib/api";

export default function Page() {
    // const [quantite, setQuantite] = useState(2500);
    // const price = quantite * 0.54;
    // Mailer Start
    const [fillForm, setFillForm] = useState(true);
    const [passerComm, setPasserComm] = useState(false);

    const [state, setState] = useState(initState);
    const { values } = state;

    const handlePasserComm = () => {
        setPasserComm(true);
        setFillForm(false)
    }

    const backToForm = () => {
        setPasserComm(false);
        setFillForm(true)
    }

    const handleChange = ({ target }: { target: any }) =>
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));

const price = state.values.quantite*0.54;

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            await sendContactForm(values);
            setState(initState);
            console.log(state);
        } catch (error) {
            console.log(error);
        }
    };
    // Mailer End
    return (
        <div className="ProductPage">
            <div className="TitleBar">
                <div className="Title">Nos Produits {">"} Dépliants</div>
                <div className="Breadcrumb">
                    <Breadcrumbs
                        aria-label="Breadcrumb"
                        separator={<NavigateNextIcon fontSize="small" />}
                    >
                        <Link color="inherit" href="/">
                            Accueil
                        </Link>
                        <Link color="inherit" href="/">
                            Nos Produits
                        </Link>
                        <Link color="inherit" href="/">
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
                    {/* Fill In Form */}
                    {fillForm && <form>
                        <div className="Left">
                            <h1 className="h1">
                                Etape 1 : Calculateur de prix{" "}
                            </h1>

                            <p className="p">
                                Note : le nom complet et l&apos;email sont
                                obligatoires
                            </p>
                            <div className="FirstDiv">
                                <label className="lab">
                                    Nom & Prénom{" "}
                                    <sup style={{ color: "red" }}>*</sup>
                                </label>
                                <input
                                    className="BasicInput"
                                    type="text"
                                    required
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="FirstDiv">
                                <label className="lab">
                                    Email <sup style={{ color: "red" }}>*</sup>
                                </label>
                                <input
                                    className="BasicInput"
                                    type="email"
                                    required
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <p className="p">
                                Prix dégressifs selon la quantité et
                                l&apos;impression
                            </p>
                            <div className="FirstDiv">
                                <label className="lab">Taille</label>
                                <input
                                    className="BasicInput"
                                    type="text"
                                    value={"A4 -29,7 * 21cm"}
                                    readOnly
                                    name="taille"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="FirstDiv">
                                <label className="lab">Quantité</label>
                                <select
                                    defaultValue="2500"
                                    name="quantite"
                                    onChange={handleChange}
                                    className="BasicInput"
                                >
                                    <option className="Option" value="2500">
                                        2500
                                    </option>
                                    <option className="Option" value="5000">
                                        5000
                                    </option>
                                    <option className="Option" value="10000">
                                        10000
                                    </option>
                                    <option className="Option" value="15000">
                                        15000
                                    </option>
                                    <option className="Option" value="20000">
                                        20000
                                    </option>
                                </select>
                            </div>

                            <div className="FirstDiv">
                                <label className="lab">Papier</label>
                                <input
                                    className="BasicInput"
                                    type="text"
                                    value={"135 gr - Couché"}
                                    readOnly
                                    name="papier"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="FirstDiv">
                                <label className="lab">Impression</label>
                                <select
                                    defaultValue="Recto Verso"
                                    name="impression"
                                    onChange={handleChange}
                                    className="BasicInput"
                                >
                                    <option
                                        className="Option"
                                        value="Recto Verso"
                                    >
                                        Recto Verso{" "}
                                    </option>
                                    <option className="Option" value="Recto">
                                        Recto
                                    </option>
                                </select>
                            </div>

                            <div className="FirstDiv">
                                <label className="lab">
                                    Délais de livraison prévisionnel -- Super
                                    Promo A4
                                </label>
                                <input
                                    className="BasicInput"
                                    type="text"
                                    value={"Stantard > 5 à 7 jours ouvrés"}
                                    disabled
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="FirstDiv">
                                <label className="lab">
                                    Vous avez besoin de conception pour ce
                                    produit ?
                                </label>
                                <select
                                    onChange={handleChange}
                                    className="BasicInput"
                                >
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
                                        Total HT : {price.toFixed(2)} Dh
                                    </p>
                                    <p className="LittlePar">
                                        Prix unitaire 0,54
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <details>
                                <summary className="ButtonHide">
                                    more informations
                                </summary>
                                <select
                                    onChange={handleChange}
                                    className="BasicInput"
                                >
                                    <option className="OptinLiver">
                                        Livraison gratuite
                                    </option>
                                </select>
                            </details>
                        </div>
                        {/* <hr className="HR" /> */}
                        <div>
                            <details>
                                <summary className="ButtonHide">
                                    Télécharger ou recevoir des messages
                                </summary>
                                <input
                                    onChange={handleChange}
                                    className="BasicInput"
                                    type="email"
                                    placeholder="email"
                                />
                            </details>
                        </div>

                        <button
                            onClick={onSubmit}
                            className="ValidButt"
                            type="submit"
                        >
                            Envoyer la commande
                        </button>
                    </form>}
                    {/* Passer Commande */}
                    {passerComm && <>
                        <div className="PasserComm__main">
                            <div>
                                <Link className="back" href={""} onClick={backToForm}>
                                Retour à l&apos;étape 1
                                </Link>
                            </div>

                            <div className="lol">
                                <h1>Passer Commande</h1>
                                <p className="para1">ENVOYER FICHIER EN LIGNE OU PLUS TARD PAR MAIL ICI (SUPER PROMO - DEPLIANTS)</p>
                            </div>
                            <form>
                                <div className="taille_info">
                                    <div className="subBlock">
                                        <label>Taille : </label>
                                        <select>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                        </select>
                                    </div>
                                    <Link href={""} className="btn_superieur">Transférer un fichier superieur à 150 MB</Link>
                                </div>

                                <div className="uploar_file">
                                    <p className="p1">mecri de telecharge uniquement des fichiers ( .jgp  .jpeg )</p>
                                    <div className="box">
                                        <label>Nom du fichier : </label>
                                        <input placeholder="Le Nom du fichier" className="input_text" type="text" />
                                    </div>
                                    <p className="p2">Telecharger votre Recto ici :</p>
                                    <input accept="image/jpg, image/jpeg" className="input_file" type="file" />
                                </div>
                                <button className="send_order" type="submit">Envoyer la commande</button>
                            </form>

                        </div>
                    </>}
                </div>
                <div className="Item Actions">
                    <div>
                        <p className="H3Style">
                            Etape2 : Personnaliser et commander
                        </p>
                    </div>
                    <div>
                        <Link className="OrangeButton" href={""} onClick={handlePasserComm}>
                            Passer Commande Envoyer fichier en ligne ou plus tard
                            par mail ici
                        </Link>
                    </div>
                </div>
                {/* <div className="Item Actions">div3</div> */}
            </div>
            <div>
                <hr />
            </div>

        </div>
    );
}
