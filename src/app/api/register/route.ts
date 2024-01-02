
import {z} from "zod";
import {NextResponse} from "next/server";
import {
  registerProfileFormData,
  registerQuestionFormData,
  registerTestFormData
} from "@/share/validation/formData";
import {getRegisterEmailTemplate} from "@/email/register/reigsterEmailTemplate";
import {sendmail} from "@/app/api/utils/sendmail";
import winston from "winston";
import {sendWebHook} from "@/utils/sendWebHook";
import {appendSheet} from "@/app/api/utils/appendSheet";
import {getIsClosedRegisterFrom} from "@/app/api/utils/getFormStatus";
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ]
});

export async function POST(request: Request) {
  if(getIsClosedRegisterFrom()){
    return NextResponse.json("closed", {status: 400});
  }
  const requestData = registerQuestionFormData.merge(registerTestFormData).merge(registerProfileFormData);
  const req = await request.json();
  try{
    const data = requestData.parse(req);
    try{
      await appendSheet("Basic infomation", [data.name, data.nickName,data.phone,data.email,data.school,data.educationLevel,data.dicease,data.pr,data.self_introduction,data.why_join,data.expect,data.experience,data.goal,data.join_date.join(", ")]);
      await appendSheet("Academic", [data.name, data.q1.join(", "),data.q2,data.q3.join(", "),data.q4,data.q5.join(", "),data.q6,data.q7,data.q8]);
      const email = await getRegisterEmailTemplate({name: data.name, to: data.email});
      await sendmail(email);

      return NextResponse.json(data);
    }catch (e){
      logger.error(req,e);
      sendWebHook((e??"").toString(), JSON.stringify(req.email ?? ""));
      return NextResponse.json(e, {status: 500});
    }

  }catch (e){
    logger.error(req,e);
    sendWebHook((e??"").toString(), JSON.stringify(req.email ?? ""));
    return NextResponse.json(e, {status: 400});
  }
}
