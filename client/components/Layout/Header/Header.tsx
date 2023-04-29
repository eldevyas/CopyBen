import React from "react";
import MobileHeader from "./Mobile/MobileHeader";
import WebHeader from "./Web/WebHeader";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
    // Set a state variable to keep track of the screen size
    const [isMobile, setIsMobile] = React.useState<boolean>(false);

    // Add an event listener to update the screen size on window resize
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <>{isMobile ? <MobileHeader /> : <WebHeader />}</>;
};

export default Header;
