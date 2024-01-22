import { ibmBold, modak } from "@/utils/fonts";
import { cls } from "@/utils/misc";
import Image from "next/image";
import SponsorBg from "@/assets/sponsor.svg";
import Lungnoom from "@/assets/sponsor/lungnoom.png";
import Innovasive from "@/assets/sponsor/innovasive.png";
import AMD from "@/assets/sponsor/amd.png";
import CampHub from "@/assets/sponsor/camphub.png";
import ConnectedTech from "@/assets/sponsor/connectedtech.png";

export default function Phase3Sponsor() {
  return (
    <div
      className={cls(
        ibmBold.className,
        "flex flex-col items-center relative bg-[#DAE7A7] pt-32 xl:pt-0"
      )}
    >
      <Image
        alt="agenda"
        className="absolute -bottom-7 w-full xl:w-full"
        src={SponsorBg}
      />

      <div
        className="lef-0 z-10 flex w-full max-w-[1024px] flex-col items-center justify-center"
        style={{ transform: "translateY(-30%)" }}
      >
        <div className="flex justify-center" data-aos="zoom-out  z-10">
          <p
            className={cls(
              modak.className,
              "xl:text-[4.5vw] md:text-[56px] text-[36px] px-56 text-center text-white-stroke-black-3px"
            )}
          >
            Our sponsors
          </p>
        </div>
        <div className="mt-8 flex w-1/2 max-w-[500px] flex-col items-center justify-center gap-8 px-4 md:flex-row">
          <Image src={Lungnoom} alt="lungnoom" className="w-full flex-1" />
          <Image src={Innovasive} alt="innovasive" className="w-full flex-1" />
        </div>
        <div className="z-10 mt-8 flex w-1/2 flex-col items-center justify-center gap-8 md:flex-row">
          <Image src={AMD} alt="AMD" className="w-full flex-1 md:w-[60%]" />
          <Image
            src={CampHub}
            alt="Camphub"
            className="w-full flex-1 md:w-[80%]"
          />
        </div>
        <div className="z-10 mt-8 flex w-[60%] items-center justify-center gap-8 px-4">
          <Image
            src={ConnectedTech}
            alt="AMD"
            className="w-full max-w-[550px]"
          />
        </div>
      </div>
    </div>
  );
}
