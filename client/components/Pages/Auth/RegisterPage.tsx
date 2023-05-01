import React from "react";
import Register from "./Base/Register";
import Head from "next/head";

export default function RegisterPage() {
    return (
        <div className="RegisterPage">
            <Head>
                <title>CopyBen - S&apos;inscrire</title>
            </Head>
            <Register />
        </div>
    );
}
