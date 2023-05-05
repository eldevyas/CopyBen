import React, { useEffect } from "react";
import Login from "./Base/Login";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
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
        <div className="LoginPage">
            <Head>
                <title>CopyBen - Se Connecter</title>
            </Head>
            <Login />
        </div>
    );
}
