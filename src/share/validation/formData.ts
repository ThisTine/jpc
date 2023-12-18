import {z} from "zod";

export const registerQuestionFormData = z.object({
  pr: z.string(),
  self_introduction: z.string(),
  why_join: z.string(),
  expect: z.string(),
  experience: z.string(),
  goal: z.string(),
});
export const registerTestFormData = z.object({
  q1: z.array(z.string()),
  q2: z.array(z.string()),
  q3: z.array(z.string()),
  q4: z.string(),
  q5: z.array(z.string()),
  q6: z.string(),
  q7: z.string(),
  q8: z.string(),
});
export const registerProfileFormData = z.object({
  name: z.string(),
  nickName: z.string(),
  phone: z.string(),
  email: z.string(),
  school: z.string(),
  educationLevel: z.string(),
  dicease: z.string(),
});
