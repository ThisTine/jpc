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
                แบบฟอร์มลงทะเบียน JPC16
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
                มาลงทะเบียนกันเถอะเย้เย้ ก็แค่ป้อจาย ที่หลายใจหนึ่งคน
                ก็คงไม่มีเหตุผล หื้อเฮาทนต่อไป ขนาดห่างกันบ่ถึงวา
                ยังแอบส่งตาไปหาใคร บ่มีความเกรงใจบ้างเลย
              </Typography>
            </Stack>
          </Box>
          <hr style={{ marginTop: "1rem", marginBottom: "1.5rem" }} />
        </Stack>
      </Box>
    </Box>
  );
}
