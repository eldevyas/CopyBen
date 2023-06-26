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
import LogoutIcon from "@mui/icons-material/Logout";
import { styled, alpha } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import { Logout } from "@/redux/Slices/AuthSlice";
import { LogoutCurve } from "iconsax-react";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const UserAvatar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Redux Things
    const Dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(
        (state) => state.Auth.isAuthenticated
    );
    const User = useAppSelector((state) => state.Auth.User);

    const UserInfo = User ? User : null;

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
                    // alt={user.name}
                    onClick={handleClick}
                    sx={{
                        width: "2rem",
                        height: "2rem",
                        backgroundColor: "primary.main",
                        textTransform: "uppercase",
                    }}
                    variant="rounded"
                >
                    {/* {user.name[0]} */}
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
                    {isAuthenticated
                        ? `${User?.fname} ${User?.lname}`
                        : "Utilisateur non connecté"}
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
                        <MenuItem
                            onClick={() => {
                                Dispatch(Logout());
                            }}
                        >
                            <ListItemIcon>
                                <LogoutCurve
                                    color="currentColor"
                                    variant="Bulk"
                                />
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
