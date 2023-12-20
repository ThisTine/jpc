import { Box, Stack, Typography } from "@mui/material";
import { ibmBold } from "@/utils/fonts";
import Image from "next/image";
import jpcLogo from "@/assets/logo.svg";

export default function RegisterTitle() {
  return (
    <Box>
      <Box>
        <Stack>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "@media (min-width: 1440px)": {
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              },
            }}
          >
            <Image src={jpcLogo} alt="jpcLogo" width={120} />
            <Stack>
              <Typography
                fontSize="24px"
                color="#2A3D5D"
                fontFamily={ibmBold.style.fontFamily}
              >
                แบบฟอร์มรับสมัคร JPC16
              </Typography>
              <Typography
                color="black"
                mt={1}
                sx={{
                  "@media (min-width: 1440px)": {
                    width: "90%",
                  },
                }}
              >
                แบบฟอร์มนี้ ใช้เพื่อการรับสมัครและคัดเลือกเพื่อน ๆ ชาวค่าย JPC16
                ในการตอบคำถามจะมีทั้งวิชาการและคำถามสร้างสรรค์วัดตัวตน
                อาจใช้เวลาในการตอบคำถามประมาณ 20 - 30 นาที โจเซฟขอให้เพื่อน ๆ
                ตอบคำถามอย่างเป็นตัวเองมากที่สุดนะครับ แล้วเจอกันนะ !
              </Typography>
            </Stack>
          </Box>
          <hr style={{ marginTop: "1rem", marginBottom: "1.5rem" }} />
        </Stack>
      </Box>
    </Box>
  );
}
