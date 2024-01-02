import React from "react";
import {IMaskInput} from "react-imask";

interface IdCardMaskProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

export const RegisterProfileIdCard = React.forwardRef<HTMLInputElement, IdCardMaskProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="#-####-#####-##-#"
        definitions={{
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
