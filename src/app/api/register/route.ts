
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
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ]
});

export async function POST(request: Request) {

  const requestData = registerQuestionFormData.merge(registerTestFormData).merge(registerProfileFormData);
  type reqType = z.infer<typeof requestData>;

  // const introductionMapper :Omit<reqType, "q1"| "q2"|"q3"|"q4"| "q5"|"q6"|"q7"| "q8" | "join_date"> &{join_date:string} = {
  //   name: "entry.793832892",
  //   nickName: "entry.460075085",
  //   email: "entry.1923488374",
  //   phone: "entry.387190499",
  //   school: "entry.926643675",
  //   educationLevel: "entry.322541071",
  //   dicease: "entry.452950247",
  //   pr: "entry.1296838378",
  //   self_introduction: "entry.1921450680",
  //   why_join: "entry.278131495",
  //   expect: "entry.1581014036",
  //   experience: "entry.1178586347",
  //   goal: "entry.1624665163",
  //   join_date: "entry.1966150477"
  // };
  //
  // const questionMapper :Omit<reqType, "join_date"| "nickName"|"email"|"phone"|"school"|"educationLevel"|"dicease"|"pr"|"self_introduction"|"why_join"|"expect"|"experience"|"goal"| "q1" |"q2" |"q3"|"q5">
  //   & {q1:string, q2:string,q3:string,q5:string}= {
  //     name: "entry.349955612",
  //     q1: "entry.1702615270",
  //     q2: "entry.1367467624",
  //     q3: "entry.1029905077",
  //     q4: "entry.1883482560",
  //     q5: "entry.452136478",
  //     q6: "entry.2011508245",
  //     q7: "entry.239956739",
  //     q8: "entry.778848901"
  //   };


  const req = await request.json();
  try{
  //   const profileUrl = process.env.FORM_PROFILE_URL || "";
  //   const questionUrl = process.env.FORM_QUESTION_URL || "";
    const data = requestData.parse(req);
    //
    //   const gInfoReq = new URLSearchParams();
    //   for (let k of Object.keys(introductionMapper)){
    //     let key = introductionMapper[k as keyof typeof introductionMapper];
    //     if (key){
    //       if(Array.isArray(data[k as keyof reqType])){
    //         for(let i of data[k as keyof reqType]){
    //           gInfoReq.append(key, (i as string));
    //         }
    //       }else {
    //         gInfoReq.append(key, (data[k as keyof reqType] as string));
    //       }
    //     }
    //   }
    //
    //   const questionReq = new URLSearchParams();
    //
    //   for(let k of Object.keys(questionMapper)){
    //     let key = questionMapper[k as keyof typeof questionMapper];
    //     if (key){
    //       if(Array.isArray(data[k as keyof reqType])){
    //         for(let i of data[k as keyof reqType]){
    //           questionReq.append(key, (i as string));
    //         }
    //       }else{
    //         questionReq.append(key, (data[k as keyof reqType] as string));
    //       }
    //     }
    //   }
    try{
      // const infoUrl = profileUrl+"&"+gInfoReq.toString();
      // const questioncomUrl = questionUrl+"&"+questionReq.toString();
      // const info = await fetch(infoUrl);
      // const question = await fetch(questioncomUrl);
      // if(!info.ok){
      //   logger.error(req, {infoUrl, questioncomUrl});
      //   sendWebHook("Basic info form error, please check the debug url here : ", infoUrl);
      //   return NextResponse.json({error: "Failed send form to API"}, {status: 400});
      // }
      // if (!question.ok){
      //   logger.error(req, {infoUrl, questioncomUrl});
      //   sendWebHook("Academic question form error, please check the debug url here :",questioncomUrl);
      //   return NextResponse.json({error: "Failed send form to API"}, {status: 400});
      // }
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
