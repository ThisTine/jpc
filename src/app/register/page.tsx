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
import {useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegCheckCircle,
} from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { useSnapshot } from "valtio";
import {getIsClosedRegisterFrom} from "@/app/api/utils/getFormStatus";

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
  const route = useRouter();
  const [currentStep, setCurrentStep] = React.useState(() =>
    parseInt(param.get("step") ?? "1")
  );

  useLayoutEffect(() => {
    if(getIsClosedRegisterFrom() && route){
      route.replace("/close");
    }
  }, [route]);

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
      case 5:
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
            <Typography sx={{ fontSize: "20px" }}>
              ถ้าเพื่อน ๆ ไม่ได้รับอีเมล กรุณาตรวจสอบในในหมวดหมู่ สแปม หรือ
              ถังขยะ หรือติดต่อเราได้ที่ Facebook หรือ Instragram
              ของเราได้เลยนะครับ
            </Typography>
            <Typography>
              ในกรณีที่อีเมลที่เพื่อน ๆ ได้รับติดอยู่ในหมวดหมู่ สแปม
              กรุณากดนำอีเมลออกจากสแปมเพื่อรับข้อมูลข่าวสารใหม่ ๆ จาก JPC
              ในอนาคตด้วยนะครับ
            </Typography>
          </Box>
        );

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
              <RiErrorWarningLine size color="red" />
            </Box>
            <Typography
              sx={{
                mt: "1rem",
                fontSize: "50px",
                fontFamily: ibmBold.style.fontFamily,
              }}
            >
              Error occurred !
            </Typography>
            <Typography
              sx={{
                mt: "1rem",
                fontSize: "36px",
                fontFamily: ibmBold.style.fontFamily,
                fontWeight: "normal",
              }}
            >
              ขออภัย เรามีปัญหาในการบันทึกข้อมูล
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              กรุณาลองใหม่อีกครั้ง หรือติดต่อพวกเราผ่าน Facebook หรือ Instagram
              ได้เลยนะครับ
            </Typography>
            <button
              type="button"
              style={{
                marginTop: "2rem",
                width: "200px",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                borderRadius: "12px",
                color: "white",
                fontFamily: ibmBold.style.fontFamily,
                background: "#2D73AE",
              }}
              onClick={() => {
                setCurrentStep(1);
                window.scrollTo(0, 0);
              }}
            >
              ลองใหม่อีกครั้ง
            </button>
          </Box>
        );
    }
  };

  const { handleSubmitProfile, handleSubmitQuestion, handleSubmitTest } =
    useSnapshot(validators);
  const { agree_val } = useSnapshot(isAgree);
    const [isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true);

        fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then(() => {
            console.log("Register success");
            setCurrentStep(5);
            window.scrollTo(0, 0);
            localStorage.removeItem("registerQuestion");
            localStorage.removeItem("registerProfileFormData");
            localStorage.removeItem("registerTest");
          })
          .catch(() => {
            setCurrentStep(6);
            window.scrollTo(0, 0);
          }).finally(()=>{
              setIsLoading(false);
        });

        // clear all localStorage
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
        disabled={!agree_val || isLoading}
      >
          { isLoading ? <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg> : null}
        <Typography
          sx={{
            mr: "0.5rem",
            fontFamily: ibmBold.style.fontFamily,
          }}
        >
            {isLoading ? "กำลังส่งข้อมูล" : "ถัดไป"}
        </Typography>
          { !isLoading ? <FaChevronRight /> : null  }
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
