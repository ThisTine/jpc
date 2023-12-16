import RegisterProfile from "@/components/register/RegisterProfile/RegisterProfileForm";
import RegisterQuestion from "@/components/register/RegisterQuestion/RegisterQuestion";
import RegisterTest from "@/components/register/RegisterTest/RegisterTest";
import { Box, Container } from "@mui/material";

const Page = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "center",
        paddingTop: "3rem",
      }}
    >
      <Container>
        <RegisterProfile />
        <RegisterQuestion />
        <RegisterTest />
      </Container>
    </Box>
  );
};

export default Page;
