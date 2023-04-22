import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

export default function TopBar() {
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
                    </div>{" "}
                </div>
            </div>
            <div className="WebHeader__TopBar__Right"></div>
        </div>
    );
}
