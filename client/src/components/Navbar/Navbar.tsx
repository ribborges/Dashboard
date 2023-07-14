import { Input } from "../../components/input/Input";

import { SunFill, MoonFill, Search, GearFill } from "react-bootstrap-icons";

import './_style.scss';

import profileImage from "../../assets/profile.webp";
import { Button } from "../../components/input/Button";

import { getUserResponse } from "../../state/types";
import Userid from "./Userid";

interface navbarProps {
    user: getUserResponse | undefined,
}

export default function Navbar(props: navbarProps) {
    return (
        <div className="navbar" >
            <div className="search-box">
                <Input icon={<Search />} type="search" placeholder="Search..." />
            </div>

            <div className="menu">
                <Button><SunFill /></Button>
                <Button><GearFill /></Button>
                <Userid profileImage={profileImage} name={props.user?.name} occupation={props.user?.occupation}></Userid>
            </div>
        </div >
    );
}