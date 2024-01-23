"use client";
import registerButtonAnimation from "@/assets/animations/register_button.json";
import CartoonDuck from "@/assets/cartoon-duck.svg";
import CartoonJigsaw from "@/assets/cartoon-jigsaw.svg";
import CartoonTamagochi from "@/assets/cartoon-tamagochi.svg";
import TopConfetti from "@/assets/confetti-top.svg";
import IgLogo from "@/assets/ig-logo.svg";
import InfoCloud from "@/assets/info-cloud.svg";
import InfoRope from "@/assets/info-rope.svg";
import InfoTitle from "@/assets/info-title.svg";
import JosephShadow from "@/assets/joseph-shadow.svg";
import Joseph from "@/assets/joseph-title.svg";
import JpcMobile from "@/assets/jpc-mobile.svg";
import JpcTablet from "@/assets/jpc-tablet.svg";
import LogoIcon from "@/assets/logo.svg";
import Sparkle from "@/assets/sparkle.svg";
import StarRed from "@/assets/star-red.svg";
import StarYellow from "@/assets/star-yellow.svg";
import TitleBg from "@/assets/title-bg.svg";
import TitleIcon from "@/assets/title.svg";
import useAnimationParallax from "@/hooks/useAnimationParallax";
import { cls } from "@/utils/misc";
import { motion } from "framer-motion";
import lottie, { AnimationItem } from "lottie-web";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Title = () => {
  const router = useRouter();
  const buttonContainer = useRef<HTMLDivElement | null>(null);
  const starYellow = useAnimationParallax(-500, 100, 1);
  const starRed = useAnimationParallax(-500, 100, 0.5);
  const starYellow2 = useAnimationParallax(-250, 100, 1);
  const starRed2 = useAnimationParallax(-150, 100, 0.5);
  const [registerButtonController, setRegisterButtonController] =
    useState<AnimationItem | null>(null);
  useEffect(() => {
    const b = lottie.loadAnimation({
      container: buttonContainer.current as Element,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: registerButtonAnimation,
    });
    setRegisterButtonController(b);
    return () => {
      lottie.destroy();
      setRegisterButtonController(null);
    };
  }, []);

  return (
    <div className={cls("relative")}>
      <div className={cls("absolute w-full flex justify-center")}>
        <Image
          data-aos="zoom-out-down"
          alt="confetti-top"
          className={cls("max-sm:w-full object-fill")}
          src={TopConfetti}
        />
      </div>
      <div
        className={cls(
          "absolute xl:top-[66px] xl:right-[54px] top-[32px] right-6 z-10"
        )}
        data-aos="zoom-out-left"
      >
        <Link href="https://www.instagram.com/jpc_sitkmutt" target="_blank">
          <Image
            alt="ig-logo"
            className={cls("w-[45px] md:w-[76px] xl:w-full cursor-pointer")}
            src={IgLogo}
          />
        </Link>
      </div>
      <Image
        alt="logo"
        data-aos="zoom-out-right"
        className={cls("xl:w-[175px] xl:h-auto w-[110px] h-[75px]")}
        src={LogoIcon}
      />
      <div className={cls("flex flex-col items-center relative")}>
        <div
          className={cls(
            "text-[40px] md:text-3xl md:mt-16 xl:mt-0 font-[700] tracking-[2px] text-blue-stroke-white-4px max-sm:hidden"
          )}
          data-aos="zoom-out-up"
          data-aos-delay="100"
        >
          12-14 January 2024 @KMUTT
        </div>
        <Image
          alt="title-bg"
          data-aos="zoom-out-up"
          className={cls("absolute top-[80px] mr-[100px] hidden xl:block")}
          src={TitleBg}
          width={1100}
        />
        <Image
          alt="title"
          data-aos="zoom-out-up"
          className={cls("mt-16 hidden xl:block")}
          height={450}
          src={TitleIcon}
          width={1000}
        />
        <Image
          alt="jpc-mobile"
          data-aos="zoom-out-up"
          className={cls("mt-6 ml-4 max-sm:w-[450px] md:hidden xl:hidden")}
          src={JpcMobile}
        />
        <Image
          alt="jpc-tablet"
          className={cls("mt-6 hidden md:block xl:hidden")}
          src={JpcTablet}
        />
        <div
          className={cls(
            "text-[20px] font-[700] text-center tracking-[2px] text-blue-stroke-white-2px -rotate-6 md:hidden xl:hidden"
          )}
          data-aos="flip-up"
        >
          12-14 January 2024 @KMUTT
        </div>
        <Image
          alt="joseph"
          data-aos="fade-left"
          className={cls("absolute top-[40px] right-0 hidden xl:block")}
          src={Joseph}
          width={300}
        />
        <Link href="/register" className="cursor-pointer">
          <div
            className="animate-pulse animate-duration-[1000ms] animate-infinite animate-ease-in hover:animate-stop"
            ref={buttonContainer}
            data-aos="zoom-in"
            onMouseEnter={() => {
              registerButtonController?.setDirection(1);
              registerButtonController?.setSpeed(1);
              registerButtonController?.play();
            }}
            onMouseLeave={() => {
              registerButtonController?.setDirection(1);
              registerButtonController?.setSpeed(-1);
              registerButtonController?.play();
            }}
          />
        </Link>
        <Image
          alt="cartoon-duck"
          data-aos="fade-right"
          className={cls(
            "absolute xl:top-[580px] xl:-left-10 xl:w-[400px] md:w-[320px] md:top-[45%] w-[200px] -left-14 top-[35%]"
          )}
          src={CartoonDuck}
        />
        <Image
          alt="sparkle"
          className={cls(
            "absolute top-[650px] right-8 md:hidden w-[70px] md:w-full"
          )}
          src={Sparkle}
        />
        <Image
          alt="cartoon-jigsaw"
          data-aos="fade-right"
          className={cls(
            "absolute xl:top-[480px] xl:left-[250px] xl:w-auto md:w-[190px] md:left-[9%] md:top-[35%] w-[120px] left-0 top-[500px]"
          )}
          src={CartoonJigsaw}
        />
        <Image
          alt="cartoon-egg"
          data-aos="fade-left"
          className={cls(
            "absolute xl:w-auto xl:top-[500px] xl:right-[200px] md:w-[250px] md:top-[40%] w-[120px] right-0 top-[430px] animate-wiggle animate-infinite animate-duration-[2000ms] animate-ease-in"
          )}
          src={CartoonTamagochi}
        />

        {/* info */}
        <svg
          id="visual"
          className="-z-10 w-full"
          viewBox="0 0 900 200"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <motion.path
            animate={{
              d: [
                "M0 92L13.7 96.2C27.3 100.3 54.7 108.7 82 108.5C109.3 108.3 136.7 99.7 163.8 102.7C191 105.7 218 120.3 245.2 127.2C272.3 134 299.7 133 327 124.5C354.3 116 381.7 100 409 98.5C436.3 97 463.7 110 491 112C518.3 114 545.7 105 573 96.8C600.3 88.7 627.7 81.3 654.8 86.7C682 92 709 110 736.2 110C763.3 110 790.7 92 818 84.7C845.3 77.3 872.7 80.7 886.3 82.3L900 84L900 201L886.3 201C872.7 201 845.3 201 818 201C790.7 201 763.3 201 736.2 201C709 201 682 201 654.8 201C627.7 201 600.3 201 573 201C545.7 201 518.3 201 491 201C463.7 201 436.3 201 409 201C381.7 201 354.3 201 327 201C299.7 201 272.3 201 245.2 201C218 201 191 201 163.8 201C136.7 201 109.3 201 82 201C54.7 201 27.3 201 13.7 201L0 201Z",
                "M0 108L13.7 109.5C27.3 111 54.7 114 82 112.3C109.3 110.7 136.7 104.3 163.8 105.3C191 106.3 218 114.7 245.2 119.8C272.3 125 299.7 127 327 128.8C354.3 130.7 381.7 132.3 409 126.7C436.3 121 463.7 108 491 96.7C518.3 85.3 545.7 75.7 573 81.2C600.3 86.7 627.7 107.3 654.8 117C682 126.7 709 125.3 736.2 115.3C763.3 105.3 790.7 86.7 818 87C845.3 87.3 872.7 106.7 886.3 116.3L900 126L900 201L886.3 201C872.7 201 845.3 201 818 201C790.7 201 763.3 201 736.2 201C709 201 682 201 654.8 201C627.7 201 600.3 201 573 201C545.7 201 518.3 201 491 201C463.7 201 436.3 201 409 201C381.7 201 354.3 201 327 201C299.7 201 272.3 201 245.2 201C218 201 191 201 163.8 201C136.7 201 109.3 201 82 201C54.7 201 27.3 201 13.7 201L0 201Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 10,
              ease: "linear",
            }}
            fill="#d5e6f2"
          />
          <motion.path
            animate={{
              d: [
                "M0 120L13.7 117C27.3 114 54.7 108 82 104.7C109.3 101.3 136.7 100.7 163.8 103.8C191 107 218 114 245.2 119.3C272.3 124.7 299.7 128.3 327 134C354.3 139.7 381.7 147.3 409 144C436.3 140.7 463.7 126.3 491 125.3C518.3 124.3 545.7 136.7 573 136.7C600.3 136.7 627.7 124.3 654.8 118.7C682 113 709 114 736.2 115.5C763.3 117 790.7 119 818 118.7C845.3 118.3 872.7 115.7 886.3 114.3L900 113L900 201L886.3 201C872.7 201 845.3 201 818 201C790.7 201 763.3 201 736.2 201C709 201 682 201 654.8 201C627.7 201 600.3 201 573 201C545.7 201 518.3 201 491 201C463.7 201 436.3 201 409 201C381.7 201 354.3 201 327 201C299.7 201 272.3 201 245.2 201C218 201 191 201 163.8 201C136.7 201 109.3 201 82 201C54.7 201 27.3 201 13.7 201L0 201Z",
                "M0 138L13.7 137.7C27.3 137.3 54.7 136.7 82 131.3C109.3 126 136.7 116 163.8 117C191 118 218 130 245.2 132.8C272.3 135.7 299.7 129.3 327 125.7C354.3 122 381.7 121 409 125.5C436.3 130 463.7 140 491 146C518.3 152 545.7 154 573 148.2C600.3 142.3 627.7 128.7 654.8 127C682 125.3 709 135.7 736.2 136C763.3 136.3 790.7 126.7 818 123.3C845.3 120 872.7 123 886.3 124.5L900 126L900 201L886.3 201C872.7 201 845.3 201 818 201C790.7 201 763.3 201 736.2 201C709 201 682 201 654.8 201C627.7 201 600.3 201 573 201C545.7 201 518.3 201 491 201C463.7 201 436.3 201 409 201C381.7 201 354.3 201 327 201C299.7 201 272.3 201 245.2 201C218 201 191 201 163.8 201C136.7 201 109.3 201 82 201C54.7 201 27.3 201 13.7 201L0 201Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5,
              ease: "linear",
            }}
            fill="#b1daf6"
          />
          <motion.path
            animate={{
              d: [
                "M0 172L13.7 166C27.3 160 54.7 148 82 144.8C109.3 141.7 136.7 147.3 163.8 148.7C191 150 218 147 245.2 144.3C272.3 141.7 299.7 139.3 327 142C354.3 144.7 381.7 152.3 409 158.7C436.3 165 463.7 170 491 170.7C518.3 171.3 545.7 167.7 573 163.7C600.3 159.7 627.7 155.3 654.8 152.8C682 150.3 709 149.7 736.2 147.2C763.3 144.7 790.7 140.3 818 139.3C845.3 138.3 872.7 140.7 886.3 141.8L900 143L900 201L886.3 201C872.7 201 845.3 201 818 201C790.7 201 763.3 201 736.2 201C709 201 682 201 654.8 201C627.7 201 600.3 201 573 201C545.7 201 518.3 201 491 201C463.7 201 436.3 201 409 201C381.7 201 354.3 201 327 201C299.7 201 272.3 201 245.2 201C218 201 191 201 163.8 201C136.7 201 109.3 201 82 201C54.7 201 27.3 201 13.7 201L0 201Z",
                "M0 172L13.7 172.7C27.3 173.3 54.7 174.7 82 169.7C109.3 164.7 136.7 153.3 163.8 152C191 150.7 218 159.3 245.2 165C272.3 170.7 299.7 173.3 327 169.2C354.3 165 381.7 154 409 147.5C436.3 141 463.7 139 491 140.5C518.3 142 545.7 147 573 154.7C600.3 162.3 627.7 172.7 654.8 175.2C682 177.7 709 172.3 736.2 171.7C763.3 171 790.7 175 818 171.2C845.3 167.3 872.7 155.7 886.3 149.8L900 144L900 201L886.3 201C872.7 201 845.3 201 818 201C790.7 201 763.3 201 736.2 201C709 201 682 201 654.8 201C627.7 201 600.3 201 573 201C545.7 201 518.3 201 491 201C463.7 201 436.3 201 409 201C381.7 201 354.3 201 327 201C299.7 201 272.3 201 245.2 201C218 201 191 201 163.8 201C136.7 201 109.3 201 82 201C54.7 201 27.3 201 13.7 201L0 201Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              ease: "linear",
            }}
            fill="#87cefa"
          />
        </svg>
        <div
          id="about-jpc"
          className="flex w-full flex-col items-center bg-primary pt-20 transition"
        >
          <Image
            alt="info-cloud"
            data-aos="fade-up"
            className={cls("w-[90%] md:w-[60%] md:self-end md:mr-14")}
            src={InfoCloud}
          />
          <div
            className={cls(
              "flex flex-col items-center w-[90%] md:flex-row md:mt-10 justify-center"
            )}
          >
            <Image
              alt="joseph-shadow"
              data-aos="fade-up"
              className={cls("w-44 md:w-[240px] lg:w-[320px] xl:w-auto mt-8")}
              src={JosephShadow}
            />
            <div className="xl:w-[50%]">
              <Image
                alt="info-title"
                data-aos="fade-up"
                className={cls("")}
                src={InfoTitle}
              />
              <div className="md:ml-10" data-aos="zoom-out">
                <p className={cls("xl:pr-4 xl:text-h5 mt-9")}>
                  Junior Programmers Camp คือค่ายสำหรับน้อง ๆ และเพื่อน ๆ
                  ที่มีความสนใจในหลักสูตร Computer Science หรือ ComSci Inter
                  ของมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรีโดยเป็นค่ายที่มีทั้ง
                  กิจกรรมและ วิชาการที่จะทำให้เราได้รู้จักเพื่อนใหม่ ๆ และพี่ ๆ
                  ชาวค่าย
                </p>
                <button
                  className={cls(
                    "mt-11 cursor-pointer max-sm:w-full bg-[#FFD700] hover:bg-error transition rounded-2xl border-2 border-black animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in"
                  )}
                  type="button"
                  onClick={() => {
                    router.push("/register");
                  }}
                >
                  <div className={cls("py-4 px-16 font-semibold ")}>
                    สมัครเลย
                  </div>
                </button>
              </div>
            </div>
          </div>
          <Image
            alt="info-rope"
            className={cls(
              "self-end w-[20%] mr-4 pb-12 xl:w-auto md:w-[15%] md:bottom-[180px]"
            )}
            data-aos="fade-up"
            src={InfoRope}
          />
          <Image
            alt="star-yellow"
            data-aos="fade-right"
            className={cls(
              "absolute z-10 bottom-0 left-10 w-28 md:w-[20%] xl:w-auto"
            )}
            src={StarYellow}
          />
          <Image
            alt="star-red"
            data-aos="fade-left"
            className={cls("self-end mr-10 w-16 md:self-center md:w-20")}
            src={StarRed}
          />
          <Image
            alt="star-yellow"
            data-aos="fade-left"
            className={cls(
              "absolute z-10 bottom-0 right-10 w-28 hidden md:block"
            )}
            src={StarYellow}
          />
          {/* <Image
            alt="star-yellow"
            data-aos="fade-left"
            className={cls("-bottom-8 right-[420px] md:right-0 max-sm:hidden")}
            src={StarYellow}
          />
          <Image
            alt="star-red"
            data-aos="fade-left"
            className={cls("-bottom-5 right-20 hidden xl:block")}
            src={StarRed}
          /> */}
          {/* </div> */}
        </div>
        {/*<Image*/}
        {/*  alt="info-bg"*/}
        {/*  className={cls(*/}
        {/*    "md:mt-24 xl:mt-28 -z-10 max-sm:mt-48 h-[950px] md:h-[1100px] xl:h-auto object-cover"*/}
        {/*  )}*/}
        {/*  src={InfoBg}*/}
        {/*/>*/}

        {/* <Image
          alt="info-cloud"
          data-aos="fade-up"
          className={cls(
            "absolute -z-10 top-[830px] w-[90%] md:w-[80%] md:top-[56%] md:right-4 xl:top-[850px] xl:right-32"
          )}
          src={InfoCloud}
        />
        <Image
          alt="joseph-shadow"
          data-aos="fade-up"
          className={cls(
            "absolute w-44 md:w-[240px] xl:w-auto top-[920px] md:top-[1250px] md:left-12 xl:left-24"
          )}
          src={JosephShadow}
        />
        <div
          className={cls(
            "flex flex-col items-start absolute top-[1130px] md:top-[1250px] md:ml-40 xl:right-44 w-[90%] md:w-2/4"
          )}
        >
          <Image
            alt="info-title"
            data-aos="fade-up"
            className={cls("")}
            src={InfoTitle}
          />
          <div className="md:ml-10" data-aos="zoom-out">
            <p className={cls("xl:pr-4 xl:text-h5 mt-9")}>
              Junior Programmers Camp คือค่ายสำหรับน้อง ๆ และเพื่อน ๆ
              <br /> ที่มีความสนใจในหลักสูตร Computer Science หรือ ComSci Inter
              <br />{" "}
              ของมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรีโดยเป็นค่ายที่มีทั้ง{" "}
              <br />
              กิจกรรมและ วิชาการที่จะทำให้เราได้รู้จักเพื่อนใหม่ ๆ และพี่ ๆ
              ชาวค่าย
            </p>
            <button
              className={cls(
                "mt-11 cursor-pointer max-sm:w-full bg-[#FFD700] hover:bg-error transition rounded-2xl border-2 border-black animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in"
              )}
              type="button"
              onClick={() => {
                router.push("/register");
              }}
            >
              <div className={cls("py-4 px-16 font-semibold ")}>สมัครเลย</div>
            </button>
          </div>
        </div>
        <div className="absolute z-10">
          <Image
            alt="info-rope"
            className={cls(
              "absolute xl:w-auto md:w-[15%] w-[20%] bottom-14 right-6 md:bottom-[180px] md:right-12 xl:right-24"
            )}
            data-aos="fade-up"
            src={InfoRope}
          />
          <Image
            alt="star-yellow"
            // ref={starYellow}
            data-aos="fade-right"
            className={cls(
              "z-10 absolute -bottom-10 left-10 md:-bottom-4 md:left-2 xl:bottom-0 xl:left-6 w-28 md:w-[20%] xl:w-auto"
            )}
            src={StarYellow}
          />
          <Image
            alt="star-red"
            // ref={starRed}
            data-aos="fade-right"
            className={cls(
              "z-10 absolute -bottom-4 right-8 md:left-[40%] xl:-bottom-2 xl:left-[430px] max-sm:w-16"
            )}
            src={StarRed}
          />
          <Image
            alt="star-yellow"
            // ref={starYellow2}
            data-aos="fade-left"
            className={cls(
              "absolute -bottom-8 right-[420px] md:right-0 max-sm:hidden"
            )}
            src={StarYellow}
          />
          <Image
            alt="star-red"
            // ref={starRed2}
            data-aos="fade-left"
            className={cls("absolute -bottom-5 right-20 hidden xl:block")}
            src={StarRed}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Title;
