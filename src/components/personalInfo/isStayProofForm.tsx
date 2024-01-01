import { PersonalInfoFormData } from "@/app/personalInfo/page";
import { ibmBold } from "@/utils/fonts";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import RegisterTestMultipleChoice from "../register/RegisterTest/RegisterTestMultipleChoice";
import RegisterTestSingleChoice from "../register/RegisterTest/RegisterTestSingleChoice";

interface IsStayProofFormProps {
  form: UseFormReturn<PersonalInfoFormData, any, undefined>;
}

const IsStayProofForm: React.FC<IsStayProofFormProps> = ({ form }) => {
  return (
    <FormProvider {...form}>
      <Stack width="100%" gap={4} px={8}>
        <Stack>
          <Typography
            fontSize="28px"
            color="#2D73AE"
            sx={{
              fontFamily: ibmBold.style.fontFamily,
              textAlign: "center",
            }}
          >
            ต้องการใบยืนยันการเข้าค่าย JPC16 สำหรับการยื่นลาหรือไม่ ?
          </Typography>
          <Typography fontSize="18px" color="#666666" textAlign="center">
            (สามารถออกให้ได้หลังค่ายจบและน้องค่ายต้องเข้าค่ายครบสามวันเท่านั้น)
          </Typography>
        </Stack>
        <Stack width="100%">
          <RegisterTestSingleChoice
            title=""
            name="isStayProof"
            choices={[
              { id: "1", title: "ต้องการ" },
              { id: "2", title: "ไม่ต้องการ" },
            ]}
          />
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default IsStayProofForm;
