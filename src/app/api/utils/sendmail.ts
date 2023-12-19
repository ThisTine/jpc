import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export const sendmail = async (option: Mail.Options)=> {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST || "",
    port: parseInt(process.env.MAIL_PORT || ""),
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  return await transporter.sendMail(option);
};
