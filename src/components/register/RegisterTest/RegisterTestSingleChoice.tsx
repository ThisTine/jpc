import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
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
  src?: StaticImageData;
}>;

export default function RegisterTestSingleChoice({
  name,
  choices,
  title,
  src,
}: RegisterTestSingleChoiceProps) {
  const { register, formState } = useFormContext();
  const renderChoices = useMemo(
    () => choices.toSorted((choice) => Math.random() - 0.5),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Stack width="100%">
      {src ? (
        <Box display="flex" justifyContent="center" paddingX={3}>
          <Image
            src={src}
            alt="test"
            style={{ width: "100%", height: "auto", maxWidth: "1024px" }}
          />
        </Box>
      ) : null}
      <Typography className="text-lg">{title}</Typography>
      <Stack gap={1}>
        <FormControl error={!!formState.errors[name]}>
          <RadioGroup name={name}>
            {renderChoices.map((choice) => (
              <FormControlLabel
                key={choice.title}
                control={<Radio {...register(name)} value={choice.title} />}
                label={choice.title}
              />
            ))}
          </RadioGroup>
          <FormHelperText>
            {String(formState.errors[name]?.message ?? "")}
          </FormHelperText>
        </FormControl>
      </Stack>
    </Stack>
  );
}
