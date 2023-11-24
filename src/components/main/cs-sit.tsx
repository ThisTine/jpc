import ConfettiBalloon from "@/assets/confetti-balloon.svg";
import CSImage from "@/assets/cs-image.svg";
import Confetti from "@/assets/confetti.svg";
import Cubic from "@/assets/cartoon-cubic.svg";
import Cassette from "@/assets/cartoon-cassette.svg";
import Tamagochi from "@/assets/cartoon-tamagochi.svg";
import { cls } from "@/utils/misc";
import { Modak } from "next/font/google";
import Image from "next/image";

const modak = Modak({ subsets: [], weight: "400" });

const CsSIT = () => {
  return (
    <div className={cls("mt-20 flex flex-col items-center relative")}>
      {/* Desktop */}
      <div className={cls("w-[90%] flex justify-between max-sm:hidden")}>
        <div className={cls("w-[60%]")}>
          <Image
            alt="confetti-balloon"
            className={cls("w-[95%]")}
            src={ConfettiBalloon}
          />
          <div className="ml-24">
            <p
              className={cls(
                modak.className,
                "text-[104px] mt-10 text-stroke-black-2px"
              )}
            >
              CS @ SIT
            </p>
            <p className={cls("text-[24px] mt-4 pr-20")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam..
            </p>
          </div>
        </div>
        <div className={cls("w-[500px] mt-9 static")}>
          <div
            className={cls(
              "absolute -z-10 translate-x-3 translate-y-2 rounded-full w-[500px] h-[500px] bg-[#ff6961]"
            )}
          />
          <Image alt="cs-image" className={cls("")} src={CSImage} />
        </div>
      </div>

      {/* Mobile */}
      <div className={cls("flex flex-col items-center md:hidden lg:hidden")}>
        <Image
          alt="confetti-balloon"
          className={cls("w-[95%] lg:w-1/2")}
          src={ConfettiBalloon}
        />
        <div className={cls("w-[380px] mt-16 static")}>
          <div
            className={cls(
              "absolute -z-10 translate-x-2 translate-y-3 rounded-full w-[380px] h-[380px] bg-[#ff6961]"
            )}
          />
          <Image alt="cs-image" className={cls("")} src={CSImage} />
        </div>
        <p
          className={cls(
            modak.className,
            "text-[54px] mt-10 text-stroke-black-2px"
          )}
        >
          CS @ SIT
        </p>
        <p className={cls("px-6 mt-4 text-center")}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam..
        </p>
      </div>

      <Image
        alt="confetti"
        className={cls("absolute bottom-6 -z-10 h-[50px] lg:h-auto")}
        src={Confetti}
      />
      <div className={cls("mt-10 w-full px-4 flex justify-between")}>
        <Image
          alt="cubic"
          className={cls("w-[104px] lg:w-[250px]")}
          src={Cubic}
        />
        <Image
          alt="cassette"
          className={cls("w-[104px] lg:w-[220px] lg:mt-16")}
          src={Cassette}
        />
        <Image
          alt="tamagochi"
          className={cls("w-[104px] lg:w-[250px]")}
          src={Tamagochi}
        />
      </div>
    </div>
  );
};

export default CsSIT;
