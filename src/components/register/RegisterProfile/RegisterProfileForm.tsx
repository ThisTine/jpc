"use client";

import {Stack, StackProps, TextField, Typography} from "@mui/material";
import {FormProvider, useForm} from "react-hook-form";
import {z} from "zod";
import RegisterLocalStorage from "../RegisterLocalStorage";
import {registerProfileFormData} from "@/share/validation/formData";

export interface RegisterProfileFormData
  extends z.infer<typeof registerProfileFormData> {}

export interface RegisterProfileProps extends StackProps {}

export default function RegisterProfile(props: RegisterProfileProps) {
  const form = useForm<RegisterProfileFormData>({
    defaultValues: {
      name: "",
      nickName: "",
      phone: "",
      email: "",
      school: "",
      educationLevel: "",
      dicease: "",
    },
  });

  return (
    <FormProvider {...form}>
      <Stack width="100%" gap={2} {...props}>
        <Typography
          fontSize="24px"
          color="#2D73AE"
          sx={{
            alignSelf: "center",
            my: "1rem",
          }}
        >
          ข้อมูลส่วนตัว
        </Typography>
        <Stack width="100%">
          <Typography className="text-lg">ชื่อ - นามสกุล</Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="ชื่อ - นามสกุล"
            {...form.register("name")}
          />
        </Stack>
        <Stack width="100%">
          <Typography className="text-lg">ชื่อเล่น</Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="ชื่อเล่น"
            {...form.register("nickName")}
          />
        </Stack>
        <Stack width="100%">
          <Typography className="text-lg">เบอร์ติดต่อ</Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="เบอร์ติดต่อ"
            // component={TextFieldMasked}
            {...form.register("phone")}
          />
        </Stack>
        <Stack width="100%">
          <Typography className="text-lg">อีเมล</Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="ใส่อีเมลของคุณ"
            {...form.register("email")}
          />
        </Stack>

        <Stack width="100%">
          <Typography className="text-lg">สถาบันการศึกษา</Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="สถาบันการศึกษา"
            {...form.register("school")}
          />
        </Stack>

        <Stack width="100%">
          <Typography className="text-lg">ระดับการศึกษา</Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="ระดับการศึกษา"
            {...form.register("educationLevel")}
          />
        </Stack>

        <Stack width="100%">
          <Typography className="text-lg">
            โรคประจำตัว (หากไม่มีไม่ต้องตอบ)
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="ใส่โรคประจำตัวของคุณ"
            {...form.register("dicease")}
          />
        </Stack>
      </Stack>
      <RegisterLocalStorage store="registerProfileFormData" />
    </FormProvider>
  );
}
