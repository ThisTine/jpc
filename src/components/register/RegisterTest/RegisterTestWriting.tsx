import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

export type RegisterTestWritingProps = Readonly<{
  name: string;
  title: string;
}>;

export default function RegisterTestWriting({
  name,
  title,
}: RegisterTestWritingProps) {
  const { register } = useFormContext();

  return (
    <Stack width="100%">
      <Typography className="text-lg">{title}</Typography>
      <TextField
        fullWidth
        multiline
        minRows={10}
        placeholder="* Your Answer *"
        {...register(name)}
      />
    </Stack>
  );
}
