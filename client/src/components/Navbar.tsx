import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppBar, Box, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, useTheme } from "@mui/material";
import { SunFill, MoonFill, List, Search, GearFill, CaretDownFill} from "react-bootstrap-icons";
import FlexBetween from "./FlexBetween";
import { setMode } from "../state";

import profileImage from "../assets/profile.webp";
import { getUserResponse } from "state/types";

interface navbarProps {
    user: getUserResponse | undefined,
    isSidebarOpen: boolean,
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar(props: navbarProps) {
    const dispatch = useDispatch();
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event: any) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <FlexBetween>
                    <IconButton onClick={() => props.setIsSidebarOpen(!props.isSidebarOpen)}><List /></IconButton>

                    <FlexBetween borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
                        <InputBase placeholder="Search..." />
                        <IconButton onClick={() => alert("Search")}><Search /></IconButton>
                    </FlexBetween>
                </FlexBetween>

                <FlexBetween gap="1.5rem">
                    <IconButton onClick={() => dispatch(setMode())}>
                        {
                            theme.palette.mode === 'dark' ? (
                                <MoonFill style={{ fontSize: "25px" }} />
                            ) : (
                                <SunFill style={{ fontSize: "25px" }} />
                            )
                        }
                    </IconButton>

                    <IconButton onClick={() => alert("Settings page")}><GearFill style={{ fontSize: "25px" }} /></IconButton>

                    <FlexBetween>
                        <Button onClick={handleClick} sx={{ display: "flex", justifyContent: "space-beteween", alignItems: "center", textTransform: "none", gap: "1rem" }}>
                            <Box
                                component="img"
                                alt="profile"
                                src={profileImage}
                                height="32px"
                                width="32px"
                                borderRadius="50%"
                                sx={{ objectFit: "cover" }}
                            />
                            <Box textAlign="left">
                                <Typography fontFamily="bold" fontSize="0.9rem" sx={{ color: theme.palette.secondary.main[100] }}>{props.user?.name}</Typography>
                                <Typography fontSize="0.8rem" sx={{ color: theme.palette.secondary.main[200] }}>{props.user?.occupation}</Typography>
                            </Box>
                            <CaretDownFill style={{ color: theme.palette.secondary.main[300], fontSize: "25px" }} />
                        </Button>
                        <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                            <MenuItem></MenuItem>
                        </Menu>
                    </FlexBetween>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
}