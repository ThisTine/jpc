import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
import { register } from "module";
import { useMemo } from "react";
import { Form, useFormContext } from "react-hook-form";

export type RegisterTestChoice = Readonly<{
  id: string;
  title: string;
}>;

export type RegisterTestMultipleChoiceProps = Readonly<{
  name: string;
  title: string;
  choices: RegisterTestChoice[];
}>;

export default function RegisterTestMultipleChoice({
  name,
  choices,
  title,
}: RegisterTestMultipleChoiceProps) {
  const { register, formState } = useFormContext();
  const renderChoices = useMemo(
    () => choices.toSorted((choice) => Math.random() - 0.5),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Stack width="100%">
      <Typography className="text-lg" mb="10px">
        {title}
      </Typography>
      <Stack gap={1}>
        <FormControl error={!!formState.errors[name]}>
          {renderChoices.map((choice) => (
            <FormControlLabel
              key={choice.title}
              control={<Checkbox {...register(name)} value={choice.title} />}
              label={choice.title}
            />
          ))}
          <FormHelperText>
            {String(formState.errors[name]?.message ?? "")}
          </FormHelperText>
        </FormControl>
      </Stack>
    </Stack>
  );
}
