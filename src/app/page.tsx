"use client";

import Agenda from "@/components/main/agenda";
import CSSIT from "@/components/main/cs-sit";
import FaqContact from "@/components/main/faq-contact";
import Title from "@/components/main/title";
import { cls } from "@/utils/misc";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { changeBG, RGB } from "@/utils/colors";

export default function Home() {
  const isDisabled = false;
  useEffect(() => {
    const isSafariBrowser = () =>
      navigator.userAgent.indexOf("Safari") > -1 &&
      navigator.userAgent.indexOf("Chrome") <= -1;

    AOS.init({
      duration: 250,
    });
  }, []);
  useEffect(() => {
    if (window) {
      const onScroll = (ev: Event) => {
        const aboutSit = document.getElementById("about-sit");
        const aboutJpc = document.getElementById("about-jpc");
        const s =
          (aboutJpc?.getBoundingClientRect().top ?? 0) < 0
            ? (aboutSit?.offsetHeight ?? 0) /
              3 /
              (aboutSit?.getBoundingClientRect().top ?? 0)
            : 0;
        const startColor = [135, 206, 250] as RGB;
        const endColor = [240, 244, 245] as RGB;
        const color = changeBG(startColor, endColor, s > 1 || s < 0 ? 1 : s);
        if (aboutSit) {
          aboutSit.style.background = `rgb(${color[0]},${color[1]},${color[2]})`;
        }
        if (aboutJpc) {
          aboutJpc.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
        }
      };
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []);
  return (
    <main className="w-full overflow-hidden">
      <Title />
      <CSSIT />
      <Agenda />
      <div className="bg-[#ff6861] h-[800px]"></div>
      <FaqContact />
      <div className={cls(isDisabled && "bg-gray-50", ["", ""])} />
    </main>
  );
}
