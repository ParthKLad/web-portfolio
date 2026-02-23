import React, { useContext } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    const { themeType } = useContext(ThemeContext);
    const year = new Date().getFullYear();

    // Pipeline steps
    const pipelineSteps = [
        { name: 'VS Code', icon: '💻', desc: 'Write code' },
        { name: 'Git', icon: '📦', desc: 'Commit changes' },
        { name: 'GitHub', icon: '🐙', desc: 'Push to repo' },
        { name: 'Netlify', icon: '🚀', desc: 'Auto deploy' },
    ];

    return (
        <Box 
            component="footer" 
            sx={{ 
                mt: 6, 
                pb: 3,
                fontFamily: '"Fira Code", monospace',
            }}
        >
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{ p: 3 }}>
                    {/* Terminal-style header */}
                    <Typography 
                        sx={{ 
                            fontFamily: '"Fira Code", monospace',
                            fontSize: '14px',
                            textAlign: 'center',
                            mb: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1,
                        }}
                    >
                        <span style={{ color: themeType === 'dark' ? '#ff79c6' : '#c2185b' }}>$</span>
                        <span style={{ color: themeType === 'dark' ? '#f1fa8c' : '#ca8a04' }}>cat</span>
                        <span style={{ color: themeType === 'dark' ? '#f8f8f2' : '#333' }}>.github/workflows/</span>
                        <span style={{ color: themeType === 'dark' ? '#8be9fd' : '#0277bd' }}>deploy.yml</span>
                    </Typography>

                    {/* Description */}
                    <Typography 
                        sx={{ 
                            fontFamily: '"Fira Code", monospace',
                            fontSize: '12px',
                            textAlign: 'center',
                            color: themeType === 'dark' ? '#50fa7b' : '#2e7d32',
                            mb: 2,
                        }}
                    >
                        # 🔄 CI/CD Pipeline
                    </Typography>

                    {/* Pipeline visualization */}
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: 1,
                            py: 2,
                            px: 1,
                        }}
                    >
                        {pipelineSteps.map((step, index) => (
                            <React.Fragment key={step.name}>
                                <Box 
                                    sx={{ 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        alignItems: 'center',
                                        p: 1.5,
                                        minWidth: '80px',
                                        border: `2px solid ${themeType === 'dark' ? '#8be9fd' : '#0277bd'}`,
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: themeType === 'dark' ? '#50fa7b' : '#2e7d32',
                                            transform: 'translateY(-3px)',
                                            boxShadow: themeType === 'dark' 
                                                ? '0 4px 12px rgba(80, 250, 123, 0.3)'
                                                : '0 4px 12px rgba(46, 125, 50, 0.3)',
                                        },
                                    }}
                                >
                                    <Typography sx={{ fontSize: '28px', mb: 0.5 }}>{step.icon}</Typography>
                                    <Typography 
                                        sx={{ 
                                            fontFamily: '"Fira Code", monospace',
                                            fontSize: '11px',
                                            fontWeight: 'bold',
                                            color: themeType === 'dark' ? '#8be9fd' : '#0277bd',
                                        }}
                                    >
                                        {step.name}
                                    </Typography>
                                    <Typography 
                                        sx={{ 
                                            fontFamily: '"Fira Code", monospace',
                                            fontSize: '9px',
                                            color: themeType === 'dark' ? '#6272a4' : '#888',
                                            mt: 0.5,
                                        }}
                                    >
                                        {step.desc}
                                    </Typography>
                                </Box>
                                {index < pipelineSteps.length - 1 && (
                                    <Typography 
                                        sx={{ 
                                            fontFamily: '"Fira Code", monospace',
                                            fontSize: '18px',
                                            color: themeType === 'dark' ? '#50fa7b' : '#2e7d32',
                                            mx: 0.5,
                                        }}
                                    >
                                        →
                                    </Typography>
                                )}
                            </React.Fragment>
                        ))}
                    </Box>

                    {/* Detailed pipeline description */}
                    <Box 
                        sx={{ 
                            mt: 2, 
                            p: 2, 
                            borderRadius: '8px',
                            border: `1px solid ${themeType === 'dark' ? '#333' : '#ddd'}`,
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '2px',
                                background: themeType === 'dark' 
                                    ? 'linear-gradient(90deg, #ff79c6, #8be9fd, #50fa7b, #f1fa8c)'
                                    : 'linear-gradient(90deg, #c2185b, #0277bd, #2e7d32, #ca8a04)',
                            },
                        }}
                    >
                        <Typography 
                            component="pre"
                            sx={{ 
                                fontFamily: '"Fira Code", monospace',
                                fontSize: '11px',
                                color: themeType === 'dark' ? '#f8f8f2' : '#333',
                                whiteSpace: 'pre-wrap',
                                margin: 0,
                                lineHeight: 1.8,
                            }}
                        >
                            <span style={{ color: themeType === 'dark' ? '#6272a4' : '#888' }}># How this site is built & updated</span>
                            {'\n'}
                            <span style={{ color: themeType === 'dark' ? '#6272a4' : '#888' }}># ==================================</span>
                            {'\n\n'}
                            <span style={{ color: themeType === 'dark' ? '#bd93f9' : '#7c3aed' }}>1.</span> <span style={{ color: themeType === 'dark' ? '#f8f8f2' : '#333' }}>💻 Development</span>
                            {'\n   └─ '}
                            <span style={{ color: themeType === 'dark' ? '#8be9fd' : '#0277bd' }}>Code written in VS Code with React.js + MUI</span>
                            {'\n\n'}
                            <span style={{ color: themeType === 'dark' ? '#bd93f9' : '#7c3aed' }}>2.</span> <span style={{ color: themeType === 'dark' ? '#f8f8f2' : '#333' }}>📦 Version Control</span>
                            {'\n   └─ '}
                            <span style={{ color: themeType === 'dark' ? '#8be9fd' : '#0277bd' }}>Changes staged, committed, and pushed with Git</span>
                            {'\n\n'}
                            <span style={{ color: themeType === 'dark' ? '#bd93f9' : '#7c3aed' }}>3.</span> <span style={{ color: themeType === 'dark' ? '#f8f8f2' : '#333' }}>🐙 GitHub Repository</span>
                            {'\n   └─ '}
                            <span style={{ color: themeType === 'dark' ? '#8be9fd' : '#0277bd' }}>Push triggers Netlify webhook automatically</span>
                            {'\n\n'}
                            <span style={{ color: themeType === 'dark' ? '#bd93f9' : '#7c3aed' }}>4.</span> <span style={{ color: themeType === 'dark' ? '#f8f8f2' : '#333' }}>🚀 Netlify CI/CD</span>
                            {'\n   └─ '}
                            <span style={{ color: themeType === 'dark' ? '#8be9fd' : '#0277bd' }}>Builds and deploys to production in ~30 seconds</span>
                            {'\n\n'}
                            <span style={{ color: themeType === 'dark' ? '#6272a4' : '#888' }}># ──────────────────────────────────</span>
                            {'\n'}
                            <span style={{ color: themeType === 'dark' ? '#6272a4' : '#888' }}># Status: </span>
                            <span style={{ color: themeType === 'dark' ? '#50fa7b' : '#2e7d32' }}>✅ LIVE</span>
                            <span style={{ color: themeType === 'dark' ? '#6272a4' : '#888' }}> @ </span>
                            <span style={{ color: themeType === 'dark' ? '#f1fa8c' : '#ca8a04' }}>parthlad.netlify.app</span>
                        </Typography>
                    </Box>

                    {/* Footer info */}
                    <Box 
                        sx={{ 
                            mt: 2, 
                            pt: 2, 
                            borderTop: `1px solid ${themeType === 'dark' ? '#44475a' : '#ddd'}`,
                            textAlign: 'center',
                        }}
                    >
                        <Typography 
                            component="pre"
                            sx={{ 
                                fontFamily: '"Fira Code", monospace',
                                fontSize: '11px',
                                color: themeType === 'dark' ? '#6272a4' : '#666',
                                margin: 0,
                                lineHeight: 1.8,
                            }}
                        >
                            <span style={{ color: themeType === 'dark' ? '#ff79c6' : '#c2185b' }}>$</span>
                            <span style={{ color: themeType === 'dark' ? '#f8f8f2' : '#333' }}> echo "</span>
                            <span style={{ color: themeType === 'dark' ? '#8be9fd' : '#0277bd' }}>Crafted with</span>
                            <span style={{ color: themeType === 'dark' ? '#ff79c6' : '#c2185b' }}> ❤️ </span>
                            <span style={{ color: themeType === 'dark' ? '#8be9fd' : '#0277bd' }}>&& lots of</span>
                            <span style={{ color: themeType === 'dark' ? '#f1fa8c' : '#ca8a04' }}> ☕ </span>
                            <span style={{ color: themeType === 'dark' ? '#8be9fd' : '#0277bd' }}>by</span>
                            <span style={{ color: themeType === 'dark' ? '#50fa7b' : '#2e7d32' }}> Parth Lad</span>
                            <span style={{ color: themeType === 'dark' ? '#f8f8f2' : '#333' }}>"</span>
                            <span style={{ color: themeType === 'dark' ? '#6272a4' : '#888' }}> # © {year}</span>
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default Footer;
