
import {z} from "zod";
import {NextResponse} from "next/server";
import {
  registerProfileFormData,
  registerQuestionFormData,
  registerTestFormData
} from "@/share/validation/formData";
import {getRegisterEmailTemplate} from "@/email/register/reigsterEmailTemplate";
import {sendmail} from "@/app/api/utils/sendmail";


export async function POST(request: Request) {

  const requestData = registerQuestionFormData.merge(registerTestFormData).merge(registerProfileFormData);
  type reqType = z.infer<typeof requestData>;

  const introductionMapper :Omit<reqType, "q1"| "q2"|"q3"|"q4"| "q5"|"q6"|"q7"| "q8"> = {
    name: "entry.793832892",
    nickName: "entry.460075085",
    email: "entry.1923488374",
    phone: "entry.387190499",
    school: "entry.926643675",
    educationLevel: "entry.322541071",
    dicease: "entry.452950247",
    pr: "entry.1296838378",
    self_introduction: "entry.1921450680",
    why_join: "entry.278131495",
    expect: "entry.1581014036",
    experience: "entry.1178586347",
    goal: "entry.1624665163"
  };

  const questionMapper :Omit<reqType, "nickName"|"email"|"phone"|"school"|"educationLevel"|"dicease"|"pr"|"self_introduction"|"why_join"|"expect"|"experience"|"goal"| "q1" |"q2" |"q3"|"q5">
    & {q1:string, q2:string,q3:string,q5:string}= {
      name: "entry.349955612",
      q1: "entry.1702615270",
      q2: "entry.1367467624",
      q3: "entry.1029905077",
      q4: "entry.1883482560",
      q5: "entry.452136478",
      q6: "entry.2011508245",
      q7: "entry.239956739",
      q8: "entry.778848901"
    };


  const req = await request.json();
  try{
    const profileUrl = process.env.FORM_PROFILE_URL || "";
    const questionUrl = process.env.FORM_QUESTION_URL || "";
    const data = requestData.parse(req);

    const gInfoReq = new URLSearchParams();
    for (let k of Object.keys(introductionMapper)){
      let key = introductionMapper[k as keyof typeof introductionMapper];
      if (key){
        if(Array.isArray(data[k as keyof reqType])){
          for(let i of data[k as keyof reqType]){
            gInfoReq.append(key, (i as string));
          }
        }else {
          gInfoReq.append(key, (data[k as keyof reqType] as string));
        }
      }
    }

    const questionReq = new URLSearchParams();

    for(let k of Object.keys(questionMapper)){
      let key = questionMapper[k as keyof typeof questionMapper];
      if (key){
        if(Array.isArray(data[k as keyof reqType])){
          for(let i of data[k as keyof reqType]){
            questionReq.append(key, (i as string));
          }
        }else{
          questionReq.append(key, (data[k as keyof reqType] as string));
        }
      }
    }
    try{
      const info = await fetch(profileUrl+"&"+gInfoReq.toString());
      const question = await fetch(questionUrl+"&"+questionReq.toString());
      if (!info.ok || !question.ok){
        return NextResponse.json({error: "Failed send form to API"}, {status: 400});
      }
      const email = await getRegisterEmailTemplate({name: data.name, to: "sutichok46@gmail.com"});
      await sendmail(email);

      return NextResponse.json(data);
    }catch (e){
      return NextResponse.json(e, {status: 500});
    }

  }catch (e){
    return NextResponse.json(e, {status: 400});
  }
}
