import { modak } from "@/utils/fonts";
import { cls } from "@/utils/misc";
import React from "react";

const Phase3Footer = () => {
  return (
    <div className="z-10 my-8 flex flex-col items-center gap-6 px-8 text-center md:px-20 md:mt-20 md:gap-12">
      <p className="text-with-white-stroke-2px text-[28px] md:text-[44px] xl:text-[60px]">
        ขอขอบคุณน้อง ๆ ที่ให้ความสนใจ และเข้ามาเป็นหัวใจของค่าย{" "}
        <span className={cls(modak.className, "text-[36px] md:text-[74px]")}>
          <span className="text-[#FF6961]">J</span>
          <span className="text-[#FFD700]">P</span>
          <span className="text-[#87CEFA]">C</span>
          <span className="text-[#A5CE89]">16</span>
        </span>
      </p>
      <iframe
        className="h-[200px] w-[100%] md:h-[400px] xl:h-[60vh] xl:w-[60%]"
        src="https://www.youtube.com/embed/NXgdUGEpqQY?si=UjmxUPlvRC5FGPPx"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
      <p className="md:text-[28px]">
        พี่ ๆ ทุกคนหวังว่าน้อง ๆ จะได้รับความรู้และความสนุกกลับบ้านไปนะ
      </p>
    </div>
  );
};

export default Phase3Footer;
