"use client";
import Cassette from "@/assets/cartoon-cassette.svg";
import CartoonDuck from "@/assets/cartoon-duck.svg";
import Cloud from "@/assets/cloud.svg";
import ConfettiLine from "@/assets/confetti-line.svg";
import Confetti from "@/assets/confetti.svg";
import EmailLogo from "@/assets/email-logo.svg";
import FacbookLogo from "@/assets/facebook-logo.svg";
import FaqBottomBg from "@/assets/faq-bottom-bg.svg";
import FaqTopBg from "@/assets/faq-top-bg.svg";
import IgLogo from "@/assets/ig-logo.svg";
import Joseph from "@/assets/joseph.svg";
import TreeBg from "@/assets/tree-bg.svg";
import { cls } from "@/utils/misc";
import { Modak } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const modak = Modak({ subsets: [], weight: "400" });

const faqs = [
  {
    title: "ค่ายจัดเมื่อไหร่ ?",
    description:
      "JPC16 ของเราจะจัดขึ้นในวันที่ 12 - 14 มกราคม 2567 เป็นค่าย 3 วัน 2 รูปแบบค้างคืนที่มหาวิทยาลัย เขียนโค้ดไม่เป็น แต่สนใจสายคอมพิวเตอร์ สามารถสมัครเข้าค่ายได้มั้ย? ได้แน่นอนครับ พีโจเซฟยินดีต้อนรับน้อง ๆ ที่มีความสนใจและแพชชั่นในสายอาชีพโปรแกรมเมอร์ คอมพิวเตอร์ และอื่น ๆ ที่เกี่ยวข้อง หากน้อง ๆ ยังไม่มีประสบการณ์ในการเขียนโค้ด แต่สามารถเรียนรู้ได้ก็สมัครได้เลยครับ",
  },
  {
    title: "ค่าย JPC16 มีค่าใช้จ่ายหรือไม่ ?",
    description:
      "มีค่าใช้จ่าย 450 บาท โดยจะครอบคลุมค่าที่พัก ค่าอาหาร ขนมและเครื่องดื่ม และค่าเสื้อค่าย โดยน้อง ๆ จะต้องชำระหลังประกาศผลการคัดเลือกและยืนยันสิทธิ์เรียบร้อยครับผม !",
  },
  {
    title: "ค่ายจัดที่ไหน ?",
    description:
      "ค่ายของเรา จัดขึ้นที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (บางมด) ซึ่งเป็นที่ตั้งของคณะของเราด้วยนั่นเอง ดังนั้นมั่นใจได้เลยว่าตลอด 3 วัน 2 คืน น้อง ๆ จะได้รู้จักคณะของเรามากขึ้นแน่นอน",
  },
  {
    title: "คุณสมบัติของน้องค่ายมีอะไรบ้าง ?",
    description:
      "พี่โจเซฟมองหาน้อง ๆ ที่กำลังศึกษาในระดับชั้นมัธยมศึกษาตอนปลายหรือเทียบเท่า (ปวช GED หรือจะ Gap year พี่โจเซฟก็รับนะ ) โดยเป็นน้อง ๆ ที่สนใจในหลักสูตร Computer Science หรือสายงานอื่น ๆ ด้านคอมพิวเตอร์ครับผม",
  },
  {
    title: "ประกาศผลที่ไหน ?",
    description:
      "พี่โจเซฟจะประกาศรายชื่อน้องค่ายในเว็บไซต์ JPC16 นี้ในวันที่ 23 ธันวาคม 2566 โดยน้อง ๆ สามารถเช็คผลการเข้าร่วมของตนเองได้จากโค้ดที่ได้รับทางอีเมลหลังสมัครเสร็จเลยครับผม",
  },
];

const FaqContact = () => {
  return (
    <div className={cls("relative bg-[#FF6961]")}>
      <div className="relative pt-24 lg:pt-28">
        <div className="bg-[#EFF2F2]">
          <Image
            alt="faq-contact-bg"
            className={cls(
              "absolute top-[68px] h-[28px] object-cover -z-500 w-full lg:h-[96px] lg:top-0 lg:mt-4"
            )}
            src={FaqTopBg}
          />
          <Image
            alt="cloud"
            className={cls(
              "absolute z-0 top-6 -left-8 w-48 lg:w-80 lg:left-32 lg:-top-16"
            )}
            src={Cloud}
          />
          <div
            className={cls(
              "pt-3 pb-10 w-full flex flex-col items-center lg:pb-20"
            )}
          >
            <p
              className={cls(
                modak.className,
                "text-[84px] text-center text-green-stroke-white-3px relative lg:text-[96px]"
              )}
            >
              FAQS
            </p>
            <div
              className={cls("px-8 mt-4 flex flex-col space-y-8 lg:w-[60%]")}
            >
              {faqs.map((faq, index) => (
                <CollapsedCard
                  key={index}
                  title={faq.title}
                  description={faq.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          alt="faq-contact-bg"
          className={cls("h-[150px] object-cover lg:h-full")}
          src={FaqBottomBg}
        />
        <Image
          alt="confetti"
          className={cls(
            "absolute h-[50px] w-full object-cover bottom-16 lg:h-auto lg:object-none lg:bottom-36"
          )}
          src={Confetti}
        />
        <Image
          alt="cartoon-duck"
          className={cls(
            "absolute w-[120px] bottom-6 right-2 lg:w-[300px] lg:bottom-40"
          )}
          src={CartoonDuck}
        />
        <Image
          alt="cartoon-cassette"
          className={cls("absolute w-[210px] -bottom-20 left-24 max-sm:hidden")}
          src={Cassette}
        />
        <Image
          alt="confetti-line"
          className={cls(
            "absolute top-[95px] h-[150px] w-full object-cover lg:h-auto lg:object-none lg:top-40"
          )}
          src={ConfettiLine}
        />
      </div>
      <div className={cls("bg-[#A5CE89] h-[500px] lg:h-[800px]")}>
        <div
          className={cls(
            "h-full flex flex-col justify-center items-center space-y-7 pb-40"
          )}
        >
          <p
            className={cls(
              modak.className,
              "text-[40px] text-center text-white-stroke-black-3px relative lg:text-[96px]"
            )}
          >
            Contact us
          </p>
          <div className={cls("flex space-x-7 lg:space-x-12")}>
            <Image
              alt="ig-logo"
              className={cls("w-[40px] h-auto lg:w-[106px]")}
              src={IgLogo}
            />
            <Image
              alt="facebook-logo"
              className={cls("w-[40px] h-auto lg:w-[106px]")}
              src={FacbookLogo}
            />
            <Image
              alt="email-logo"
              className={cls("w-[40px] h-auto lg:w-[106px]")}
              src={EmailLogo}
            />
          </div>
        </div>
        <Image
          alt="tree-bg"
          className={cls("absolute bottom-0 ml-10 pb-8 lg:w-[70%]")}
          src={TreeBg}
        />
        <Image
          alt="joseph"
          className={cls("absolute -bottom-20 right-0 w-[25%] max-sm:hidden")}
          src={Joseph}
        />
      </div>
    </div>
  );
};

export default FaqContact;

type CollapsedCardProps = {
  title: string;
  description: string;
};

const CollapsedCard = ({ title, description }: CollapsedCardProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div>
      <div
        className={cls("flex justify-between cursor-pointer")}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <p className={cls("text-xl pr-6 lg:text-3xl")}>{title}</p>
        {isCollapsed ? <ExpandMore /> : <ExpandLess />}
      </div>
      <div className={cls("mt-6")}>
        <p
          className={cls(
            isCollapsed && "hidden",
            "text-base lg:text-2xl lg:py-4"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const ExpandMore = () => {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="#FF6961"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ExpandLess = () => {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="#FF6961"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
