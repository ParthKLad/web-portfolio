import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const theme = useTheme();
    const year = new Date().getFullYear();
    const name = "Parth"; 

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <footer style={{
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.text.primary,
            fontFamily: 'Arial, sans-serif',
            fontSize: '12px',
            padding: '1px 1px 0px 1px',
            // backgroundColor: theme.palette.background.default, // This line is commented out to remove background color
            borderBottom: `0px solid ${theme.palette.divider}`,
            display: 'flex',
            flexDirection: 'column',
            transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
            background: 'transparent',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.5s ease-out',
        }}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            

            <p>© {year} All rights reserved. Made with love ❤️ by {name}</p>
        </footer>
    );
};

export default Footer;

