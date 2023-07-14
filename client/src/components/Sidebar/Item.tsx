import { ReactNode } from "react";

import './_style.scss';

interface itemProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    icon?: ReactNode,
    name?: string,
    className?: string,
    active?: boolean
}

export default function Item(props: itemProps) {
    return (
        <li className={"sidebar-menu-item " + props.className}>
            <button onClick={props.onClick}>
                <i className="icon">{props.icon}</i>
                <span>{props.name}</span>
            </button>
        </li>
    );
}