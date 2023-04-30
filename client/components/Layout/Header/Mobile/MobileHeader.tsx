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

const MobileHeader = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showNav, setShowNav] = useState(false);

    return (
        <MDBNavbar color="light" light expand="md">
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
                <form className="d-flex ml-auto w-100">
                    <MDBInput
                        label="Search"
                        type="text"
                        wrapperClass="w-100"
                        className="w-100"
                    />
                </form>
            </MDBCollapse>
            <Sidebar showNav={showNav} />
        </MDBNavbar>
    );
};

export default MobileHeader;
