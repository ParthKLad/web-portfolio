import React, { useContext } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Footer = () => {
    const { themeType } = useContext(ThemeContext);
    const year = new Date().getFullYear();

    const pipelineSteps = [
        { name: 'VS Code', icon: '💻', desc: 'cry here' },
        { name: 'Git', icon: '📦', desc: 'blame past me' },
        { name: 'GitHub', icon: '🐙', desc: 'yeet to cloud' },
        { name: 'Netlify', icon: '🚀', desc: 'pray it works' },
    ];

    const terminalLines = [
        { color: 'comment', text: '# The behind-the-scenes chaos' },
        { color: 'comment', text: '# ============================' },
        { color: 'blank', text: '' },
        { color: 'step', prefix: '1.', icon: '💻', label: 'Suffering', desc: 'Wrestling with React until it cooperates' },
        { color: 'blank', text: '' },
        { color: 'step', prefix: '2.', icon: '📦', label: 'Covering My Tracks', desc: 'git commit -m "fixed it" (narrator: he didn\'t)' },
        { color: 'blank', text: '' },
        { color: 'step', prefix: '3.', icon: '🐙', label: 'Yeet to Cloud', desc: 'Force push and hope GitHub forgives me' },
        { color: 'blank', text: '' },
        { color: 'step', prefix: '4.', icon: '🚀', label: 'Fingers Crossed', desc: 'Netlify does its thing (usually works first try... jk)' },
        { color: 'blank', text: '' },
        { color: 'comment', text: '# ──────────────────────────────────' },
        { color: 'status', text: '# Status: ✅ somehow working @ parthlad.netlify.app' },
    ];

    const isDark = themeType === 'dark';
    const colors = {
        pink:   isDark ? '#ff79c6' : '#c2185b',
        yellow: isDark ? '#f1fa8c' : '#ca8a04',
        cyan:   isDark ? '#8be9fd' : '#0277bd',
        green:  isDark ? '#50fa7b' : '#2e7d32',
        purple: isDark ? '#bd93f9' : '#7c3aed',
        fg:     isDark ? '#f8f8f2' : '#333',
        comment:isDark ? '#6272a4' : '#888',
        border: isDark ? '#44475a' : '#ddd',
    };

    return (
        <Box
            component="footer"
            sx={{ mt: 6, pb: 3, fontFamily: '"Fira Code", monospace' }}
        >
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{ p: 3 }}>

                    {/* Terminal header */}
                    <Typography sx={{
                        fontFamily: '"Fira Code", monospace',
                        fontSize: '14px',
                        textAlign: 'center',
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                    }}>
                        <span style={{ color: colors.pink }}>$</span>
                        <span style={{ color: colors.yellow }}>cat</span>
                        <span style={{ color: colors.fg }}>.github/workflows/</span>
                        <span style={{ color: colors.cyan }}>deploy.yml</span>
                    </Typography>

                    {/* Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography sx={{
                            fontFamily: '"Fira Code", monospace',
                            fontSize: '12px',
                            textAlign: 'center',
                            color: colors.green,
                            mb: 2,
                            animation: 'pulse 2s ease-in-out infinite',
                            '@keyframes pulse': {
                                '0%, 100%': { opacity: 1 },
                                '50%': { opacity: 0.6 },
                            },
                        }}>
                            # 🔄 how this magic happens (spoiler: it's not magic)
                        </Typography>
                    </motion.div>

                    {/* Pipeline steps */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: 1,
                        py: 2,
                        px: 1,
                    }}>
                        {pipelineSteps.map((step, index) => (
                            <React.Fragment key={step.name}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.4, type: 'spring', stiffness: 200 }}
                                    whileHover={{ y: -6, scale: 1.05 }}
                                >
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        p: 1.5,
                                        minWidth: '80px',
                                        border: `2px solid ${colors.cyan}`,
                                        borderRadius: '8px',
                                        cursor: 'default',
                                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            borderColor: colors.green,
                                            boxShadow: isDark
                                                ? '0 4px 16px rgba(80, 250, 123, 0.3)'
                                                : '0 4px 16px rgba(46, 125, 50, 0.3)',
                                        },
                                    }}>
                                        <Typography sx={{ fontSize: '28px', mb: 0.5 }}>{step.icon}</Typography>
                                        <Typography sx={{
                                            fontFamily: '"Fira Code", monospace',
                                            fontSize: '11px',
                                            fontWeight: 'bold',
                                            color: colors.cyan,
                                        }}>
                                            {step.name}
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: '"Fira Code", monospace',
                                            fontSize: '9px',
                                            color: colors.comment,
                                            mt: 0.5,
                                        }}>
                                            {step.desc}
                                        </Typography>
                                    </Box>
                                </motion.div>

                                {index < pipelineSteps.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        whileInView={{ opacity: 1, scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.2, duration: 0.3 }}
                                    >
                                        <Typography sx={{
                                            fontFamily: '"Fira Code", monospace',
                                            fontSize: '18px',
                                            color: colors.green,
                                            mx: 0.5,
                                            animation: 'flow 1.2s ease-in-out infinite',
                                            animationDelay: `${index * 0.3}s`,
                                            '@keyframes flow': {
                                                '0%, 100%': { transform: 'translateX(0)', opacity: 0.5 },
                                                '50%': { transform: 'translateX(6px)', opacity: 1 },
                                            },
                                        }}>
                                            →
                                        </Typography>
                                    </motion.div>
                                )}
                            </React.Fragment>
                        ))}
                    </Box>

                    {/* Terminal code block */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <Box sx={{
                            mt: 2,
                            p: 2,
                            borderRadius: '8px',
                            border: `1px solid ${colors.border}`,
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0, left: 0, right: 0,
                                height: '2px',
                                background: isDark
                                    ? 'linear-gradient(90deg, #ff79c6, #8be9fd, #50fa7b, #f1fa8c)'
                                    : 'linear-gradient(90deg, #c2185b, #0277bd, #2e7d32, #ca8a04)',
                                animation: 'shimmer 3s linear infinite',
                                backgroundSize: '200% 100%',
                                '@keyframes shimmer': {
                                    '0%': { backgroundPosition: '0% 0%' },
                                    '100%': { backgroundPosition: '200% 0%' },
                                },
                            },
                        }}>
                            {terminalLines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.02, duration: 0.2 }}
                                >
                                    {line.color === 'blank' ? (
                                        <Box sx={{ height: '0.8em' }} />
                                    ) : line.color === 'step' ? (
                                        <Typography component="div" sx={{
                                            fontFamily: '"Fira Code", monospace',
                                            fontSize: '11px',
                                            lineHeight: 1.8,
                                        }}>
                                            <span style={{ color: colors.purple }}>{line.prefix}</span>
                                            {' '}
                                            <span style={{ color: colors.fg }}>{line.icon} {line.label}</span>
                                            <br />
                                            <span style={{ color: colors.comment }}>{'   └─ '}</span>
                                            <span style={{ color: colors.cyan }}>{line.desc}</span>
                                        </Typography>
                                    ) : (
                                        <Typography component="div" sx={{
                                            fontFamily: '"Fira Code", monospace',
                                            fontSize: '11px',
                                            lineHeight: 1.8,
                                            color: line.color === 'status' ? colors.green : colors.comment,
                                        }}>
                                            {line.text}
                                        </Typography>
                                    )}
                                </motion.div>
                            ))}
                        </Box>
                    </motion.div>

                    {/* Footer bottom */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                    >
                        <Box sx={{
                            mt: 2,
                            pt: 2,
                            borderTop: `1px solid ${colors.border}`,
                            textAlign: 'center',
                        }}>
                            <Typography component="pre" sx={{
                                fontFamily: '"Fira Code", monospace',
                                fontSize: '11px',
                                color: colors.comment,
                                margin: 0,
                                lineHeight: 1.8,
                            }}>
                                <span style={{ color: colors.pink }}>$</span>
                                <span style={{ color: colors.fg }}> echo "</span>
                                <span style={{ color: colors.cyan }}>It works on my machine. You're welcome.</span><span style={{ color: colors.cyan }}> Made by</span>
                                <span style={{ color: colors.green }}> Parth</span>
                                <span style={{ color: colors.fg }}>"</span>
                                <span style={{ color: colors.comment }}> © {year}</span>
                            </Typography>
                        </Box>
                    </motion.div>

                </Paper>
            </Container>
        </Box>
    );
};

export default Footer;
