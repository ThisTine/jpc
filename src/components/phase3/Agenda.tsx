import Image from "next/image";
import React from "react";
import AgendaBg from "@/assets/agenda-phase3.svg";
import AdmissionMobile from "@/assets/admission-title-mobile.svg";
import AdmissionDesktop from "@/assets/admission-title-desktop.svg";
import { cls } from "@/utils/misc";
import { ibmBold } from "@/utils/fonts";
import { modak } from "@/utils/fonts";

const Phase3Agenda = () => {
  return (
    <div
      className={cls(
        ibmBold.className,
        "flex flex-col items-center pt-[70px] relative mt-[50px] xl:pt-0"
      )}
    >
      <div
        className="absolute top-0 mt-10 flex justify-center px-[54px]"
        data-aos="zoom-out"
      >
        <Image
          alt="admission-icon"
          className="md:hidden"
          src={AdmissionMobile}
          data-aos="zoom-out"
          data-aos-delay="250"
        />
        <Image
          alt="admission-icon"
          className="hidden md:block"
          src={AdmissionDesktop}
          data-aos="zoom-out"
          data-aos-delay="250"
        />
      </div>
      <div
        className={cls(
          "flex flex-col items-end absolute md:top-[40s%] top-[45%] md:mr-[70%] mr-[70%]"
        )}
        data-aos="zoom-out"
      >
        <p className={cls("md:text-[2.5vw] text-[2.5vw] text-[#2A3D5D]")}>
          19 ธ.ค. 66 - 19 ม.ค. 67
        </p>
        <p className="text-[4vw] md:text-[2.7vw]">Portfolio#2</p>
      </div>
      <div
        className={cls(
          "flex flex-col items-start absolute leading-4 md:leading-none top-[55%] md:top-[50%] ml-[75%]"
        )}
        data-aos="zoom-out"
      >
        <p className={cls("md:text-[2.5vw] text-[2.25vw] text-[#2A3D5D]")}>
          29 ม.ค. 67 - 26 ก.พ. 67
        </p>
        <p className="text-[4vw] font-extrabold md:text-[2.7vw]">Portfolio#3</p>
      </div>
      <div
        className={cls(
          "flex flex-col items-end absolute top-[65%] mr-[60%] md:top-[60%]"
        )}
        data-aos="zoom-out"
      >
        <p className={cls("md:text-[2.5vw] text-[2.5vw] text-[#2A3D5D]")}>
          27 ก.พ. 67 - 1 มี.ค. 67
        </p>
        <p className="text-[4vw] md:text-[2.7vw]">Portfolio#4</p>
      </div>
      <Image alt="agenda" className="xl:w-full" src={AgendaBg} />
    </div>
  );
};

export default Phase3Agenda;
