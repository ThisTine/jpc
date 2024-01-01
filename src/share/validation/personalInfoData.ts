import {z} from "zod";
import dayjs from "dayjs";

export const personalInfoData = z.object({
  fullname: z.string().min(1, {message: "กรุณากรอกชื่อด้วยครับ"}),
  nicknameEn: z.string().regex(/([A-Za-z])+/).min(1, {message: "กรุณากรอกชื่อเล่น (เป็นภาษาอังกฤษ) ด้วยครับ"}),
  nicknameTh: z.string().min(1, {message: "กรุณากรอกชื่อเล่น (เป็นภาษาไทย) ด้วยครับ"}),
  idCard: z.string().refine(
    (value) => {
      if (value.length !== 17) {
        return false;
      }

      return /^\d{1}-\d{4}-\d{5}-\d{2}-\d{1}$/.test(value);

    },
    {
      message: "กรุณากรอกเลขบัตรประชาชนให้ถูกต้องด้วยครับ",
    }
  ),
  birthDate: z.string().refine(d=>{
    return !! dayjs(d).format("MM/DD/YYYY");
  },{message:"กรุณากรอกวันเกิดให้ถูกต้องด้วยครับ"}),
  address:z.string().min(1, {message: "กรุณากรอกที่อยู่ด้วยครับ"}),
  bloodType: z.string().min(1,{message: "กรุณากรอกกรุ๊ปเลือดด้วยครับ"})
    .refine((value)=>["A","B","AB","O"].includes(value),{message: "กรุณากรอกกรุ๊ปเลือดให้ถูกต้องด้วยครับ"}),
  religion: z.string(),
  deceased: z.string(),
  medic: z.string(),
  allergyFood: z.string(),
  shirtSize: z.string().min(1,{message: "กรุณาเลือกขนาดเสื้อด้วยครับ"})
    .refine(v=>["free size","M","L","XL","2XL"].includes(v),{message: "กรุณาเลือกขนาดเสื้อให้ถูกต้องด้วยครับ"}),
  parentName: z.string().min(1,{message: "กรุณากรอกชื่อผู้ปกครองด้วยครับ"}),
  parentPhone: z.string().min(1,{message: "กรุณากรอกเบอร์โทรผู้ปกครองด้วยครับ"})
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
  relationship: z.string().min(1,{message: "กรุณากรอกความสัมพันธ์ด้วยครับ"}),
  emergencyName: z.string().min(1,{message: "กรุณากรอกชื่อผู้ติดต่อฉุกเฉินด้วยครับ"}),
  emergencyPhone: z.string().min(1,{message: "กรุณากรอกเบอร์โทรผู้ติดต่อฉุกเฉินด้วยครับ"})
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
  isStay: z.string().min(1,{message: "กรุณาเลือกว่าจะพักค้างคืนหรือไม่ด้วยครับ"}).refine(v=>['ต้องการ','ไม่ต้องการ'].includes(v),"กรุณาเลือกว่าจะพักค้างคืนหรือไม่ด้วยครับ"),
  goBackTransportation: z.string(),
  stayDate: z.string().refine(d =>{
    const value = JSON.parse(d);
    if(!Array.isArray(value)) return false;
    const isDuplicate = value.some((item, index) => value.indexOf(item) !== index);
    if(isDuplicate){
      return false;
    }
    const val = ["11 มกราคม","12 มกราคม","13 มกราคม","14 มกราคม"];
    return value.every(v=>val.includes(v));
  },{message:"กรุณาเลือกวันเข้าพักให้ถูกต้องด้วยครับ"}),
  isStayProof: z.string().min(1,{message:"กรุณาเลือกว่าต้องการใบยืนยันไหมด้วยครับ"}).refine(v=>['ต้องการ','ไม่ต้องการ'].includes(v),"กรุณาเลือกว่าต้องการใบยืนยันไหมด้วยครับ"),
});
