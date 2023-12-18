"use client";

import { Stack, TextField, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import RegisterLocalStorage from "../RegisterLocalStorage";
import { registerQuestionFormData } from "@/share/validation/formData";

export interface RegisterQuestionFormData
  extends z.infer<typeof registerQuestionFormData> {}

export default function RegisterQuestion() {
  const form = useForm<RegisterQuestionFormData>({
    defaultValues: {
      pr: "",
      self_introduction: "",
      why_join: "",
      expect: "",
      experience: "",
      goal: "",
    },
  });

  return (
    <FormProvider {...form}>
      <Stack my={5}>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: ibmBold.style.fontFamily,
            color: "#A5CE89",
            alignSelf: "center",
            "@media (min-width: 724px)": {
              fontSize: "24px",
            },
          }}
        >
          คำถามให้น้องๆ จากโจเชฟ 📝
        </Typography>
      </Stack>
      <Stack gap={2}>
        <Stack width="100%">
          <Typography className="text-lg">
            🌟 เพื่อน ๆ ได้รับข่าวสารการประชาสัมพันธ์จากช่องทางใด?
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="กรุณาใส่คำตอบ"
            label="คำตอบของคุณ"
            {...form.register("pr")}
            sx={{
              my: "8px",
            }}
          />
        </Stack>

        <Stack width="100%">
          <Typography className="text-lg" mb="10px">
            🌟 แนะนำตัวคร่าว ๆ ให้โจเซฟรู้จักเพื่อน ๆ หน่อยครับ
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            minRows={4}
            label="คำตอบของคุณ"
            placeholder="กรุณาใส่คำตอบ*"
            {...form.register("self_introduction")}
          />
        </Stack>

        <Stack width="100%">
          <Typography className="text-lg" mb="10px">
            🌟 โจเซฟอยากรู้ว่าเพราะอะไรเพื่อน ๆ ถึงอยากเข้าร่วมค่ายนี้?
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            minRows={4}
            label="คำตอบของคุณ"
            placeholder="กรุณาใส่คำตอบ*"
            {...form.register("why_join")}
          />
        </Stack>
      </Stack>

      <Stack width="100%" my="16px">
        <Typography className="text-lg" mb="10px">
          🌟 เพื่อน ๆ คาดหวังอะไรจากการเข้าค่ายครั้งนี้?
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          multiline
          minRows={4}
          label="คำตอบของคุณ"
          placeholder="กรุณาใส่คำตอบ*"
          {...form.register("expect")}
        />
      </Stack>

      <Stack width="100%">
        <Typography className="text-lg" mb="10px">
          🌟 เพื่อน ๆ จะรู้สึกอย่างไรหากต้องเรียนรู้สิ่งใหม่ ๆ
          ที่ไม่เคยรู้จักมาก่อนหรอครับ?
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          multiline
          minRows={4}
          label="คำตอบของคุณ"
          placeholder="กรุณาใส่คำตอบ*"
          {...form.register("experience")}
        />
      </Stack>

      <Stack width="100%" my="16px">
        <Typography className="text-lg" mb="10px">
          🌟 โจเซฟอยากรู้ว่าเป้าหมายในอีก 4 ปีของเพื่อน ๆ เป็นอย่างไรบ้าง?
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          multiline
          minRows={4}
          label="คำตอบของคุณ"
          placeholder="กรุณาใส่คำตอบ*"
          {...form.register("goal")}
        />
      </Stack>

      <RegisterLocalStorage store="registerQuestion" />
    </FormProvider>
  );
}
