/* eslint-disable indent */
"use client";
import FormBg from "@/assets/form-background.svg";
import RegisterConsent from "@/components/register/RegisterConsent/RegisterConsent";
import RegisterProfile, {
  RegisterProfileFormData,
} from "@/components/register/RegisterProfile/RegisterProfileForm";
import RegisterQuestion, {
  RegisterQuestionFormData,
} from "@/components/register/RegisterQuestion/RegisterQuestion";
import RegisterStepper from "@/components/register/RegisterStepper";
import RegisterSubmitter, {
  validators,
} from "@/components/register/RegisterSubmitter";
import RegisterTest, {
  RegisterTestFormData,
  isAgree,
} from "@/components/register/RegisterTest/RegisterTest";
import RegisterTitle from "@/components/register/RegisterTitle/RegisterTitle";
import { ibm, ibmBold } from "@/utils/fonts";
import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegCheckCircle,
} from "react-icons/fa";
import { useSnapshot } from "valtio";

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
  const param = useSearchParams();
  const [currentStep, setCurrentStep] = React.useState(() =>
    parseInt(param.get("step") ?? "1")
  );

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
            <Typography
              sx={{
                mt: "1rem",
                fontSize: "36px",
                fontFamily: ibmBold.style.fontFamily,
                fontWeight: "normal",
              }}
            >
              รอผลการยืนยันในอีเมลของเพื่อน ๆ เลยครับ
            </Typography>
              <Typography sx={{fontSize:"20px"}}>
                  ถ้าเพื่อน ๆ ไม่ได้รับอีเมล กรุณาตรวจสอบในในหมวดหมู่ สแปม หรือ ถังขยะ หรือติดต่อเราได้ที่ Facebook หรือ Instragram ของเราได้เลยนะครับ
              </Typography>
              <Typography>
                 ในกรณีที่อีเมลที่เพื่อน ๆ ได้รับติด อยู่ในหมวดหมู่ สแปม กรุณากดนำอีเมลออกจากสแปมเพื่อรับข้อมูลข่าวสารใหม่ ๆ จาก JPC ในอนาคตด้วยนะครับ
              </Typography>
          </Box>
        );
    }
  };

  const { handleSubmitProfile, handleSubmitQuestion, handleSubmitTest } =
    useSnapshot(validators);
  const { agree_val } = useSnapshot(isAgree);

  useEffect(() => {
    window.history.replaceState(
      {},
      "",
      `/register?step=${currentStep.toString()}`
    );
  }, [currentStep]);

  const validatorElements = [
    <form
      key="handleSubmitProfile"
      onSubmit={handleSubmitProfile?.((formData) => {
        console.log(formData);
        setCurrentStep((currentStep) => currentStep + 1);
        window.scrollTo(0, 0);
      })}
    >
      <button
        type="submit"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "none",
          background: "#2D73AE",
          color: "white",
          width: "150px",
          paddingTop: "0.7rem",
          paddingBottom: "0.7rem",
          borderRadius: "12px",
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
      </button>
    </form>,
    <form
      key="handleSubmitQuestion"
      onSubmit={handleSubmitQuestion?.(() => {
        setCurrentStep((currentStep) => currentStep + 1);
        window.scrollTo(0, 0);
      })}
    >
      <button
        type="submit"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "none",
          background: "#2D73AE",
          color: "white",
          width: "150px",
          paddingTop: "0.7rem",
          paddingBottom: "0.7rem",
          borderRadius: "12px",
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
      </button>
    </form>,
    <form
      key="handleSubmitTest"
      onSubmit={handleSubmitTest?.(() => {
        const question = JSON.parse(
          localStorage.getItem("registerQuestion")!
        ) as RegisterQuestionFormData;
        const profile = JSON.parse(
          localStorage.getItem("registerProfileFormData")!
        ) as RegisterProfileFormData;
        const test = JSON.parse(
          localStorage.getItem("registerTest")!
        ) as RegisterTestFormData;

        const data = {
          ...profile,
          ...question,
          ...test,
          join_date: question.join_date.filter((date) => date != null),
        };

        fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        setCurrentStep((currentStep) => currentStep + 1);
        window.scrollTo(0, 0);

        // clear all localStorage
        localStorage.removeItem("registerQuestion");
        localStorage.removeItem("registerProfileFormData");
        localStorage.removeItem("registerTest");
      })}
    >
      <button
        type="submit"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "none",
          background: "#2D73AE",
          opacity: agree_val ? 1 : 0.5,
          transition: "opacity 0.3s ease-in-out",
          color: "white",
          width: "150px",
          paddingTop: "0.7rem",
          paddingBottom: "0.7rem",
          borderRadius: "12px",
        }}
        disabled={!agree_val}
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
      </button>
    </form>,
  ];

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
                    maxWidth: "700px",
                    width: "100%",
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
              width: "100%",
              justifyContent: "space-between",
              maxWidth: "1440px",
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
            {validatorElements[currentStep - 2] ?? null}
          </Box>
        ) : null}
      </Box>
    </ThemeProvider>
  );
};

export default Page;
