"use client";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import RegisterLocalStorage from "../RegisterLocalStorage";
import { registerQuestionFormData } from "@/share/validation/formData";
import { ibmBold } from "@/utils/fonts";
import { validators } from "../RegisterSubmitter";
import { zodResolver } from "@hookform/resolvers/zod";

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
      join_date: [],
    },
    resolver: zodResolver(registerQuestionFormData),
  });

  validators.registerHandler("handleSubmitQuestion", form.handleSubmit);

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
          {/* <TextField
            variant="outlined"
            fullWidth
            placeholder="กรุณาใส่คำตอบ"
            label="คำตอบของคุณ"
            {...form.register("pr")}
            sx={{
              my: "8px",
            }}
          /> */}
          <Controller
            name="pr"
            control={form.control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="pr-label">คำตอบของคุณ*</InputLabel>
                <Select
                  label="คำตอบของคุณ*"
                  error={!!form.formState.errors.pr}
                  {...field}
                >
                  {"Facebook Instragram Camphub เพื่อนๆ รุ่นพี่ อาจารย์ ช่องทางประชาสัมพันธ์จากคณะ ช่องทางประชาสัมพันธ์จากมหาวิทยาลัย"
                    .split(" ")
                    .map((v) => (
                      <MenuItem key={v} value={v}>
                        {v}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            )}
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
            label="คำตอบของคุณ*"
            placeholder="กรุณาใส่คำตอบ*"
            error={!!form.formState.errors.self_introduction}
            helperText={form.formState.errors.self_introduction?.message}
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
            label="คำตอบของคุณ*"
            placeholder="กรุณาใส่คำตอบ*"
            error={!!form.formState.errors.why_join}
            helperText={form.formState.errors.why_join?.message}
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
          label="คำตอบของคุณ*"
          placeholder="กรุณาใส่คำตอบ*"
          error={!!form.formState.errors.expect}
          helperText={form.formState.errors.expect?.message}
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
          label="คำตอบของคุณ*"
          placeholder="กรุณาใส่คำตอบ*"
          error={!!form.formState.errors.experience}
          helperText={form.formState.errors.experience?.message}
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
          label="คำตอบของคุณ*"
          placeholder="กรุณาใส่คำตอบ*"
          error={!!form.formState.errors.goal}
          helperText={form.formState.errors.goal?.message}
          {...form.register("goal")}
        />
      </Stack>

      <Stack width="100%" my="16px">
        <Typography className="text-lg" mb="10px">
          🌟 สามารถเข้าร่วม JPC วันไหนบ้าง?
        </Typography>
        <FormControl error={!!form.formState.errors.join_date}>
          {[
            "วันศุกร์ที่ 12 มกราคม 2567",
            "วันเสาร์ที่ 13 มกราคม 2567",
            "วันอาทิตย์ที่ 14 มกราคม 2567",
          ].map((choice) => (
            <FormControlLabel
              key={choice}
              control={
                <Checkbox {...form.register("join_date")} value={choice} />
              }
              label={choice}
            />
          ))}
          <FormHelperText>
            {String(form.formState.errors.join_date?.message ?? "")}
          </FormHelperText>
        </FormControl>
      </Stack>

      <RegisterLocalStorage store="registerQuestion" />
    </FormProvider>
  );
}
