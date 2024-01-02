import { ibmBold, ibmMedium } from "@/utils/fonts";
import { Button, Checkbox, Stack, Typography, styled } from "@mui/material";
import React, {FC, useMemo, useState} from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import {UseFormReturn} from "react-hook-form";
import {PersonalInfoFormData} from "@/app/confirm/page";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface PaymentProps{
    form: UseFormReturn<PersonalInfoFormData, any, undefined>;
    file: File | null;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
    isUploaded: boolean;
    setIsUploaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Payment:FC<PaymentProps> = ({form,file,setFile,isUploaded,setIsUploaded}) => {
  const price = useMemo(() => {
    let price = 350;
    if (form.getValues().isStay === "ต้องการ" && form.getValues().stayDate.length > 0) {
      price += form.getValues().stayDate.length * 200;
    }
    return price;
  }, [form.getValues().isStay, form.getValues().stayDate]);
  console.log(file);
  return (
    <Stack width="100%" gap={5}>
      <Typography
        fontSize="24px"
        color="#2D73AE"
        sx={{
          alignSelf: "center",
          fontFamily: ibmBold.style.fontFamily,
        }}
      >
        ชำระเงิน
      </Typography>
      <Stack gap={2}>
        <Typography
          sx={{
            color: "#666666",
            fontFamily: ibmMedium.style.fontFamily,
            fontSize: "16px",
          }}
        >
          ธนาคาร
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: ibmMedium.style.fontFamily,
          }}
        >
          ธนาคารกรุงเทพ
        </Typography>
      </Stack>
      <Stack gap={2}>
        <Typography
          sx={{
            color: "#666666",
            fontFamily: ibmMedium.style.fontFamily,
            fontSize: "16px",
          }}
        >
          บัญชีเลขที่
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: ibmMedium.style.fontFamily,
          }}
        >
          037-4-14247-9
        </Typography>
      </Stack>
      <Stack gap={2}>
        <Typography
          sx={{
            color: "#666666",
            fontFamily: ibmMedium.style.fontFamily,
            fontSize: "16px",
          }}
        >
          ชื่อบัญชี
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: ibmMedium.style.fontFamily,
          }}
        >
          นาย วิธวินท์ คล้ายรัศมี และ นาย พงศภัค ลับกิ่ม
        </Typography>
      </Stack>
      <Stack gap={2}>
        <Typography
          sx={{
            color: "#666666",
            fontFamily: ibmMedium.style.fontFamily,
            fontSize: "16px",
          }}
        >
          จำนวนเงินที่ต้องชำระ
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: ibmMedium.style.fontFamily,
          }}
        >
          {price } บาท
        </Typography>
      </Stack>
      <Stack gap={2}>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: ibmMedium.style.fontFamily,
          }}
        >
          หลักฐานการโอนเงิน
        </Typography>
        <Button
          component="label"
          variant="outlined"
          sx={{
            width: "128px",
          }}
          startIcon={<FaCloudUploadAlt />}
        >
          { file ? file.name : "เพิ่มไฟล์"}
          <VisuallyHiddenInput onChange={f=>setFile(f.target?.files![0])} type="file" />
        </Button>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Checkbox checked={isUploaded} onChange={v=>setIsUploaded(v.target.checked)} />
        <Typography
          sx={{
            fontSize: "16px",
          }}
        >
          ชำระเงินค่าค่ายเรียบร้อยแล้ว
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Payment;
