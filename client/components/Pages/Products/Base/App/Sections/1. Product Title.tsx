import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import React from "react";

// Icons
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function ProductTitle(props: { Name: string } | any) {
    return (
        <div {...props}>
            <div className="Title">
                Nos Produits {">"} {props.Name}
            </div>
            <div className="Breadcrumb">
                <Breadcrumbs
                    aria-label="Breadcrumb"
                    separator={<NavigateNextIcon fontSize="small" />}
                >
                    <Link color="inherit" href="/">
                        Accueil
                    </Link>
                    <Link color="inherit" href="/Products">
                        Nos Produits
                    </Link>
                    <Link color="inherit" href="#!">
                        {props.Name}
                    </Link>
                </Breadcrumbs>
            </div>
        </div>
    );
}
