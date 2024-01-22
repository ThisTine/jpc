"use client";

import Cassette from "@/assets/cartoon-cassette.svg";
import Cubic from "@/assets/cartoon-cubic.svg";
import Tamagochi from "@/assets/cartoon-tamagochi.svg";
import ConfettiBalloon from "@/assets/confetti-balloon.svg";
import Balloon from "@/assets/balloon.svg";
import Confetti from "@/assets/confetti.svg";
import CSImage from "@/assets/cs-image.svg";
import { cls } from "@/utils/misc";
import Image from "next/image";
import { modak } from "@/utils/fonts";
import { useRef } from "react";

const Phase3CsSIT = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      id="about-sit"
      ref={ref}
      className={cls("pt-6 flex flex-col items-center relative transition")}
    >
      {/* Desktop */}
      <div className={cls("w-[90%] justify-between flex max-xl:hidden")}>
        <div className={cls("w-[60%]")}>
          <div className="relative flex">
            <Image
              alt="balloon"
              className={cls("w-[50%]")}
              src={Balloon}
              data-aos="zoom-in-right"
            />
            <Image
              alt="confetti-balloon"
              data-aos="zoom-in-left"
              className={cls("absolute ml-[30%]")}
              src={ConfettiBalloon}
            />
          </div>
          <div className="ml-24" data-aos="zoom-out-up">
            <p
              className={cls(
                modak.className,
                "text-[104px] mt-10 text-red-stroke-black-2px"
              )}
            >
              CS @ SIT
            </p>
            <p className={cls("text-[24px] mt-4 pr-20")}>
              CS@SIT ย่อมาจาก Computer Science at School of Information
              Technology คือหลักสูตรวิทยาการคอมพิวเตอร์ (หลักสูตรภาษาอังกฤษ)
              จากคณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
            </p>
          </div>
        </div>
        <div className={cls("w-[500px] mt-9 static")} data-aos="zoom-out-left">
          <div
            className={cls(
              "absolute -z-10 translate-x-3 translate-y-2 rounded-full w-[500px] h-[500px] bg-[#ff6961]"
            )}
          />
          <Image
            alt="cs-image"
            className={cls("w-[500px] h-[500px]")}
            src={CSImage}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className={cls("flex flex-col items-center xl:hidden")}>
        <div className="flex md:ml-20 md:w-full">
          <Image
            alt="balloon"
            className={cls("w-[50%] md:w-[40%]")}
            src={Balloon}
            data-aos="zoom-in-right"
          />
          <Image
            alt="confetti-balloon"
            className={cls("absolute ml-[25%] w-[75%] md:w-[50%] md:ml-[20%]")}
            src={ConfettiBalloon}
            data-aos="zoom-in-left"
          />
        </div>
        <div
          className={cls("w-[80%] mt-16 relative md:w-[540px]")}
          data-aos="zoom-out-up"
        >
          <div
            className={cls(
              "absolute -z-10 translate-x-2 translate-y-2.5 rounded-full w-[100%] h-full bg-[#ff6961]"
            )}
          />
          <Image alt="cs-image" className={cls("md:w-[540px]")} src={CSImage} />
        </div>
        <p
          className={cls(
            modak.className,
            "text-[54px] md:text-[84px] mt-10 text-red-stroke-black-2px"
          )}
          data-aos="zoom-out-up"
        >
          CS @ SIT
        </p>
        <p
          className={cls("px-6 mt-4 text-center md:text-xl md:px-28")}
          data-aos="zoom-out-up"
        >
          CS@SIT ย่อมาจาก Computer Science at School of Information Technology
          คือหลักสูตรวิทยาการคอมพิวเตอร์ (หลักสูตรภาษาอังกฤษ)
          จากคณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
        </p>
      </div>

      {/* <Image
        alt="confetti"
        className={cls("absolute bottom-6 z-0 h-[50px] md:h-auto")}
        src={Confetti}
        data-aos="zoom-in"
      /> */}
    </div>
  );
};

export default Phase3CsSIT;
