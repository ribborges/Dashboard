import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Sidebar/Menu";
import Item from "../../components/Sidebar/Item";

import { HouseFill, CartFill, PersonFill, CardHeading, GlobeAmericas, PcDisplayHorizontal, CalendarEventFill, CalendarMonthFill, PieChartFill, ShieldFill, GraphUpArrow } from "react-bootstrap-icons";

import { useGetUserQuery } from "../../state/api";

import './_style.scss';

export default function Layout() {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const userID = useSelector((state: any) => state.global.userID);
    const { data } = useGetUserQuery(userID);
    const navigate = useNavigate();

    return (
        <div className="layout">
            <Menu
                icon="/icon.png"
                title="IntelliFLUX"
                user={data || undefined}
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            >
                <Item icon={<HouseFill />} name="Dashboard" onClick={() => navigate("/dashboard")} />
                <Item icon={<CartFill />} name="Products" onClick={() => navigate("/products")} />
                <Item icon={<PersonFill />} name="Customers" onClick={() => navigate("/custumers")} />
                <Item icon={<CardHeading />} name="Transactions" onClick={() => navigate("/transactions")} />
                <Item icon={<GlobeAmericas />} name="Geography" onClick={() => navigate("/geography")} />
                <Item icon={<PcDisplayHorizontal />} name="Overview" onClick={() => navigate("/overview")} />
                <Item icon={<CalendarEventFill />} name="Daily" onClick={() => navigate("/daily")} />
                <Item icon={<CalendarMonthFill />} name="Montly" onClick={() => navigate("/montly")} />
                <Item icon={<PieChartFill />} name="Breackdown" onClick={() => navigate("/breackdown")} />
                <Item icon={<ShieldFill />} name="Admin" onClick={() => navigate("/admin")} />
                <Item icon={<GraphUpArrow />} name="Performance" onClick={() => navigate("/performance")} />
            </Menu>

            <div className="layout-container">
                <Navbar user={data || undefined} />
                <div className="layout-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

/*
<Sidebar
                user={data || undefined}
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />

            <Box flexGrow={1}>
                <Navbar
                    user={data || undefined}
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Outlet />
            </Box>
*/