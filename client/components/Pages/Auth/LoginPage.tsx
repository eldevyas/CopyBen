import React, { useEffect } from "react";
import Login from "./Base/Login";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/Hooks";

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
