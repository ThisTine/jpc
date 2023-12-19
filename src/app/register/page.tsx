/* eslint-disable indent */
"use client";
import RegisterProfile from "@/components/register/RegisterProfile/RegisterProfileForm";
import RegisterQuestion from "@/components/register/RegisterQuestion/RegisterQuestion";
import RegisterStepper from "@/components/register/RegisterStepper";
import RegisterTest from "@/components/register/RegisterTest/RegisterTest";
import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import FormBg from "@/assets/form-background.svg";
import RegisterConsent from "@/components/register/RegisterConsent/RegisterConsent";
import { ibm, ibmBold } from "@/utils/fonts";
import RegisterTitle from "@/components/register/RegisterTitle/RegisterTitle";
import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegCheckCircle,
} from "react-icons/fa";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ibm.style.fontFamily,
      textTransform: "none",
      fontSize: "16px",
    },
  },
});

const Page = () => {
  const [currentStep, setCurrentStep] = React.useState(1);

  const renderRegisterStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <RegisterConsent
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return <RegisterProfile />;
      case 3:
        return <RegisterQuestion />;
      case 4:
        return <RegisterTest />;
      default:
        return (
          <Box
            sx={{
              minHeight: "80vh",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ width: "100px" }}>
              <FaRegCheckCircle size color="#61BF00" />
            </Box>
            <Typography
              sx={{
                mt: "1rem",
                fontSize: "50px",
                fontFamily: ibmBold.style.fontFamily,
              }}
            >
              Thank you!
            </Typography>
          </Box>
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: `url(${FormBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingX: "24px",
          paddingTop: "30px",
          paddingBottom: currentStep == 1 ? "30px" : "120px",
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
            justifyContent: "center",
            paddingY: "3rem",
            paddingX: "1rem",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "2px solid #A5CE89",
            "@media (min-width: 1024px)": {
              paddingX: "3rem",
            },
            "@media (min-width: 1440px)": {
              paddingX: "1rem",
            },
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {currentStep == 1 ? <RegisterTitle /> : null}
            {currentStep <= 4 ? (
              <Box
                my={1}
                sx={{
                  alignSelf: "center",
                  width: "100%",
                  "@media (min-width: 1024px)": {
                    width: "700px",
                  },
                }}
              >
                <RegisterStepper step={currentStep} />
              </Box>
            ) : null}
            {renderRegisterStep()}
          </Container>
        </Box>
        {currentStep != 1 && currentStep <= 4 ? (
          <Box
            sx={{
              mt: "50px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              onClick={() => {
                setCurrentStep(currentStep - 1);
                window.scrollTo(0, 0);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "none",
                backgroundColor: "white",
                color: "#2D73AE",
                width: "150px",
                py: "0.7rem",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: "#F5F5F5",
                  boxShadow: "none",
                },
              }}
            >
              <FaChevronLeft />
              <Typography
                sx={{
                  ml: "0.5rem",
                  fontFamily: ibmBold.style.fontFamily,
                }}
              >
                ย้อนกลับ
              </Typography>
            </Box>
            <Box
              onClick={() => {
                setCurrentStep(currentStep + 1);
                window.scrollTo(0, 0);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "none",
                backgroundColor: "#2D73AE",
                color: "white",
                width: "150px",
                py: "0.7rem",
                borderRadius: "12px",
                "&:hover": {
                  boxShadow: "none",
                },
              }}
            >
              <Typography
                sx={{
                  mr: "0.5rem",
                  fontFamily: ibmBold.style.fontFamily,
                }}
              >
                ถัดไป
              </Typography>
              <FaChevronRight />
            </Box>
          </Box>
        ) : null}
      </Box>
    </ThemeProvider>
  );
};

export default Page;
