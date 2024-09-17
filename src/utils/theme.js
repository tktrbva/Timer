import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4287f5",
      contrastText: "black",
    },
    secondary: {
      main: "#2e225c",
      contrastText: "white",
    },
    //     background: {
    //       default: "#f5f5f5",
    //       paper: "#ffffff",
    //     },
    //     text: {
    //       primary: "#000000",
    //       secondary: "#555555",
    //     },
    //   },
    //   typography: {
    //     fontFamily: "Arial, sans-serif",
    //     h1: {
    //       fontSize: "2rem",
    //     },
  },
});

export default theme;
