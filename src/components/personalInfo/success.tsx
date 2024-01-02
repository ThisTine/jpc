import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import JosephFace from "@/assets/joseph-face.svg";
import { ibmBold, ibmMedium } from "@/utils/fonts";

const SuccessPage = () => {
  return (
    <Stack
      gap={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 4,
      }}
    >
      <Image src={JosephFace} alt="joseph face" />
      <Stack gap={1}>
        <Typography
          sx={{
            color: "#A5CE89",
            fontSize: "24px",
            alignSelf: "center",
            fontFamily: ibmBold.style.fontFamily,
          }}
        >
          ดำเนินการเสร็จสิ้น!
        </Typography>
        <Typography
          sx={{
            color: "#2D73AE",
            fontFamily: ibmBold.style.fontFamily,
            fontSize: "24px",
          }}
        >
          พี่โจเซฟได้รับคำตอบจากน้อง ๆ แล้ว!
        </Typography>
      </Stack>
      <Typography
        sx={{
          fontFamily: ibmMedium.style.fontFamily,
          fontSize: "18px",
        }}
      >
        ไว้มาเจอกันที่ค่ายนะครับ พี่โจเซฟรอน้อง ๆ อยู่ ! หากน้อง ๆ
        <br/>
          แล้วอย่าลิมเช็คอีเมล์เพื่อเข้ากลุ่ม Line ล่ะ !
        <br />
        มีข้อสงสัยเพิ่มเติม สามารถติดต่อได้ที่
        <br />
        Instagram: jpc_sitkmutt
        <br />
        Facebook: Junior Programmers Camp
        <br />
        Tel: 089-498-8488 (พี่หมวยมี่)
      </Typography>
    </Stack>
  );
};

export default SuccessPage;
