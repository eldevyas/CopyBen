import React from "react";
import MenuItems from "./Data/NavigationLinks";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";

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
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div className="WebHeader__Navigation">
            <StyledTabs
                value={value}
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
                {MenuItems.map((Item, Index) => {
                    return (
                        <StyledTab
                            label={Item.Name}
                            key={Index}
                            className={"WebHeader__Navigation__Links__Link"}
                        />
                    );
                })}
            </StyledTabs>
        </div>
    );
}
