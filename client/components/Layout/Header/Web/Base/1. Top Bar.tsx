import React, { useEffect, useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LoginIcon from "@mui/icons-material/Login";
import { useRouter } from "next/router";
import Link from "next/link";
import UserAvatar from "./Utils/D. User Avatar";
import { useAppSelector } from "@/redux/Hooks";

function ActiveLink({ children, href }: any) {
    const router = useRouter();

    let className = children.props.className || "";
    if (router.pathname === href) {
        className = `${className} active`;
    }

    return (
        <Link href={href}>{React.cloneElement(children, { className })}</Link>
    );
}

export default function TopBar() {
    const Router = useRouter();
    const isAuthenticated = useAppSelector(
        (state) => state.Auth.isAuthenticated
    );

    return (
        <div className="WebHeader__TopBar">
            <div className="WebHeader__TopBar__Left">
                <div className="WebHeader__TopBar__Left__Item">
                    <EmailOutlinedIcon
                        className="WebHeader__TopBar__Left__Item__Icon"
                        fontSize="small"
                    />
                    <div className="WebHeader__TopBar__Left__Item__Name">
                        Envoyez un Email
                    </div>
                </div>
                <div className="WebHeader__TopBar__Left__Item">
                    <PhoneOutlinedIcon
                        className="WebHeader__TopBar__Left__Item__Icon"
                        fontSize="small"
                    />
                    <div className="WebHeader__TopBar__Left__Item__Name">
                        Nous Appeler
                    </div>
                </div>
            </div>
            <div className={"WebHeader__TopBar__Right"}>
                {isAuthenticated ? (
                    <UserAvatar />
                ) : (
                    <>
                        <Link
                            className={`WebHeader__TopBar__Right__Item ${
                                Router.pathname.includes("/auth/register")
                                    ? "WebHeader__TopBar__Right__Item__Active"
                                    : "WebHeader__TopBar__Right__Item__Inactive"
                            }`}
                            href={"/auth/register"}
                        >
                            <ExitToAppIcon
                                className="WebHeader__TopBar__Right__Item__Icon"
                                fontSize="small"
                            />
                            <div className="WebHeader__TopBar__Right__Item__Name">
                                S&apos;inscrire
                            </div>
                        </Link>
                        <Link
                            className={`WebHeader__TopBar__Right__Item ${
                                Router.pathname.includes("/auth/login")
                                    ? "WebHeader__TopBar__Right__Item__Active"
                                    : "WebHeader__TopBar__Right__Item__Inactive"
                            }`}
                            href={"/auth/login"}
                        >
                            <LoginIcon
                                className="WebHeader__TopBar__Right__Item__Icon"
                                fontSize="small"
                            />
                            <div className="WebHeader__TopBar__Right__Item__Name">
                                Se connecter
                            </div>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
