import FirstPhraseForm from "@/components/form/Step1";
import { Box } from "@mui/material";

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
      <FirstPhraseForm />
    </Box>
  );
};

export default Page;
