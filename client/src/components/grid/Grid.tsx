import { ReactNode } from 'react';

import './_style.scss';

interface gridProps {
    children: ReactNode
}

export default function Grid(props: gridProps) {
    return (
        <div className="grid-container">
            {props.children}
        </div>
    );
}