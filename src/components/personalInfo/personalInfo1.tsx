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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import RegisterTestSingleChoice from "../register/RegisterTest/RegisterTestSingleChoice";
import { PersonalInfoFormData } from "@/app/confirm/page";
import ShirtChartSize from "@/assets/size-chart.png";
import Image from "next/image";
import dayjs from "dayjs";
import { RegisterProfileIdCard } from "@/components/register/RegisterProfile/RegisterProfileIdCard";

interface PersonalInfoProps {
  form: UseFormReturn<PersonalInfoFormData, any, undefined>;
}

const PersonalInfo1: React.FC<PersonalInfoProps> = ({ form }) => {
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
        <Typography color="#3E3C3D">Part 1: ข้อมูลเกี่ยวกับน้องๆ</Typography>
        <Stack width="100%">
          <Typography className="text-lg">🌟 ชื่อ - นามสกุล</Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="ชื่อ - นามสกุล"
            error={!!form.formState.errors.fullname}
            helperText={form.formState.errors.fullname?.message}
            {...form.register("fullname")}
          />
        </Stack>
        <Stack width="100%">
          <Typography className="text-lg">🌟 ชื่อเล่น (ภาษาอังกฤษ)</Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="ชื่อเล่น"
            error={!!form.formState.errors.nicknameEn}
            helperText={form.formState.errors.nicknameEn?.message}
            {...form.register("nicknameEn")}
          />
        </Stack>
        <Stack width="100%">
          <Typography className="text-lg">🌟 ชื่อเล่น (ภาษาไทย)</Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="ชื่อเล่น (ภาษาไทย)"
            error={!!form.formState.errors.nicknameTh}
            helperText={form.formState.errors.nicknameTh?.message}
            {...form.register("nicknameTh")}
          />
        </Stack>
        <Stack width="100%">
          <FormControl fullWidth variant="outlined">
            <Typography className="text-lg">🌟 เลขบัตรประชาชน</Typography>
            <OutlinedInput
              fullWidth
              placeholder="ใส่เลขบัตรประชาชนของคุณ"
              error={!!form.formState.errors.idCard}
              inputComponent={RegisterProfileIdCard as any}
              {...form.register("idCard")}
            />
            <FormHelperText error={!!form.formState.errors.idCard?.message}>
              {form.formState.errors.idCard?.message}
            </FormHelperText>
          </FormControl>
        </Stack>
        <Stack width="100%">
          <Typography className="mb-4 text-lg">🌟 วัน/เดือน/ปี เกิด</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="วัน/เดือน/ปี"
              value={dayjs(form.getValues().birthDate, "DD/MM/YYYY")}
              onChange={(newValue) => {
                form.setValue(
                  "birthDate",
                  dayjs(newValue).format("DD/MM/YYYY")
                );
              }}
            />
          </LocalizationProvider>
        </Stack>
        <Stack width="100%">
          <Typography className="text-lg">🌟 ที่อยู่ปัจจุบัน</Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="ที่อยู่ปัจจุบัน"
            error={!!form.formState.errors.address}
            helperText={form.formState.errors.address?.message}
            {...form.register("address")}
          />
        </Stack>
        <Stack width="100%">
          <RegisterTestSingleChoice
            title="🌟 หมู่โลหิต (กรุ๊ปเลือด)"
            name="bloodType"
            value={form.getValues().bloodType}
            choices={[
              { id: "1", title: "หมู่ A", value: "A" },
              { id: "2", title: "หมู่ B", value: "B" },
              { id: "3", title: "หมู่ O", value: "O" },
              { id: "4", title: "หมู่ AB", value: "AB" },
              { id: "5", title: "อื่น ๆ", value: "other" },
            ]}
          />
        </Stack>
        <Stack width="100%">
          <RegisterTestSingleChoice
            title="🌟 ศาสนา"
            name="religion"
            value={form.getValues().religion}
            choices={[
              { id: "1", title: "พุทธ" },
              { id: "2", title: "คริสต์" },
              { id: "3", title: "อิสลาม" },
              { id: "4", title: "ไม่ระบุ" },
              { id: "5", title: "อื่น ๆ" },
            ]}
          />
        </Stack>
        <Stack width="100%">
          <Typography className="text-lg">
            🌟 ยาประจำตัว (ถ้าไม่มีให้ใส่ - )
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="ยาประจำตัว"
            error={!!form.formState.errors.medic}
            helperText={form.formState.errors.medic?.message}
            {...form.register("medic")}
          />
        </Stack>
        <Stack width="100%">
          <Typography className="text-lg">
            🌟 อาหารที่รับประทานไม่ได้ (Ex. อาหารทะเล, ไข่, อาหารเผ็ด,
            ถ้าไม่มีให้ใส่ - )
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="อาหารที่รับประทานไม่ได้"
            error={!!form.formState.errors.allergyFood}
            helperText={form.formState.errors.allergyFood?.message}
            {...form.register("allergyFood")}
          />
        </Stack>
        <Stack width="100%">
          <Typography className="text-lg">
            🌟 ขนาดเสื้อ Size chart (Oversize)
          </Typography>
          <Image src={ShirtChartSize} alt="size chart" />
          <RegisterTestSingleChoice
            title=""
            name="shirtSize"
            value={form.getValues().shirtSize}
            choices={[
              { id: "1", title: "free size" },
              { id: "2", title: "M" },
              { id: "3", title: "L" },
              { id: "4", title: "XL" },
              { id: "5", title: "2XL" },
            ]}
          />
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default PersonalInfo1;
