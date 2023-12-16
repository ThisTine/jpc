import Image from "next/image";
import React from "react";
import AgendaBg from "@/assets/agenda.svg";
import AgendaLogo from "@/assets/agenda-logo.svg";
import { cls } from "@/utils/misc";
import { ibmBold } from "@/utils/fonts";
import { Modak } from "next/font/google";

const modak = Modak({ subsets: [], weight: "400" });

const Agenda = () => {
  return (
    <div
      className={cls(
        ibmBold.className,
        "flex flex-col items-center md:pt-0 pt-[70px] relative"
      )}
    >
      <div className="absolute top-[6%] flex justify-center">
        <Image
          alt="agenda-icon"
          className="absolute top-[-50%] mr-44 w-[100px] md:top-[-70%] md:mr-[70%] xl:mr-[80%] xl:w-[150px]"
          src={AgendaLogo}
        />
        <p
          className={cls(
            modak.className,
            "xl:text-[6.5vw] md:text-[70px] md:px-32 text-[42px] px-56 text-center leading-none text-yellow-stroke-black-2px"
          )}
        >
          Event Schedule
        </p>
      </div>
      <div
        className={cls(
          "flex flex-col items-end absolute md:top-[30%] top-[37%] md:mr-[64%] mr-[69%]"
        )}
      >
        <p className={cls("md:text-[2.5vw] text-[3vw] text-[#2A3D5D]")}>
          วันนี้ - 31 ธ.ค. 66
        </p>
        <p className="text-[4vw] md:text-[2.7vw]">รับสมัคร!</p>
      </div>
      <div
        className={cls(
          "flex flex-col items-start absolute leading-4 md:leading-none top-[45%] md:top-[41%] ml-[68%]"
        )}
      >
        <p className={cls("md:text-[2.5vw] text-[3vw] text-[#2A3D5D]")}>
          2 ม.ค. 67
        </p>
        <p className="text-[4vw] font-extrabold md:text-[2.7vw]">
          ประกาศผล
          <br />
          การคัดเลือก
        </p>
      </div>
      <div
        className={cls(
          "flex flex-col items-end absolute top-[54%] mr-[52%] md:top-[50%]"
        )}
      >
        <p className={cls("md:text-[2.5vw] text-[3vw] text-[#2A3D5D]")}>
          2 - 4 ม.ค. 67
        </p>
        <p className="text-[4vw] md:text-[2.7vw]">ยืนยันสิทธิ์</p>
      </div>
      <div
        className={cls(
          "flex flex-col items-start absolute top-[70%] ml-[45%] md:top-[68%] md:ml-[40%]"
        )}
      >
        <p className={cls("md:text-[2.5vw] text-[3vw] text-[#2A3D5D]")}>
          12 ม.ค. - 14 ม.ค. 67
        </p>
        <p className="text-[4vw] md:text-[2.7vw]">วันเข้าค่าย!</p>
      </div>
      <Image alt="agenda" className="xl:w-full" src={AgendaBg} />
    </div>
  );
};

export default Agenda;
