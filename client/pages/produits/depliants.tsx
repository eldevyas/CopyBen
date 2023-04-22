import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

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
                <div className="Item Info"></div>
                <div className="Item App">
                    
                </div>
                <div className="Item Actions"></div>
            </div>
        </div>
    );
}
