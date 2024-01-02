import Mail from "nodemailer/lib/mailer";
import {EMAIL_FORM} from "@/share/constants";
// @ts-ignore
import EMAIL_TEMPLATE from "./index.html";
export const getBasicInfoEmailTemplate = async ({name,to,team}:{name:string,to:string,team:string}) => {
  const template = EMAIL_TEMPLATE.replace(/:name:/g, name).replace(/images\//g, "cid:images/").replace(/:team-name:/g,team);
  const bannerPath = process.cwd() + '/src/email/basicinfo/images/banner.png';
  const gameboyPath = process.cwd() + '/src/email/basicinfo/images/gameboy.png';
  const lineQrPath = process.cwd() + '/src/email/basicinfo/images/line-qr.jpeg';

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
        filename:'line-qr.jpeg',
        cid:'images/line-qr.jpeg',
        path:lineQrPath
      }
    ]
  } as Mail.Options;
};
