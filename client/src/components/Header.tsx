import React, {useState} from 'react';
import { Typography, Box, useTheme } from '@mui/material';

interface headerProps {
    title: string,
    subtitle?: string,
}

export default function Header(props: headerProps) {
    const theme = useTheme();

    return(
        <div>
            <h3>
                {props.title}
            </h3>
            <h5>
                {props.subtitle}
            </h5>
        </div>
    );
}