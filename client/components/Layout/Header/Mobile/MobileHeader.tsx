import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBCollapse,
    MDBInput,
    MDBIcon,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "./Base/1. Sidebar";
import { useRouter } from "next/router";

const MobileHeader = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const [query, setQuery] = React.useState("");

    const Router = useRouter();

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        Router.push({
            pathname: "/products",
            query: { q: query },
        });
    };

    return (
        <MDBNavbar
            color="light"
            light
            expand="md"
            style={{ zIndex: "2000", background: "white" }}
        >
            <MDBNavbarToggler
                aria-controls="navbarExample01"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShowNav(!showNav)}
            >
                <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand href="#">
                <Image
                    src="/img/Logo Dark.png"
                    alt={""}
                    width={174 * 0.5}
                    height={84 * 0.5}
                    className="LogoImage"
                />
            </MDBNavbarBrand>
            <MDBNavbarToggler
                aria-controls="navbarExample01"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShowSearch(!showSearch)}
            >
                <MDBIcon icon="search" fas />
            </MDBNavbarToggler>
            <MDBCollapse show={showSearch} navbar className="w-100 p-3">
                <form className="d-flex ml-auto w-100" onSubmit={handleSubmit}>
                    <MDBInput
                        label="Rechercher"
                        type="text"
                        wrapperClass="w-100"
                        className="w-100"
                        value={query}
                        onChange={handleQueryChange}
                    />
                </form>
            </MDBCollapse>
            <Sidebar
                showNav={showNav}
                style={{ zIndex: "2000", background: "white" }}
            />
        </MDBNavbar>
    );
};

export default MobileHeader;
