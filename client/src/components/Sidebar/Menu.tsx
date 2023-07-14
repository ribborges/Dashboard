import React, { useState, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from "react-router";
import { CaretRightFill, CaretLeftFill } from "react-bootstrap-icons";

import { getUserResponse } from "../../state/types";
import profileImage from "../../assets/profile.webp";

import './_style.scss';

interface navbarProps {
    icon: string,
    title: string,
    user: getUserResponse | undefined,
    isNonMobile: boolean,
    drawerWidth: string,
    isSidebarOpen: boolean,
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
    children?: ReactNode
}

export default function Menu(props: navbarProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <nav className={isExpanded ? "sidebar" : "sidebar collapsed"}>
            <div className="sidebar-head">
                <img src={props.icon} alt="" />
                <h2 className="sidebar-title">{props.title}</h2>
                <button className="toggle-btn" type="button" onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? <CaretLeftFill /> : <CaretRightFill />}</button>
            </div>

            <div className="sidebar-menu">
                <ul>
                    {props.children}
                </ul>
            </div>
        </nav>
    );
}