import React, {FC, useEffect} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {personalInfoData} from "@/share/validation/personalInfoData";
import PersonalInfo1 from "@/components/personalInfo/personalInfo1";
import PersonalInfo2 from "@/components/personalInfo/personalInfo2";
import IsStayForm from "@/components/personalInfo/isStayForm";
import IsStayProofForm from "@/components/personalInfo/isStayProofForm";
import Payment from "@/components/personalInfo/payment";
import SuccessPage from "@/components/personalInfo/success";
import {
  Box,
  Container,
  createTheme,
  ThemeProvider,
  Typography
} from "@mui/material";
import FormBg from "@/assets/form-background.svg";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {ibm, ibmBold} from "@/utils/fonts";
import {PersonalInfoFormData} from "@/app/confirm/page";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ibm.style.fontFamily,
      textTransform: "none",
      fontSize: "16px",
    },
  },
});


const PersonalInfoPage:FC<{fullname:string,token:string}> = ({fullname,token}) => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const form = useForm<PersonalInfoFormData>({
    defaultValues: {
      fullname: fullname,
      nicknameEn: "",
      nicknameTh: "",
      idCard: "",
      birthDate: "",
      address: "",
      bloodType: "",
      religion: "",
      medic: "",
      allergyFood: "",
      shirtSize: "",
      parentName: "",
      parentPhone: "",
      relationship: "",
      emergencyName: "",
      emergencyPhone: "",
      isStay: "",
      stayDate: "",
      goBackTransportation: "",
      isStayProof: "",
    },
    resolver: zodResolver(personalInfoData),
  });
  useEffect(() => {
    console.log(form.formState);
  }, [form.formState]);
  const renderPersonalInfoStep = () => {
    switch (currentStep) {
    case 1:
      return <PersonalInfo1 form={form}/>;
    case 2:
      return <PersonalInfo2 form={form}/>;
    case 3:
      return <IsStayForm form={form}/>;
    case 4:
      return <IsStayProofForm form={form}/>;
    case 5:
      return <Payment/>;
    case 6:
      return <SuccessPage/>;
    default:
      return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={form.handleSubmit(v=>{

        },(v)=>{
          let isok = false;
          const step1Data: string[] = ['fullname','nicknameTh','nicknameEn'
            ,'idCard','shirtSize','birthDate','address','bloodType','religion','medic','allergyFood',
          ] as (keyof PersonalInfoFormData)[];

          if(currentStep === 1){
            isok = Object.keys(v).filter(x=> step1Data.includes(x)).length === 0;
          }

          if(isok){
            setCurrentStep(currentStep + 1);
            window.scrollTo(0, 0);
          }

        })}
        sx={{
          background: `url(${FormBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingX: "24px",
          paddingTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 0,
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
            width: "100%",
            maxWidth: "1440px",
            justifyContent: "center",
            paddingY: "3rem",
            paddingX: "1rem",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "2px solid #A5CE89",
            paddingBottom: "4rem",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {renderPersonalInfoStep()}
          </Container>
        </Box>

        {currentStep < 6 ? (
          <Box
            sx={{
              mt: "30px",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              maxWidth: "1440px",
              marginBottom: "2rem",
            }}
          >
            {currentStep != 1 ? (
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
                <FaChevronLeft/>
                <Typography
                  sx={{
                    ml: "0.5rem",
                    fontFamily: ibmBold.style.fontFamily,
                  }}
                >
                  ย้อนกลับ
                </Typography>
              </Box>
            ) : (
              <Box/>
            )}

            <Box
              component="button"
              type="submit"
              onClick={() => {

              }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "none",
                color: "white",
                backgroundColor: "#2D73AE",
                width: "150px",
                py: "0.7rem",
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
              <FaChevronRight/>
            </Box>
          </Box>
        ) : null}
      </Box>
    </ThemeProvider>
  );
};
export default PersonalInfoPage;
