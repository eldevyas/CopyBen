import React from "react";
import Login from "./Base/Login";
import Head from "next/head";

export default function LoginPage() {
    return (
        <div className="LoginPage">
            <Head>
                <title>CopyBen - Se Connecter</title>
            </Head>
            <Login />
        </div>
    );
}
