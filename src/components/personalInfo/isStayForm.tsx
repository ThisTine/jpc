import { PersonalInfoFormData } from "@/app/personalInfo/page";
import { ibmBold } from "@/utils/fonts";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import RegisterTestMultipleChoice from "../register/RegisterTest/RegisterTestMultipleChoice";
import RegisterTestSingleChoice from "../register/RegisterTest/RegisterTestSingleChoice";

interface IsStayFormProps {
  form: UseFormReturn<PersonalInfoFormData, any, undefined>;
}

const IsStayForm: React.FC<IsStayFormProps> = ({ form }) => {
  const isStay = form.getValues().isStay === "ต้องการ";
  return (
    <FormProvider {...form}>
      <Stack width="100%" gap={4}>
        {isStay ? (
          <Typography
            fontSize="28px"
            color="#2D73AE"
            sx={{
              fontFamily: ibmBold.style.fontFamily,
            }}
          >
            ต้องการค้างคืนโดยมีการจัดหาที่พักให้
          </Typography>
        ) : (
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography
              fontSize="28px"
              color="#D62431"
              sx={{
                fontFamily: ibmBold.style.fontFamily,
              }}
            >
              ไม่ต้องการ
            </Typography>
            <Typography
              fontSize="28px"
              color="#2D73AE"
              sx={{
                fontFamily: ibmBold.style.fontFamily,
              }}
            >
              ค้างคืนโดยมีการจัดหาที่พักให้
            </Typography>
          </Stack>
        )}
        <Typography
          color="#3E3C3D"
          sx={{
            fontSize: "22px",
            fontFamily: ibmBold.style.fontFamily,
          }}
        >
          {isStay ? "วันที่ต้องการพัก" : "วิธีการเดินทางกลับ"}
        </Typography>
        <Stack width="100%">
          {isStay ? (
            <RegisterTestMultipleChoice
              title=""
              name="stayDate"
              choices={[
                { id: "1", title: "11 มกราคม 2567" },
                { id: "2", title: "12 มกราคม 2567" },
                { id: "3", title: "13 มกราคม 2567" },
                { id: "4", title: "14 มกราคม 2567" },
              ]}
            />
          ) : (
            <RegisterTestSingleChoice
              title=""
              name="goBackTransportation"
              choices={[
                { id: "1", title: "เดินทางกลับเอง" },
                { id: "2", title: "ผู้ปกครองมารับ" },
                { id: "3", title: "อื่น ๆ" },
              ]}
            />
          )}
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default IsStayForm;
