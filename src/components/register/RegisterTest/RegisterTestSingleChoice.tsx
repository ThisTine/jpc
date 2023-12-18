import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { register } from "module";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

export type RegisterTestChoice = Readonly<{
  id: string;
  title: string;
}>;

export type RegisterTestSingleChoiceProps = Readonly<{
  name: string;
  title: string;
  choices: RegisterTestChoice[];
}>;

export default function RegisterTestSingleChoice({
  name,
  choices,
  title,
}: RegisterTestSingleChoiceProps) {
  const { register } = useFormContext();
  const renderChoices = useMemo(
    () => choices.toSorted((choice) => Math.random() - 0.5),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Stack width="100%">
      <Typography className="text-lg">{title}</Typography>
      <Stack gap={1}>
        <RadioGroup name={name}>
          {renderChoices.map((choice) => (
            <FormControlLabel
              key={choice.id}
              control={<Radio {...register(name)} value={choice.id} />}
              label={choice.title}
            />
          ))}
        </RadioGroup>
      </Stack>
    </Stack>
  );
}
