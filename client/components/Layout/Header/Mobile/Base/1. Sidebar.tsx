import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarItem,
    MDBNavbarLink,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import Products from "@/data/Products";

const Sidebar = (props: any) => {
    const [showNav, setShowNav] = useState(false);

    return (
        <MDBCollapse show={props.showNav} navbar>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3">
                <li className="nav-item">
                    <MDBNavbarLink>Accueil</MDBNavbarLink>
                </li>
                <li className="nav-item dropdown">
                    <MDBNavbarLink
                        className="dropdown-toggle"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Produits
                    </MDBNavbarLink>
                    <ul className="dropdown-menu">
                        {Products.map((product: any) => (
                            <li key={product.name}>
                                <MDBNavbarLink>{product.name}</MDBNavbarLink>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
            <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item me-3 me-lg-0">
                    <MDBNavbarLink>Se connecter</MDBNavbarLink>
                </li>
                <li className="nav-item">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <MDBNavbarLink>S'inscrire</MDBNavbarLink>
                </li>
            </ul>
        </MDBCollapse>
    );
};

export default Sidebar;
