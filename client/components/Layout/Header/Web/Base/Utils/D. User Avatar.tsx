import React, { useContext, useState } from "react";
import {
    Avatar,
    Button,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    MenuProps,
    Stack,
    Typography,
    createTheme,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Logout from "@mui/icons-material/Logout";
import { styled, alpha } from "@mui/material/styles";

import { useAuth } from "@/context/AuthContext";
import { Context } from "@/types/Context";
import { ThemeProvider } from "@emotion/react";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const UserAvatar = () => {
    const { userInfo, logout } = useAuth() as Context;
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const user = {
        name: userInfo?.fname
            ? `${userInfo.fname} ${userInfo.lname}`
            : "unknown",
    };

    return (
        <>
            <Stack
                className="UserAvatar"
                direction="row"
                spacing={2}
                justifyContent="flex-end"
                alignItems="center"
                sx={{
                    backgroundColor: "#000",
                    px: 2,
                    py: 1,
                    color: "#fcfcfc",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                }}
            >
                <Avatar
                    alt={user.name}
                    onClick={handleClick}
                    sx={{
                        width: "2rem",
                        height: "2rem",
                        backgroundColor: "primary.main",
                        textTransform: "uppercase",
                    }}
                    variant="square"
                >
                    {user.name[0]}
                </Avatar>
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Montserrat, sans-serif",
                        textTransform: "uppercase",
                        fontSize: "0.75rem",
                    }}
                    onClick={handleClick}
                >
                    {user.name}
                </Typography>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={Boolean(anchorEl) ? "long-menu" : undefined}
                    aria-expanded={Boolean(anchorEl) ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    sx={{
                        color: "primary.main",
                    }}
                >
                    <MoreVertIcon />
                </IconButton>
                <ThemeProvider theme={darkTheme}>
                    <Menu
                        id="user-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={logout}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="body1">
                                Se déconnecter
                            </Typography>
                        </MenuItem>
                    </Menu>
                </ThemeProvider>
            </Stack>
        </>
    );
};

export default UserAvatar;
