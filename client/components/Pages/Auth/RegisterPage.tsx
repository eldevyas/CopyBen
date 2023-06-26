import React, { useEffect } from "react";
import Register from "./Base/Register";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/Hooks";
import { OrderInfo } from "@/redux/Types/Order";

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
