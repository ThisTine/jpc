import { z } from "zod";

export const registerQuestionFormData = z.object({
  pr: z.string().min(1, { message: "กรุณากรอกด้วยครับ" }),
  self_introduction: z
    .string()
    .min(1, { message: "กรุณากรอกข้อมูลแนะนำตัวด้วยครับ" }),
  why_join: z
    .string()
    .min(1, { message: "กรุณากรอกเหตุผลที่เข้าร่วมด้วยครับ" }),
  expect: z.string().min(1, { message: "กรุณากรอกด้วยครับ" }),
  experience: z.string().min(1, { message: "กรุณากรอกประสบการณ์ด้วยครับ" }),
  goal: z.string().min(1, { message: "กรุณากรอกด้วยครับ" }),
  join_date: z.array(z.string().nullable()).refine(
    (dates) => {
      const nonNullStrings = dates.filter(
        (date) => typeof date === "string" && date.trim() !== ""
      );
      return nonNullStrings.length > 0;
    },
    {
      message: "กรุณาเลือกวันเข้าร่วมด้วยครับ",
    }
  ),
});

export const registerTestFormData = z.object({
  q1: z.array(z.string()).min(1, { message: "กรุณาตอบคำถามด้วยครับ" }),
  q2: z.string().min(1, { message: "กรุณาตอบคำถามด้วยครับ" }),
  q3: z.array(z.string()).min(1, { message: "กรุณาตอบคำถามด้วยครับ" }),
  q4: z.string().min(1, { message: "กรุณาตอบคำถามด้วยครับ" }),
  q5: z.array(z.string()).min(1, { message: "กรุณาตอบคำถามด้วยครับ" }),
  q6: z.string().min(1, { message: "กรุณาตอบคำถามด้วยครับ" }),
  q7: z.string().min(1, { message: "กรุณาตอบคำถามด้วยครับ" }),
  q8: z.string().min(1, { message: "กรุณาตอบคำถามด้วยครับ" }),
});

export const registerProfileFormData = z.object({
  name: z.string().min(1, { message: "กรุณากรอกชื่อด้วยครับ" }),
  nickName: z.string().min(1, { message: "กรุณากรอกชื่อเล่นด้วยครับ" }),
  phone: z
    .string()
    .min(1, { message: "กรุณากรอกหมายเลขโทรศัพท์ด้วยครับ" })
    .refine(
      (value) => {
        if (value.length !== 12) {
          return false;
        }

        // Ensure the first character is '0'
        if (!value.startsWith("0")) {
          return false;
        }

        // Ensure the rest of the characters are digits
        const restOfDigits = value.substring(1);
        if (!/^\d{2}-\d{3}-\d{4}$/.test(restOfDigits)) {
          return false;
        }
        return true;
      },
      {
        message: "กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้องด้วยครับ",
      }
    ),
  email: z.string().email({
    message: "กรุณากรอกอีเมลให้ถูกต้องด้วยครับ",
  }),
  school: z
    .string()
    .min(1, { message: "กรุณากรอกโรงเรียน/มหาวิทยาลัยด้วยครับ" }),
  educationLevel: z
    .string()
    .min(1, { message: "กรุณากรอกระดับการศึกษาด้วยครับ" }),
  dicease: z.string(),
});
