import {
  Checkbox,
  FormControl,
  FormControlLabel, FormGroup,
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
  value?: string;
}>;

export type RegisterTestMultipleChoiceProps = Readonly<{
  name: string;
  title: string;
  value?: string[];
  choices: RegisterTestChoice[];
}>;

export default function RegisterTestMultipleChoice({
  name,
  choices,
  title,
  value
}: RegisterTestMultipleChoiceProps) {
  const { register, formState } = useFormContext();
  return (
    <Stack width="100%">
      <Typography className="text-lg" mb="10px">
        {title}
      </Typography>
      <Stack gap={1}>
        <FormControl  error={!!formState.errors[name]} >
          <FormGroup defaultValue={value}>
            {choices.map((choice) => (
              <FormControlLabel
                key={choice.title}
                control={<Checkbox defaultChecked={value?.includes(choice.value ?? choice.title)} {...register(name)} value={ choice.value ?? choice.title } />}
                label={choice.title}
              />
            ))}
            <FormHelperText>
              {String(formState.errors[name]?.message ?? "")}
            </FormHelperText>
          </FormGroup>

        </FormControl>
      </Stack>
    </Stack>
  );
}
