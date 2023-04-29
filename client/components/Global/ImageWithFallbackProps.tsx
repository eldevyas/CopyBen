import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import LandscapeOutlinedIcon from "@mui/icons-material/LandscapeOutlined";

interface ImageWithFallbackProps extends ImageProps {
    fallbackSrc: string;
}

const ImageWithFallback = (props: ImageWithFallbackProps) => {
    const { src, fallbackSrc, ...rest } = props;
    const [isValid, setValidity] = useState(true);
    //
    //
    return (
        <>
            {isValid ? (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Image
                    src={src}
                    {...rest}
                    onError={() => {
                        setValidity(false);
                    }}
                />
            ) : (
                <div className="ImagePlaceHolder">
                    <LandscapeOutlinedIcon />
                </div>
            )}
        </>
    );
};

export default ImageWithFallback;
