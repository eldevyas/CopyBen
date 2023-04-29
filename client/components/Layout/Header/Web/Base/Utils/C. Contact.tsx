import React from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

export default function Contact() {
    let ContactNumbers: string[] = [
        "05 22 68 07 85",
        "05 22 68 07 95",
        "06 62 73 00 21",
    ];

    function handleClickPhoneNumber(phoneNumber: string) {
        window.open(`tel:${phoneNumber}`);
    }

    return (
        <>
            <div className="WebHeader__Main__Contact">
                <div className="WebHeader__Main__Contact__Icon">
                    <CallOutlinedIcon />
                </div>
                <div className="WebHeader__Main__Contact__Numbers">
                    {ContactNumbers.map((Number: string, Index: number) => {
                        return (
                            <div
                                key={Index}
                                className="WebHeader__Main__Contact__Numbers__Number"
                                onClick={() => handleClickPhoneNumber(Number)}
                            >
                                {Number}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
