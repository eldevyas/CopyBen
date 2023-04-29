import React from "react";
import Products from "@/data/Products";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import { NextRouter, useRouter } from "next/router";

const StyledTabs = styled((props: any) => (
    <Tabs
        {...props}
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />,
        }}
    />
))({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
        // maxWidth: 40,
        width: "100%",
        backgroundColor: "#ff9515",
    },
});

const StyledTab = styled((props: any) => <Tab {...props} />)(({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
        color: "#ff9515",
    },
    "&.Mui-focusVisible": {
        backgroundColor: "#ff9515",
    },
}));

export default function Navigation() {
    const Router: NextRouter = useRouter();

    // Get the Product parameter value from the URL
    const { Product } = Router.query;

    // Find the index of the product that matches the Product parameter value in the URL
    const activeIndex = Products.findIndex((product) => {
        return product.name.toLowerCase().replace(/ /g, "-") === Product;
    });

    const handleChange = () => {};

    return (
        <div className="WebHeader__Navigation">
            <StyledTabs
                value={activeIndex < 0 ? 0 : activeIndex + 1}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                aria-label="scrollable auto tabs example"
                className={"WebHeader__Navigation__Links"}
                sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                        "&.Mui-disabled": { opacity: 0.3 },
                        color: "#fff",
                    },
                }}
            >
                <StyledTab
                    label={"Accueil"}
                    className={"WebHeader__Navigation__Links__Link"}
                    onClick={() => {
                        Router.push("/");
                    }}
                />
                {Products.map((Item, Index) => {
                    return (
                        <StyledTab
                            label={Item.name}
                            key={Index}
                            className={"WebHeader__Navigation__Links__Link"}
                            onClick={() => {
                                Router.push(Item.url);
                            }}
                        />
                    );
                })}
            </StyledTabs>
        </div>
    );
}
