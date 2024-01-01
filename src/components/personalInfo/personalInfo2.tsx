import { ibmBold } from "@/utils/fonts";
import {
  FormControl,
  FormHelperText,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import RegisterTestSingleChoice from "../register/RegisterTest/RegisterTestSingleChoice";
import { PersonalInfoFormData } from "@/app/personalInfo/page";
import TextFieldMasked from "../register/RegisterProfile/RegisterProfilePhone";

interface PersonalInfoProps {
  form: UseFormReturn<PersonalInfoFormData, any, undefined>;
}

const PersonalInfo2: React.FC<PersonalInfoProps> = ({ form }) => {
  return (
    <FormProvider {...form}>
      <Stack width="100%" gap={4}>
        <Typography
          fontSize="24px"
          color="#2D73AE"
          sx={{
            alignSelf: "center",
            my: "1rem",
            fontFamily: ibmBold.style.fontFamily,
          }}
        >
          ข้อมูลส่วนตัว
        </Typography>
        <Typography color="#3E3C3D">
          Part 2: ข้อมูลเกี่ยวกับผู้ปกครอง
        </Typography>
        <Stack width="100%">
          <Typography className="text-lg">🌟 ชื่อผู้ปกครอง</Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="กรุณาใส่คำตอบ*"
            error={!!form.formState.errors.parentName}
            helperText={form.formState.errors.parentName?.message}
            {...form.register("parentName")}
          />
        </Stack>
        <Stack width="100%">
          <FormControl fullWidth variant="outlined">
            <Typography className="text-lg">🌟 เบอร์โทรผู้ปกครอง</Typography>
            <OutlinedInput
              fullWidth
              placeholder="0XX-XXX-XXXX"
              error={!!form.formState.errors.parentPhone}
              inputComponent={TextFieldMasked as any}
              {...form.register("parentPhone")}
            />
            <FormHelperText error={!!form.formState.errors.parentPhone}>
              {form.formState.errors.parentPhone?.message}
            </FormHelperText>
          </FormControl>
        </Stack>
        <Stack width="100%">
          <Typography className="text-lg">
            🌟 มีความเกี่ยวข้องกับผู้สมัครเป็น
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="กรุณาใส่คำตอบ*"
            error={!!form.formState.errors.relationship}
            helperText={form.formState.errors.relationship?.message}
            {...form.register("relationship")}
          />
        </Stack>
        <Stack width="100%">
          <Typography className="text-lg">
            🌟 ชื่อบุคคลที่สามารถติดต่อได้ (กรณีฉุกเฉิน)
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="กรุณาใส่คำตอบ*"
            error={!!form.formState.errors.emergencyName}
            helperText={form.formState.errors.emergencyName?.message}
            {...form.register("emergencyName")}
          />
        </Stack>
        <Stack width="100%">
          <FormControl fullWidth variant="outlined">
            <Typography className="text-lg"> 🌟 เบอร์ติดต่อฉุกเฉิน</Typography>
            <OutlinedInput
              fullWidth
              placeholder="0XX-XXX-XXXX"
              error={!!form.formState.errors.emergencyPhone}
              inputComponent={TextFieldMasked as any}
              {...form.register("emergencyPhone")}
            />
            <FormHelperText error={!!form.formState.errors.emergencyPhone}>
              {form.formState.errors.emergencyPhone?.message}
            </FormHelperText>
          </FormControl>
        </Stack>
        <Stack width="100%">
          <RegisterTestSingleChoice
            title="🌟 ต้องการค้างคืนโดยมีการจัดหาที่พักให้หรือไม่ (200฿/คืน)"
            name="isStay"
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

export default PersonalInfo2;
