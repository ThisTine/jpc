import { z } from "zod";

export const registerQuestionFormData = z.object({
  pr: z.string().min(1),
  self_introduction: z.string().min(1),
  why_join: z.string().min(1),
  expect: z.string().min(1),
  experience: z.string().min(1),
  goal: z.string().min(1),
  join_date: z.array(z.string()).min(1),
});

export const registerTestFormData = z.object({
  q1: z.array(z.string()).min(1),
  q2: z.string().min(1),
  q3: z.array(z.string()).min(1),
  q4: z.string().min(1),
  q5: z.array(z.string()).min(1),
  q6: z.string().min(1),
  q7: z.string().min(1),
  q8: z.string().min(1),
});

export const registerProfileFormData = z.object({
  name: z.string().min(1),
  nickName: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().min(1),
  school: z.string().min(1),
  educationLevel: z.string().min(1),
  dicease: z.string().min(1),
});
