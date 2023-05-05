import React, { useEffect } from "react";
import Register from "./Base/Register";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
    const Router = useRouter();
    const { isLoggedIn }: any = useAuth();

    useEffect(() => {
        const checkAuthentication = () => {
            if (isLoggedIn) {
                // Redirect to the homepage or a fallback URL
                Router.push("/");
            }
        };

        checkAuthentication();
    }, [Router, isLoggedIn]);

    return (
        <div className="RegisterPage">
            <Head>
                <title>CopyBen - S&apos;inscrire</title>
            </Head>
            <Register />
        </div>
    );
}
