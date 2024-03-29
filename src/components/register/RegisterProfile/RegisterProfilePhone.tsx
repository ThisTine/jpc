"use client";
import React from "react";
import { IMaskInput } from "react-imask";

interface PhoneMaskProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextFieldMasked = React.forwardRef<HTMLInputElement, PhoneMaskProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="0##-###-####"
        definitions={{
          "0": /0/,
          "#": /\d/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

export default TextFieldMasked;
