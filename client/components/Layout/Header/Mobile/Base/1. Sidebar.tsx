import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarItem,
    MDBNavbarLink,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Products from "@/data/Products";

const Sidebar = (props: any) => {
    const [showNav, setShowNav] = useState(false);

    const toggleShowHide = () => {
        if (!showNav) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    };

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
                        onClick={toggleShowHide}
                    >
                        Produits
                    </MDBNavbarLink>
                </li>
            </ul>

            <ul
                style={{
                    display: showNav ? "block" : "none",
                    background: "white",
                    margin: "0",
                }}
            >
                {Products.map((product: any) => (
                    <li className="nav-item" key={product.name}>
                        <MDBNavbarLink>{product.name}</MDBNavbarLink>
                    </li>
                ))}
            </ul>

            <ul className="navbar-nav d-flex flex-row mx-3 bg-white">
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
