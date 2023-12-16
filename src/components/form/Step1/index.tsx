import { Box, Card, Stack, Typography } from "@mui/material";

export default function FirstPhraseForm() {
  return (
    <Box sx={{ width: "1324px" }}>
      <Card
        sx={{ paddingTop: "3rem", paddingLeft: "4rem", paddingRight: "4rem" }}
      >
        <Stack>
          <Box>
            <Stack>
              <Typography fontSize="34px" fontWeight="bold" color="#2A3D5D">
                แบบฟอร์มลงทะเบียน JPC16
              </Typography>
              <Typography fontSize="16px" color="black">
                มาลงทะเบียนกันเถอะเย้เย้ ก็แค่ป้อจาย ที่หลายใจหนึ่งคน
                ก็คงไม่มีเหตุผล หื้อเฮาทนต่อไป ขนาดห่างกันบ่ถึงวา
                ยังแอบส่งตาไปหาใคร บ่มีความเกรงใจบ้างเลย
              </Typography>
            </Stack>
          </Box>
          <hr style={{ marginTop: "1rem", marginBottom: "1.5rem" }} />
          <Typography fontSize="34px" fontWeight="bold" color="#2D73AE">
            หนังสือยินยอมเพื่อขอใช้ประโยชน์ข้อมูลส่วนบุคคล
          </Typography>
          <Box></Box>
        </Stack>
      </Card>
    </Box>
  );
}
