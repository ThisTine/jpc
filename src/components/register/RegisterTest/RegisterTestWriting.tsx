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
  const { register, formState } = useFormContext();

  return (
    <Stack width="100%">
      <Typography className="text-lg" mb="12px">
        {title}
      </Typography>
      <TextField
        fullWidth
        multiline
        minRows={10}
        placeholder="* Your Answer *"
        error={!!formState.errors[name]}
        helperText={String(formState.errors[name]?.message ?? "")}
        {...register(name)}
      />
    </Stack>
  );
}
