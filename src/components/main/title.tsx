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
import JpcTablet from "@/assets/jpc-tablet.svg";
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
      <div className={cls("absolute w-full flex justify-center")}>
        <Image
          alt="confetti-top"
          className={cls("max-sm:w-full object-fill")}
          src={TopConfetti}
        />
      </div>
      <div
        className={cls(
          "absolute xl:top-[66px] xl:right-[54px] top-[32px] right-6 z-10"
        )}
      >
        <Image
          alt="ig-logo"
          className={cls("w-[45px] md:w-[76px] xl:w-full cursor-pointer")}
          src={IgLogo}
        />
      </div>
      <Image
        alt="logo"
        className={cls("xl:w-[175px] xl:h-auto w-[110px] h-[75px]")}
        src={LogoIcon}
      />
      <div className={cls("flex flex-col items-center relative")}>
        <p
          className={cls(
            "text-[40px] md:text-3xl md:mt-16 xl:mt-0 font-[700] tracking-[2px] text-blue-stroke-white-4px max-sm:hidden"
          )}
        >
          12-14 January 2024 @KMUTT
        </p>
        <Image
          alt="title-bg"
          className={cls(
            "absolute -z-10 top-[80px] mr-[100px] hidden xl:block"
          )}
          src={TitleBg}
          width={1100}
        />
        <Image
          alt="title"
          className={cls("mt-16 hidden xl:block")}
          height={450}
          src={TitleIcon}
          width={1000}
        />
        <Image
          alt="jpc-mobile"
          className={cls("mt-6 max-sm:w-[450px] md:hidden xl:hidden")}
          src={JpcMobile}
        />
        <Image
          alt="jpc-tablet"
          className={cls("mt-6 hidden md:block xl:hidden")}
          src={JpcTablet}
        />
        <p
          className={cls(
            "text-[20px] font-[700] text-center tracking-[2px] text-blue-stroke-white-2px -rotate-6 md:hidden xl:hidden"
          )}
        >
          12-14 January 2024 @KMUTT
        </p>
        <Image
          alt="joseph"
          className={cls("absolute -z-10 top-[40px] right-0 hidden xl:block")}
          src={Joseph}
          width={300}
        />
        <Image
          alt="register-button"
          className={cls(
            "absolute xl:top-[560px] md:top-[40%] top-[520px] xl:w-[444px] md:w-[400px] w-[210px] hover:cursor-pointer"
          )}
          src={RegisterButton}
        />
        <Image
          alt="cartoon-duck"
          className={cls(
            "absolute xl:top-[580px] xl:-left-10 xl:w-[400px] md:w-[320px] md:top-[45%] w-[260px] -left-14 top-[620px]"
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
            "absolute xl:top-[480px] xl:left-[250px] xl:w-auto md:w-[190px] md:left-[9%] md:top-[35%] w-[120px] left-0 top-[500px]"
          )}
          src={CartoonJigsaw}
        />
        <Image
          alt="cartoon-egg"
          className={cls(
            "absolute xl:w-auto xl:top-[500px] xl:right-[200px] md:w-[250px] md:top-[40%] w-[120px] right-0 top-[430px]"
          )}
          src={CartoonTamagochi}
        />

        {/* info */}
        <Image
          alt="info-bg"
          className={cls(
            "md:mt-24 xl:mt-28 -z-10 max-sm:mt-48 h-[950px] md:h-[1100px] xl:h-auto object-cover"
          )}
          src={InfoBg}
        />
        <Image
          alt="info-cloud"
          className={cls(
            "absolute -z-10 top-[830px] w-[90%] md:w-[80%] md:top-[56%] md:right-4 xl:top-[850px] xl:right-32"
          )}
          src={InfoCloud}
        />
        <Image
          alt="joseph-shadow"
          className={cls(
            "absolute w-44 md:w-[240px] xl:w-auto top-[920px] md:top-[1250px] xl:top-[980px] md:left-12 xl:left-24"
          )}
          src={JosephShadow}
        />
        <div
          className={cls(
            "flex flex-col items-start absolute top-[1130px] md:top-[1250px] xl:top-[1050px] md:ml-40 xl:right-44 w-[90%] md:w-2/4"
          )}
        >
          <Image alt="info-title" className={cls("")} src={InfoTitle} />
          <div className="md:ml-10">
            <p className={cls("xl:pr-4 text-h5 mt-9")}>
              Junior Programmers Camp คือค่ายสำหรับน้อง ๆ  และเพื่อน ๆ
              <br/> ที่มีความสนใจในหลักสูตร Computer Science หรือ ComSci Inter
              <br/> ของมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรีโดยเป็นค่ายที่มีทั้ง <br/>
              กิจกรรมและ วิชาการที่จะทำให้เราได้รู้จักเพื่อนใหม่ ๆ และพี่ ๆ ชาวค่าย
            </p>
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
            "absolute xl:w-auto md:w-[15%] w-[20%] bottom-14 right-6 md:bottom-[180px] md:right-12 xl:right-24"
          )}
          src={InfoRope}
        />
        <Image
          alt="star-yellow"
          className={cls(
            "absolute -bottom-10 left-10 md:-bottom-4 md:left-2 xl:bottom-0 xl:left-6 w-28 md:w-[20%] xl:w-auto"
          )}
          src={StarYellow}
        />
        <Image
          alt="star-red"
          className={cls(
            "absolute -bottom-4 right-8 md:left-[40%] xl:-bottom-2 xl:left-[430px] max-sm:w-16"
          )}
          src={StarRed}
        />
        <Image
          alt="star-yellow"
          className={cls(
            "absolute -bottom-8 right-[420px] md:right-0 max-sm:hidden"
          )}
          src={StarYellow}
        />
        <Image
          alt="star-red"
          className={cls("absolute -bottom-5 right-20 hidden xl:block")}
          src={StarRed}
        />
      </div>
    </div>
  );
};

export default Title;
