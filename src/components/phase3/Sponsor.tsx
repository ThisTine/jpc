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
        "flex flex-col items-center md:pt-0 relative bg-[#DAE7A7]"
      )}
    >
      <Image
        alt="agenda"
        className="absolute -bottom-7 w-full xl:w-full"
        src={SponsorBg}
      />

      <div
        className="w-full max-w-[1024px] flex flex-col justify-center items-center lef-0 w-full z-10"
        style={{ transform: "translateY(-30%)" }}
      >
        <div className="flex justify-center" data-aos="zoom-out  z-10">
          <p
            className={cls(
              modak.className,
              "xl:text-[4.5vw] md:text-[56px] text-[36px] px-56 text-center text-white-stroke-black-3px"
            )}
          >
            Our Sponsor
          </p>
        </div>
        <div className="flex w-full gap-8 justify-center items-center mt-8 px-4 max-w-[500px]">
          <Image src={Lungnoom} alt="lungnoom" className="w-full flex-1" />
          <Image src={Innovasive} alt="innovasive" className="w-full flex-1" />
        </div>
        <div className="flex w-full gap-8 justify-center items-center mt-8 z-10">
          <Image src={AMD} alt="AMD" />
          <Image src={CampHub} alt="Camphub" />
        </div>
        <div className="flex w-full gap-8 justify-center items-center mt-8 px-4 z-10">
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
