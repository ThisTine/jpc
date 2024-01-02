import React, {FC, useEffect, useState} from "react";
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
  Box, Button,
  Container,
  createTheme,
  ThemeProvider,
  Typography
} from "@mui/material";
import FormBg from "@/assets/form-background.svg";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {ibm, ibmBold} from "@/utils/fonts";
import {PersonalInfoFormData} from "@/app/confirm/page";
import {RiErrorWarningLine} from "react-icons/ri";

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
  const [file,setFile] = useState<File | null>(null);
  const [isUploaded,setIsUploaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
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
      stayDate: [],
      goBackTransportation: "",
      isStayProof: "",
    },
    resolver: zodResolver(personalInfoData),
  });
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
      return <Payment form={form} file={file} setFile={setFile} isUploaded={isUploaded} setIsUploaded={setIsUploaded} />;
    case 6:
      return <SuccessPage/>;
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
  const sendData = ()=>{
    const formData = new FormData();
    if(file){
      formData.append("image", file, file?.name);
    }
    const data = form.getValues();
    const keys = Object.keys(data);
    for(let k of keys){
      formData.append(k, data[k as keyof typeof data].toString() );
    }
    return  fetch(`api/register/personalInfo?emailToken=${token}`,{method:"post",body: formData});
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={form.handleSubmit(v=>{
          if(currentStep !== 5){
            setCurrentStep(s=>s+1);
          }else {
            setIsLoading(true);
            sendData()
              .then((res)=>{
                if(res.ok){
                  setCurrentStep(6);
                }else{
                  throw new Error("Error");
                }
              }).catch(e=>{
                setCurrentStep(7);
              })
              .finally(()=>setIsLoading(false));
          }


        },(v)=>{
          let isok = false;


          if(currentStep === 1){
            const step1Data: string[] = ['fullname','nicknameTh','nicknameEn'
              ,'idCard','shirtSize','birthDate','address','bloodType','religion','medic','allergyFood',
            ] as (keyof PersonalInfoFormData)[];
            isok = Object.keys(v).filter(x=> step1Data.includes(x)).length === 0;
          }

          if(currentStep === 2){
            const step2Data: string[]= [
              'parentName','parentPhone','relationship','emergencyPhone','emergencyName','isStay'
            ] as (keyof PersonalInfoFormData)[];
            isok = Object.keys(v).filter(x=> step2Data.includes(x)).length === 0;
          }

          if(currentStep === 3){
            if(form.getValues().isStay === "ต้องการ"){
              isok = Object.keys(v).filter(x=> x === "stayDate").length === 0;
            }else {
              isok = Object.keys(v).filter(x=> x === "goBackTransportation").length === 0;
            }
          }

          if(currentStep === 4){
            isok = Object.keys(v).filter(x=> x === "isStayProof" as (keyof PersonalInfoFormData)).length === 0;
          }


          if(isok){
            form.clearErrors();
            setCurrentStep(currentStep + 1);
          }
          window.scrollTo(0, 0);


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

            <Button
              variant="contained"
              className="bg-[#2D73AE]"
              type="submit"
              disabled={(isLoading || (currentStep === 5 && (!isUploaded || !file)))}
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
                {currentStep === 5 ? "ส่งข้อมูล" : "ถัดไป"}
              </Typography>
              { isLoading ? <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg> :
                <FaChevronRight/> }
            </Button>
          </Box>
        ) : null}
      </Box>
    </ThemeProvider>
  );
};
export default PersonalInfoPage;
