import type { Metadata } from "next";
import "./globals.css";
import { cls } from "@/utils/misc";
import {ibm} from "@/utils/fonts";


export const metadata: Metadata = {
  title: "Junior Programmers Camp #16",
  description: "Junior Programmers Camp คือค่ายสำหรับน้อง ๆ และเพื่อน ๆ ที่มีความสนใจในหลักสูตร Computer Science หรือ ComSci Inter ของมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  icons: "/icon.png",
  openGraph:{
    type: "website",
    locale: "th_TH",
    url: "https://jpc16.sit.kmutt.ac.th/",
    title: "Junior Programmers Camp #16",
    images: [
      {
        url: "https://jpc16.thistine.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Junior Programmers Camp #16",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cls(ibm.className, "bg-[#EFF2F2]")}>{children}</body>
    </html>
  );
}
