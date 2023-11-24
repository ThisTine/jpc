import CartoonDuck from "@/assets/cartoon-duck.svg";
import CartoonJigsaw from "@/assets/cartoon-jigsaw.svg";
import CartoonTamagochi from "@/assets/cartoon-tamagochi.svg";
import TopConfetti from "@/assets/confetti-top.svg";
import IgLogo from "@/assets/ig-logo.svg";
import InfoBg from "@/assets/info-bg.svg";
import InfoCloud from "@/assets/info-cloud.svg";
import InfoRope from "@/assets/info-rope.svg";
import InfoTitle from "@/assets/info-title.svg";
import JosephShadow from "@/assets/joseph-shadow.svg";
import Joseph from "@/assets/joseph-title.svg";
import JpcMobile from "@/assets/jpc-mobile.svg";
import LogoIcon from "@/assets/logo.svg";
import RegisterButton from "@/assets/register-button.svg";
import Sparkle from "@/assets/sparkle.svg";
import StarRed from "@/assets/star-red.svg";
import StarYellow from "@/assets/star-yellow.svg";
import TitleBg from "@/assets/title-bg.svg";
import TitleIcon from "@/assets/title.svg";
import { cls } from "@/utils/misc";
import Image from "next/image";

const Title = () => {
  return (
    <div className={cls("relative")}>
      <div className={cls("absolute flex justify-center")}>
        <Image
          alt="confetti-top"
          className={cls("max-sm:w-full object-fill")}
          src={TopConfetti}
        />
      </div>
      <div
        className={cls(
          "absolute md:top-[66px] md:right-[54px] top-[32px] right-6 z-10"
        )}
      >
        <Image
          alt="ig-logo"
          className={cls("max-sm:w-[45px] cursor-pointer")}
          src={IgLogo}
        />
      </div>
      <Image
        alt="logo"
        className={cls("w-[175px] max-sm:w-[110px] max-sm:h-[75px]")}
        src={LogoIcon}
      />
      <div className={cls("flex flex-col items-center relative")}>
        <p
          className={cls(
            "text-[40px] font-[700] tracking-[2px] text-blue-stroke-white-4px max-sm:hidden"
          )}
        >
          12-14 January 2024 @KMUTT
        </p>
        <Image
          alt="title-bg"
          className={cls("absolute -z-10 top-[80px] mr-[100px] max-sm:hidden")}
          src={TitleBg}
          width={1100}
        />
        <Image
          alt="title"
          className={cls("mt-16 max-sm:hidden")}
          height={450}
          src={TitleIcon}
          width={1000}
        />
        <Image
          alt="jpc-mobile"
          className={cls("mt-6 max-sm:w-[450px] md:hidden lg:hidden")}
          src={JpcMobile}
        />
        <p
          className={cls(
            "text-[20px] font-[700] text-center tracking-[2px] text-blue-stroke-white-2px -rotate-6 md:hidden lg:hidden"
          )}
        >
          12-14 January 2024 @KMUTT
        </p>
        <Image
          alt="joseph"
          className={cls("absolute -z-10 top-[40px] right-0 max-sm:hidden")}
          src={Joseph}
          width={300}
        />
        <Image
          alt="register-button"
          className={cls(
            "absolute top-[560px] hover:cursor-pointer max-sm:w-[210px] max-sm:top-[520px]"
          )}
          src={RegisterButton}
        />
        <Image
          alt="cartoon-duck"
          className={cls(
            "absolute top-[580px] -left-10 w-[400px] max-sm:w-[260px] max-sm:-left-14 max-sm:top-[620px]"
          )}
          src={CartoonDuck}
        />
        <Image
          alt="sparkle"
          className={cls("absolute top-[650px] right-8 md:hidden")}
          src={Sparkle}
        />

        <Image
          alt="cartoon-jigsaw"
          className={cls(
            "absolute top-[480px] left-[250px] max-sm:w-[120px] max-sm:left-0 max-sm:top-[500px]"
          )}
          src={CartoonJigsaw}
        />
        <Image
          alt="cartoon-egg"
          className={cls(
            "absolute top-[500px] right-[200px] max-sm:w-[120px] max-sm:right-[0px] max-sm:top-[430px]"
          )}
          src={CartoonTamagochi}
        />

        {/* info */}
        <Image
          alt="info-bg"
          className={cls(
            "mt-28 -z-10 max-sm:mt-48 max-sm:h-[950px] max-sm:object-cover"
          )}
          src={InfoBg}
        />
        <Image
          alt="info-cloud"
          className={cls(
            "absolute top-[830px] max-sm:w-[90%] md:top-[850px] md:right-32"
          )}
          src={InfoCloud}
        />
        <Image
          alt="joseph-shadow"
          className={cls(
            "absolute top-[920px] max-sm:w-44 md:top-[980px] md:left-24"
          )}
          src={JosephShadow}
        />
        <div
          className={cls(
            "flex flex-col items-start absolute top-[1130px] md:top-[1050px] md:right-44 w-[90%] md:w-2/4"
          )}
        >
          <Image alt="info-title" className={cls("")} src={InfoTitle} />
          <div className="md:ml-10">
            <h5 className={cls("md:pr-4 mt-9")}>
              Junior Programmer Camp คือค่ายสำหรับน้อง ๆ เพื่อน ๆ
              ที่มีความสนใจในหลักสูตร Computer Science หรือ ComSci Inter{" "}
            </h5>
            <button
              className={cls(
                "mt-11 max-sm:w-full bg-[#FFD700] rounded-2xl border-2 border-black"
              )}
              type="button"
            >
              <div className={cls("py-4 px-16 font-semibold")}>สมัครเลย</div>
            </button>
          </div>
        </div>
        <Image
          alt="info-rope"
          className={cls(
            "absolute max-sm:w-[20%] bottom-14 right-6 md:bottom-[150px] md:right-24"
          )}
          src={InfoRope}
        />
        <Image
          alt="star-yellow"
          className={cls(
            "absolute -bottom-10 left-10 md:bottom-0 md:left-6 max-sm:w-28"
          )}
          src={StarYellow}
        />
        <Image
          alt="star-red"
          className={cls(
            "absolute -bottom-4 right-8 md:-bottom-2 md:left-[430px] max-sm:w-16"
          )}
          src={StarRed}
        />
        <Image
          alt="star-yellow"
          className={cls("absolute -bottom-8 right-[420px] max-sm:hidden")}
          src={StarYellow}
        />
        <Image
          alt="star-red"
          className={cls("absolute -bottom-5 right-20 max-sm:hidden")}
          src={StarRed}
        />
      </div>
    </div>
  );
};

export default Title;
