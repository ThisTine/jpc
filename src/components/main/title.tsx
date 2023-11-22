import CartoonDuck from "@/assets/cartoon-duck.svg";
import CartoonJigsaw from "@/assets/cartoon-jigsaw.svg";
import CartoonTamagochi from "@/assets/cartoon-tamagochi.svg";
import TopConfetti from "@/assets/confetti-top.svg";
import IgLogo from "@/assets/ig-logo-top.svg";
import InfoBg from "@/assets/info-bg.svg";
import InfoCloud from "@/assets/info-cloud.svg";
import InfoTitle from "@/assets/info-title.svg";
import InfoRope from "@/assets/info-rope.svg";
import JosephShadow from "@/assets/joseph-shadow.svg";
import Joseph from "@/assets/joseph-title.svg";
import LogoIcon from "@/assets/logo.svg";
import RegisterButton from "@/assets/register-button.svg";
import TitleBg from "@/assets/title-bg.svg";
import TitleIcon from "@/assets/title.svg";
import StarRed from "@/assets/star-red.svg";
import StarYellow from "@/assets/star-yellow.svg";
import { cls } from "@/utils/misc";
import Image from "next/image";

const Title = () => {
  return (
    <div className={cls("relative")}>
      <div className={cls("absolute flex justify-center w-full")}>
        <Image alt="confetti-top" src={TopConfetti} width={1522} />
      </div>
      <div className={cls("absolute top-[66px] right-[54px]")}>
        <Image alt="ig-logo-top" height={106} src={IgLogo} width={106} />
      </div>
      <Image alt="logo" height={105} src={LogoIcon} width={175} />
      <div className={cls("flex flex-col items-center relative")}>
        <p className={cls("text-[40px] font-[700] tracking-[2px] text-stroke")}>
          12-14 January 2024 @KMUTT
        </p>
        <Image
          alt="title-bg"
          className={cls("absolute -z-10 top-[80px] mr-[100px]")}
          src={TitleBg}
          width={1100}
        />
        <Image
          alt="title"
          className={cls("mt-16")}
          height={450}
          src={TitleIcon}
          width={1000}
        />
        <Image
          alt="joseph"
          className={cls("absolute -z-10 top-[40px] right-0")}
          src={Joseph}
          width={300}
        />
        <Image
          alt="register-button"
          className={cls("absolute top-[560px] hover:cursor-pointer")}
          src={RegisterButton}
          width={400}
        />
        <Image
          alt="cartoon-duck"
          className={cls("absolute top-[580px] -left-10 w-[400px]")}
          src={CartoonDuck}
        />
        <Image
          alt="cartoon-jigsaw"
          className={cls("absolute top-[480px] left-[250px]")}
          src={CartoonJigsaw}
        />
        <Image
          alt="cartoon-egg"
          className={cls("absolute top-[500px] right-[200px]")}
          src={CartoonTamagochi}
        />

        {/* info */}
        <Image alt="info-bg" className={cls("mt-28 -z-10")} src={InfoBg} />
        <Image
          alt="info-cloud"
          className={cls("absolute top-[850px] right-32")}
          src={InfoCloud}
        />
        <Image
          alt="joseph-shadow"
          className={cls("absolute top-[980px] left-24")}
          src={JosephShadow}
        />
        <div
          className={cls(
            "flex flex-col items-start absolute top-[1050px] right-44 w-2/4"
          )}
        >
          <Image alt="info-title" src={InfoTitle} />
          <div className="ml-10">
            <h5 className={cls("pr-4 mt-9")}>
              Junior Programmer Camp คือค่ายสำหรับน้อง ๆ เพื่อน ๆ
              ที่มีความสนใจในหลักสูตร Computer Science หรือ ComSci Inter{" "}
            </h5>
            <button
              className={cls(
                "mt-11 bg-[#FFD700] rounded-2xl border-2 border-black"
              )}
              type="button"
            >
              <div className={cls("py-4 px-16 font-semibold")}>สมัครเลย</div>
            </button>
          </div>
        </div>
        <Image
          alt="info-rope"
          className={cls("absolute bottom-[150px] right-24")}
          src={InfoRope}
        />
        <Image
          alt="star-yellow"
          className={cls("absolute bottom-0 left-6")}
          src={StarYellow}
        />
        <Image
          alt="star-red"
          className={cls("absolute -bottom-2 left-[430px]")}
          src={StarRed}
        />
        <Image
          alt="star-yellow"
          className={cls("absolute -bottom-8 right-[420px]")}
          src={StarYellow}
        />
        <Image
          alt="star-red"
          className={cls("absolute -bottom-5 right-20")}
          src={StarRed}
        />
      </div>
    </div>
  );
};

export default Title;
