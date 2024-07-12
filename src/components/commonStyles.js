// commonStyles.js
const boxStyles = (theme, isMobile) => ({
    width: "100%",
    maxWidth: 1200,
    p: theme.spacing(isMobile ? 2 : 5),
    backgroundColor: theme.palette.mode === "dark" ? "rgb(36, 36, 36)" : "rgb(255, 255, 255)",
    color: theme.palette.mode === "dark" ? "rgb(236, 243, 236)" : "rgb(36, 36, 36)",
    textAlign: "left",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3]
});

export default boxStyles;
