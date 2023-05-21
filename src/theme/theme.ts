import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#000000",
            light: "#ffffff",
            dark: "#000000",
        },
        secondary: {
            main: "#7AB259",
        },
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: "lg",
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1rem",
                    padding: "0.5rem",
                },
            },
            defaultProps: {
                variant: "contained",
                color: "primary",
                // disableRipple: true
            },
        },
    },
});
