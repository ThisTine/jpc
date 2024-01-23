"use client";
import Cassette from "@/assets/cartoon-cassette.svg";
import CartoonDuck from "@/assets/cartoon-duck.svg";
import Cloud from "@/assets/cloud.svg";
import Cubic from "@/assets/cartoon-cubic.svg";
import Tamagochi from "@/assets/cartoon-tamagochi.svg";
import ConfettiLine from "@/assets/confetti-line.svg";
import Confetti from "@/assets/confetti.svg";
import EmailLogo from "@/assets/email-logo.svg";
import FacbookLogo from "@/assets/facebook-logo.svg";
import FaqBottomBg from "@/assets/faq-bottom-bg.svg";
import FaqTopBg from "@/assets/faq-top-bg.svg";
import IgLogo from "@/assets/ig-logo.svg";
import Joseph from "@/assets/joseph.svg";
import TreeBg from "@/assets/tree-bg.svg";
import useAnimationParallax from "@/hooks/useAnimationParallax";
import { cls } from "@/utils/misc";
import { Modak } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Balloon from "@/assets/balloon.svg";

const modak = Modak({ subsets: [], weight: "400" });

const faqs = [
  {
    title: "ค่ายจัดเมื่อไหร่ ?",
    description:
      "JPC16 ของเราจะจัดขึ้นในวันที่ 12 - 14 มกราคม 2567 เป็นค่าย 3 วัน ไป - กลับ ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี วิทยาเขตบางมด",
  },
  {
    title:
      " เขียนโค้ดไม่เป็น แต่สนใจสายคอมพิวเตอร์สามารถสมัครเข้าค่ายได้มั้ย ?",
    description:
      "ได้แน่นอนครับ พี่โจเซฟยินดีต้อนรับน้อง ๆ ที่มีความสนใจและแพชชั่นในสายอาชีพโปรแกรมเมอร์ คอมพิวเตอร์ และอื่น ๆ ที่เกี่ยวข้อง หากน้อง ๆ ยังไม่มีประสบการณ์ในการเขียนโค้ด แต่สามารถเรียนรู้ได้ ก็สมัครได้เลยครับ !",
  },
  {
    title: "ค่าย JPC16 มีค่าใช้จ่ายหรือไม่ ?",
    description:
      "มีค่าใช้จ่าย 350 บาทครับผม โดยค่าใช้จ่ายนี้จะครอบคลุม ค่าเสื้อค่าย ค่าประกันสุขภาพ ค่าอาหารกลางวัน ขนมและเครื่องดื่มตลอดทั้งวัน ( ไม่รวมค่าที่พัก หากต้องการพักค้างคืนในหอพักมหาวิทยาลัยที่พี่ ๆ จัดหาไว้ให้ มีค่าใช้จ่ายเพิ่มเติม  คืนละ 200 บาท ) โดยน้อง ๆ จะต้องชำระหลังประกาศ ผลการคัดเลือกและยืนยันสิทธิ์การเข้าค่ายเรียบร้อยครับผม !",
  },
  {
    title: "คุณสมบัติของน้องค่ายมีอะไรบ้าง ?",
    description:
      "พี่โจเซฟมองหาน้อง ๆ ที่กำลังศึกษาในระดับชั้นมัธยมศึกษาตอนปลายหรือเทียบเท่า (ปวช. GED หรือจะ Gap year พี่โจเซฟก็รับนะ ) โดยเป็นน้อง ๆ ที่สนใจในหลักสูตร Computer Science หรือสายงานอื่น ๆ ด้านคอมพิวเตอร์ครับผม",
  },
  {
    title: "สามารถพักค้างคืนได้หรือไม่ ?",
    description:
      "เนื่องจาก JPC16 ของเราเป็นค่ายไป - กลับ ไม่มีกิจกรรมกลางคืน หลังเสร็จสิ้นกิจกรรมในตอนเย็น น้อง ๆ ก็สามารถแยกย้ายกลับบ้านได้เลย แต่หากน้อง ๆ ไม่สะดวกในการไปกลับตลอด 3 วัน สามารถแจ้งความต้องการในการพักที่หอพักใน มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ได้ในแบบฟอร์มยืนยันตัวตน โดยมีค่าใช้จ่ายเพิ่มเติมนอกเหนือจากค่าค่าย คืนละ 200 บาท ต่อคน โดยพี่ ๆ ค่ายจะอำนวยความสะดวกให้กับน้อง ๆ ในการจองที่พักให้ครับผม",
  },
  {
    title: "มีประกาศนียบัตรให้ไหม ?",
    description:
      "ค่ายของเรามีให้มากกว่านั้นอีกครับ !  แต่พี่โจเซฟขออุบเป็นความลับก่อนน้า ถ้าอยากรู้ต้องสมัครเข้ามาเป็นน้องค่ายของเราแล้วล่ะครับ บอกเลยว่า ไม่ผิดหวังแน่นอน ! และแน่นอนว่า มีประกาศนียบัตรให้ครับผม โดยน้องๆจะต้องเข้าร่วมกิจกรรมครบทั้งสามวัน โดยเข้าร่วมกิจกรรมวิชาการและกิจกรรมเกินกว่า 80 % ครับผม",
  },
];

const Phase3FaqContact = () => {
  const cloudAnimatedRef = useAnimationParallax(-250, 100);

  return (
    <div className="relative mt-16">
      <div className="relative">
        <div
          className={cls("absolute -top-4 w-full px-4 flex justify-between")}
        >
          <Image
            alt="cubic"
            className={cls("w-[100px] xl:w-[250px]")}
            src={Cubic}
            data-aos="flip-down"
          />
          <Image
            alt="cassette"
            className={cls("w-[100px] xl:w-[220px] xl:mt-16")}
            src={Cassette}
            data-aos="flip-down"
          />
          <Image
            alt="tamagochi"
            className={cls("w-[96px] xl:w-[250px]")}
            src={Tamagochi}
            data-aos="flip-down"
          />
        </div>
        <Image
          alt="faq-contact-bg"
          className={cls("h-[150px] object-cover xl:h-full xl:w-full")}
          src={FaqBottomBg}
        />
        <Image
          alt="confetti"
          className={cls(
            "absolute h-[50px] w-full object-cover bottom-16 xl:h-auto xl:object-none xl:bottom-36"
          )}
          src={Confetti}
          data-aos="zoom-out-up"
        />
        <Image
          alt="confetti-line"
          className={cls(
            "absolute top-[95px] h-[150px] w-full object-cover xl:h-auto xl:object-none xl:top-40"
          )}
          src={ConfettiLine}
          data-aos="zoom-out-up"
        />
      </div>
      <div className={cls("bg-[#A5CE89] h-[500px] xl:h-[800px]")}>
        <div
          className={cls(
            "h-full flex flex-col justify-center items-center space-y-7 pb-40"
          )}
          data-aos="zoom-out"
        >
          <p
            className={cls(
              modak.className,
              "text-[40px] text-center text-white-stroke-black-3px relative md:text-[60px] xl:text-[96px]"
            )}
          >
            Contact us
          </p>
          <div className={cls("flex space-x-7 xl:space-x-12 z-10")}>
            <Link href="https://www.instagram.com/jpc_sitkmutt" target="_blank">
              <Image
                alt="ig-logo"
                className={cls(
                  "z-10 w-[40px] h-auto md:w-[70px] xl:w-[106px] cursor-pointer"
                )}
                src={IgLogo}
                data-aos="zoom-out-up"
              />
            </Link>
            <Link href="https://www.facebook.com/jpckmutt" target="_blank">
              <Image
                alt="facebook-logo"
                className={cls(
                  "z-10 w-[40px] h-auto md:w-[70px] xl:w-[106px] cursor-pointer"
                )}
                src={FacbookLogo}
                data-aos="zoom-out-up"
                data-aos-delay="100"
              />
            </Link>
            <Image
              alt="email-logo"
              className={cls(
                "z-10 w-[40px] h-auto md:w-[70px] xl:w-[106px] cursor-pointer"
              )}
              src={EmailLogo}
              data-aos="zoom-out-up"
              data-aos-delay="200"
            />
          </div>
        </div>
        <Image
          alt="tree-bg"
          data-aos="zoom-out-up"
          className={cls(
            "absolute bottom-0 ml-10 pb-8 -z-10 md:ml-6 md:w-[70%] z-10"
          )}
          src={TreeBg}
        />
        <Image
          alt="joseph"
          className={cls(
            "absolute right-0 w-[25%] md:-bottom-12 xl:-bottom-20 hidden md:block"
          )}
          data-aos="zoom-out-left"
          src={Joseph}
        />
      </div>
    </div>
  );
};

export default Phase3FaqContact;
