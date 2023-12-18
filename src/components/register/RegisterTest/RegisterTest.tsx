"use client";

import {Stack} from "@mui/material";
import {FormProvider, useForm} from "react-hook-form";
import {z} from "zod";
import RegisterTestMultipleChoice from "./RegisterTestMultipleChoice";
import RegisterTestSingleChoice from "./RegisterTestSingleChoice";
import RegisterTestWriting from "./RegisterTestWriting";
import {registerTestFormData} from "@/share/validation/formData";

export interface RegisterTestFormData
  extends z.infer<typeof registerTestFormData> {}

export default function RegisterTest() {
  const form = useForm<RegisterTestFormData>({
    defaultValues: {
      q1: [],
      q2: [],
      q3: [],
      q4: "",
      q5: [],
      q6: "",
      q7: "",
      q8: "",
    },
  });

  return (
    <FormProvider {...form}>
      <Stack gap={2}>
        <RegisterTestMultipleChoice
          title="1. ข้อใดคือโปรแกรมคอมพิวเตอร์ (Software) (ตอบได้หลายข้อ) ?"
          name="q1"
          choices={[
            { id: "1", title: "ChatGPT" },
            { id: "2", title: "UNO R3" },
            { id: "3", title: "Chrome" },
            { id: "4", title: "Instagram" },
          ]}
        />

        <RegisterTestSingleChoice
          title="2. ภาษาโปรแกรมมิ่งใดนิยมใช้กันในเว็บไซต์และสามารถทำงานบนเบราว์เซอร์ได้?"
          name="q2"
          choices={[
            { id: "1", title: "Go" },
            { id: "2", title: "C++" },
            { id: "3", title: "Javascript" },
            { id: "4", title: "PHP" },
          ]}
        />

        <RegisterTestMultipleChoice
          title="3. ข้อใดจัดเป็นหมวดหมู่ของระดับภาษาโปรแกรมมิ่ง (ตอบได้หลายข้อ)?"
          name="q3"
          choices={[
            { id: "1", title: "Go" },
            { id: "2", title: "C++" },
            { id: "3", title: "Javascript" },
            { id: "4", title: "PHP" },
          ]}
        />

        <RegisterTestSingleChoice
          title="4. ข้อใดจัดเป็นหมวดหมู่ของระดับภาษาโปรแกรมมิ่ง (ตอบได้หลายข้อ)?"
          name="q4"
          choices={[
            { id: "1", title: "26" },
            { id: "2", title: "27" },
            { id: "3", title: "28" },
            { id: "4", title: "29" },
          ]}
        />

        <RegisterTestMultipleChoice
          title="5. ข้อใดคือหมายเลข IP ที่ถูกต้อง (ตอบได้หลายข้อ)?"
          name="q5"
          choices={[
            { id: "1", title: "192.187.11.1" },
            { id: "2", title: "257.21.3.1" },
            { id: "3", title: "28.6.223.5.231" },
            { id: "4", title: "2606:4700:4700::64" },
          ]}
        />

        <RegisterTestMultipleChoice
          title="5. ข้อใดคือหมายเลข IP ที่ถูกต้อง (ตอบได้หลายข้อ)?"
          name="q5"
          choices={[
            { id: "1", title: "192.187.11.1" },
            { id: "2", title: "257.21.3.1" },
            { id: "3", title: "28.6.223.5.231" },
            { id: "4", title: "2606:4700:4700::64" },
          ]}
        />

        <RegisterTestWriting
          title="6. จงอธิบายภาษา Java ในความคิดของคุณ"
          name="q6"
        />

        <RegisterTestWriting
          title="7. จงอธิบายวิธีการหา “ข้าวผัดไข่” แบบเป็นขั้นตอน "
          name="q7"
        />

        <RegisterTestWriting
          title="8. จงอธิบายวิธีแก้ปัญหาใด ๆ เมื่อคุณเผชิญเข้ากับปัญหาในชีวิต แบบเป็นขั้นตอน "
          name="q8"
        />
      </Stack>
    </FormProvider>
  );
}
