import {personalInfoData as personalInfoDataFe } from "@/share/validation/personalInfoData";
import {uploadFile} from "@/app/api/utils/uploadFile";
import {decryptData} from "@/utils/AESEncryption";
import {NextRequest} from "next/server";
import {queryEmail} from "@/app/api/utils/queryEmail";
import {updateSheet} from "@/app/api/utils/appendSheet";
import {
  getBasicInfoEmailTemplate
} from "@/email/basicinfo/basicInfoEmailTemplate";
import {sendmail} from "@/app/api/utils/sendmail";
import {z} from "zod";

const personalInfoData = personalInfoDataFe.merge(z.object({
  stayDate: z.string()
}));

export async function POST(request: NextRequest) {
  const req = await request.formData();
  const rawData = Object.fromEntries(req.entries());
  const encryptedEmail = request.nextUrl.searchParams.get("emailToken");
  let email: string|undefined;
  let ind: number|undefined;
  let team: string|undefined;
  if(!encryptedEmail){
    return new Response("no email token", {status: 400});
  }
  try{
    email = decryptData(encryptedEmail);
    const data = await queryEmail(email);
    ind = data.ind+1;
    team = data.team;
    if(data.isRegistered){
      return new Response("email already registered", {status: 400});
    }
  }catch (err){
    return new Response(("Invalid email token").toString(), {status: 400});
  }

  if(!email){
    return new Response("no email", {status: 400});
  }

  const image = req.get("image") as unknown as File;
  try{
    const data = personalInfoData.parse(rawData);
    if(!image){
      return new Response("no image", {status: 400});
    }
    if(!(image.type === "image/jpeg" || image.type === "image/png")) {
      return new Response("image type not support", {status: 400});
    }
    try{
      const driveResponse = await uploadFile(image, data.fullname);
      let url = driveResponse.data.id;
      url = `https://drive.google.com/file/d/${url}/view`;
      await updateSheet([
        data.fullname,data.nicknameEn,data.nicknameTh,data.idCard,data.birthDate
        ,data.address,data.bloodType,data.religion,data.medic,data.allergyFood,data.shirtSize,
        data.parentName,data.parentPhone,data.relationship,data.emergencyName,data.emergencyPhone,data.isStay, data.stayDate,
        data.goBackTransportation,data.isStayProof,
        url ??""
      ],ind);
      const emailTemplate = await getBasicInfoEmailTemplate({name:data.fullname,to:email, team});
      sendmail(emailTemplate);
      return new Response(JSON.stringify(data), {status: 200});

    }catch (e){
      return new Response((e??"").toString(), {status: 500});
    }
  }catch (err){
    return new Response((err??"").toString(), {status: 400});
  }
}

export async function GET(request:NextRequest){

  const emailToken = request.nextUrl.searchParams.get("emailToken");
  if(!emailToken){
    return new Response("no email", {status: 400});
  }
  try{
    const email = decryptData(emailToken);
    const data = await queryEmail(email);
    if(data.isRegistered){
      return new Response("email already registered", {status: 400});
    }
    return new Response(JSON.stringify({name:data.name,email:data.email}), {status: 200});
  }catch (err){
    return new Response(("Invalid email token").toString(), {status: 400});
  }


}
