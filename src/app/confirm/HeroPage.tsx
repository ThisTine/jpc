import {
  Box,
  Container,
  createTheme,
  ThemeProvider,
  Typography
} from "@mui/material";
import FormBg from "@/assets/form-background.svg";
import {ibm } from "@/utils/fonts";
import React, {FC, ReactNode} from "react";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ibm.style.fontFamily,
      textTransform: "none",
      fontSize: "16px",
    },
  },
});

const HeroPage:FC<{children:ReactNode}> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: `url(${FormBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingX: "24px",
          paddingTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "120px",
          minHeight: "100vh",
          "@media (min-width: 768px)": {
            paddingX: "4rem",
            paddingTop: "50px",
          },
          "@media (min-width: 1440px)": {
            paddingX: "6rem",
          },
          "@media (min-width: 1920px)": {
            paddingX: "40rem",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            // minHeight: "100vh",
            width: "100%",
            maxWidth: "1440px",
            justifyContent: "center",
            paddingY: "3rem",
            paddingX: "1rem",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "2px solid #A5CE89",
            paddingBottom: "7.5rem",
          }}
        >

          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <img src="/logo.png"  alt="jpc-logo"/>
            {children}
          </Box>
        </Box>
      </Box>

    </ThemeProvider>
  );

};

export default HeroPage;
