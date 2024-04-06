import React from 'react';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const theme = useTheme();
    const year = new Date().getFullYear();
    const name = "Parth";

    // Inline style for the footer
    const footerStyle = {
        justifyContent: 'center',
        background: 'transparent',
        alignItems: 'center',
        color: theme.palette.text.primary,
        fontFamily: 'Arial, sans-serif',
        fontSize: '12.5px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    };

    return (
        <footer style={footerStyle}>
            <p>© {year} All rights reserved. Made with love ❤️ by {name}</p>
        </footer>
    );
};

export default Footer;
