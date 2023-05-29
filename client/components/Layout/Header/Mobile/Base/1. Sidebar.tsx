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
import { useRouter } from "next/router";
import { Context } from "@/types/Context";
import { useAuth } from "@/context/AuthContext";

const Sidebar = (props: any) => {
    const Router = useRouter();
    const [Authenticated, setAuthenticated] = useState(false);
    const { isLoggedIn, userInfo, logout } = useAuth() as Context;

    return (
        <MDBCollapse show={props.showNav} navbar style={{ userSelect: "none" }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3">
                <li
                    className="nav-item"
                    onClick={() => {
                        Router.push("/");
                    }}
                >
                    <MDBNavbarLink>Accueil</MDBNavbarLink>
                </li>
                <li
                    className="nav-item"
                    onClick={() => {
                        Router.push("/Products");
                    }}
                >
                    <MDBNavbarLink>Produits</MDBNavbarLink>
                </li>
                {isLoggedIn ? (
                    <>
                        <p className="nav-item text-primary">
                            Connecté en tant que: {userInfo?.fname}{" "}
                            {userInfo?.lname}
                        </p>
                        <li
                            className="nav-item"
                            onClick={() => {
                                logout();
                            }}
                        >
                            <MDBNavbarLink>Se Déconnecter</MDBNavbarLink>
                        </li>
                    </>
                ) : (
                    <>
                        <li
                            className="nav-item"
                            onClick={() => {
                                Router.push("/auth/login");
                            }}
                        >
                            <MDBNavbarLink>Se Connecter</MDBNavbarLink>
                        </li>
                        <li
                            className="nav-item"
                            onClick={() => {
                                Router.push("/auth/register");
                            }}
                        >
                            <MDBNavbarLink>S&apos;inscrire</MDBNavbarLink>
                        </li>
                    </>
                )}
            </ul>
        </MDBCollapse>
    );
};

export default Sidebar;
