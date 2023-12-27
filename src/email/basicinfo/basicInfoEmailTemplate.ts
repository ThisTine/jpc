import Mail from "nodemailer/lib/mailer";
import {EMAIL_FORM} from "@/share/constants";
// @ts-ignore
import EMAIL_TEMPLATE from "./index.html";
export const getBasicInfoEmailTemplate = async ({name,to}:{name:string,to:string}) => {
  const template = EMAIL_TEMPLATE.replace(/:name:/g, name);
  const bannerPath = process.cwd() + '/src/email/basicinfo/images/banner.png';
  const gameboyPath = process.cwd() + '/src/email/basicinfo/images/gameboy.png';

  return {
    from: EMAIL_FORM,
    to,
    subject: "เราได้รับข้อมูลของท่านแล้ว !",
    html: template,
    attachments:[
      {
        filename:'banner.png',
        cid:'images/banner.png',
        path:bannerPath
      },
      {
        filename:'gameBoy.png',
        cid:'images/gameboy.png',
        path:gameboyPath
      }
    ]
  } as Mail.Options;
};
