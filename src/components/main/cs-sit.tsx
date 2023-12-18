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

const CsSIT = () => {
  return (
    <div className={cls("mt-20 flex flex-col items-center relative")}>
      {/* Desktop */}
      <div className={cls("w-[90%] justify-between flex max-xl:hidden")}>
        <div className={cls("w-[60%]")}>
          <div className="relative flex">
            <Image alt="balloon" className={cls("w-[50%]")} src={Balloon} />
            <Image
              alt="confetti-balloon"
              className={cls("absolute ml-[30%]")}
              src={ConfettiBalloon}
            />
          </div>
          <div className="ml-24">
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
        <div className={cls("w-[500px] mt-9 static")}>
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
          />
          <Image
            alt="confetti-balloon"
            className={cls("absolute ml-[25%] w-[75%] md:w-[50%] md:ml-[20%]")}
            src={ConfettiBalloon}
          />
        </div>
        <div className={cls("w-[80%] mt-16 relative md:w-[540px]")}>
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
        >
          CS @ SIT
        </p>
        <p className={cls("px-6 mt-4 text-center md:text-xl md:px-28")}>
          CS@SIT ย่อมาจาก Computer Science at School of Information Technology
          คือหลักสูตรวิทยาการคอมพิวเตอร์ (หลักสูตรภาษาอังกฤษ)
          จากคณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
        </p>
      </div>

      <Image
        alt="confetti"
        className={cls("absolute bottom-6 -z-10 h-[50px] md:h-auto")}
        src={Confetti}
      />
      <div className={cls("mt-10 w-full px-4 flex justify-between")}>
        <Image
          alt="cubic"
          className={cls("w-[100px] xl:w-[250px]")}
          src={Cubic}
        />
        <Image
          alt="cassette"
          className={cls("w-[100px] xl:w-[220px] xl:mt-16")}
          src={Cassette}
        />
        <Image
          alt="tamagochi"
          className={cls("w-[96px] xl:w-[250px]")}
          src={Tamagochi}
        />
      </div>
    </div>
  );
};

export default CsSIT;
