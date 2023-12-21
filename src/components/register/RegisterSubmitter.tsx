import { BaseSyntheticEvent, useEffect } from "react";
import { UseFormHandleSubmit } from "react-hook-form";
import { proxy } from "valtio";
import { RegisterQuestionFormData } from "./RegisterQuestion/RegisterQuestion";
import { RegisterTestFormData } from "./RegisterTest/RegisterTest";
import { RegisterProfileFormData } from "./RegisterProfile/RegisterProfileForm";

export interface RegisterValidator {
  handleSubmitQuestion?: UseFormHandleSubmit<RegisterQuestionFormData>;
  handleSubmitTest?: UseFormHandleSubmit<RegisterTestFormData>;
  handleSubmitProfile?: UseFormHandleSubmit<RegisterProfileFormData>;

  registerHandler: (name: keyof RegisterValidator, handler: any) => void;
}

export const validators = proxy<RegisterValidator>({
  registerHandler(name, handler) {
    validators[name] = handler;
  },
});

export default function RegisterSubmitter() {
  return <></>;
}
