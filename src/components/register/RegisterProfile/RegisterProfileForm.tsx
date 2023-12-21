"use client";

import {
  FormControl,
  FormHelperText,
  Input,
  OutlinedInput,
  Stack,
  StackProps,
  TextField,
  Typography,
} from "@mui/material";
import { Form, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import RegisterLocalStorage from "../RegisterLocalStorage";
import { registerProfileFormData } from "@/share/validation/formData";
import { validators } from "../RegisterSubmitter";
import { zodResolver } from "@hookform/resolvers/zod";
import { ls } from "@/utils/misc";
import TextFieldMasked from "./RegisterProfilePhone";

export interface RegisterProfileFormData
  extends z.infer<typeof registerProfileFormData> {}

export interface RegisterProfileProps extends StackProps {}

export default function RegisterProfile(props: RegisterProfileProps) {
  const form = useForm<RegisterProfileFormData>({
    defaultValues: {
      name: ls("registerProfileFormData", "name") ?? "",
      nickName: ls("registerProfileFormData", "nickName") ?? "",
      phone: ls("registerProfileFormData", "phone") ?? "",
      email: ls("registerProfileFormData", "email") ?? "",
      school: ls("registerProfileFormData", "school") ?? "",
      educationLevel: ls("registerProfileFormData", "educationLevel") ?? "",
      dicease: ls("registerProfileFormData", "dicease") ?? "",
    },
    resolver: zodResolver(registerProfileFormData),
  });

  validators.registerHandler("handleSubmitProfile", form.handleSubmit);

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
            error={!!form.formState.errors.name}
            helperText={form.formState.errors.name?.message}
            {...form.register("name")}
          />
        </Stack>
        <Stack width="100%">
          <Typography className="text-lg">ชื่อเล่น</Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="ชื่อเล่น"
            error={!!form.formState.errors.nickName}
            helperText={form.formState.errors.nickName?.message}
            {...form.register("nickName")}
          />
        </Stack>
        <Stack width="100%">
          <FormControl fullWidth variant="outlined">
            <Typography className="text-lg">เบอร์ติดต่อ</Typography>
            <OutlinedInput
              fullWidth
              placeholder="0XX-XXX-XXXX"
              error={!!form.formState.errors.phone}
              inputComponent={TextFieldMasked as any}
              {...form.register("phone")}
            />
            <FormHelperText error={!!form.formState.errors.phone}>
              {form.formState.errors.phone?.message}
            </FormHelperText>
          </FormControl>
        </Stack>
        <Stack width="100%">
          <Typography className="text-lg">อีเมล</Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="ใส่อีเมลของคุณ"
            error={!!form.formState.errors.email}
            helperText={form.formState.errors.email?.message}
            {...form.register("email")}
          />
        </Stack>

        <Stack width="100%">
          <Typography className="text-lg">สถาบันการศึกษา</Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="สถาบันการศึกษา"
            error={!!form.formState.errors.school}
            helperText={form.formState.errors.school?.message}
            {...form.register("school")}
          />
        </Stack>

        <Stack width="100%">
          <Typography className="text-lg">ระดับการศึกษา</Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="ระดับการศึกษา"
            error={!!form.formState.errors.educationLevel}
            helperText={form.formState.errors.educationLevel?.message}
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
            error={!!form.formState.errors.dicease}
            helperText={form.formState.errors.dicease?.message}
            {...form.register("dicease")}
          />
        </Stack>
      </Stack>
      <RegisterLocalStorage store="registerProfileFormData" />
    </FormProvider>
  );
}
