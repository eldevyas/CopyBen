import React from "react";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import HandshakeIcon from "@mui/icons-material/Handshake";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import RecommendIcon from "@mui/icons-material/Recommend";
//
//
export default function Valeurs() {
    return (
        <div className="Valeurs">
            <div className="Valeurs__Title">Les valeurs de CopyBen.ma</div>
            <div className="Valeurs__Values">
                <div className="Valeurs__Values__Value">
                    <EmojiObjectsIcon className="Valeurs__Values__Value__Icon" />
                    <div className="Valeurs__Values__Value__Name">
                        Creativité
                    </div>
                </div>
                <div className="Valeurs__Values__Value">
                    <HandshakeIcon className="Valeurs__Values__Value__Icon" />
                    <div className="Valeurs__Values__Value__Name">
                        Partenariat
                    </div>
                </div>
                <div className="Valeurs__Values__Value">
                    <RocketLaunchIcon className="Valeurs__Values__Value__Icon" />
                    <div className="Valeurs__Values__Value__Name">Rapidité</div>
                </div>
                <div className="Valeurs__Values__Value">
                    <RecommendIcon className="Valeurs__Values__Value__Icon" />
                    <div className="Valeurs__Values__Value__Name">Ecologie</div>
                </div>
            </div>
        </div>
    );
}
