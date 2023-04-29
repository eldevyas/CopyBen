import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Logo() {
    const Router = useRouter();
    return (
        <div
            className="WebHeader__Main__Logo"
            onClick={() => {
                Router.push("/");
            }}
        >
            <Image
                src="/img/Logo Dark.png"
                alt={""}
                width={174}
                height={84}
                className="LogoImage"
            />
        </div>
    );
}
