"use client";

import Agenda from "@/components/main/agenda";
import CSSIT from "@/components/main/cs-sit";
import FaqContact from "@/components/main/faq-contact";
import Title from "@/components/main/title";
import { cls } from "@/utils/misc";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const isDisabled = false;
  useEffect(() => {
    AOS.init({
      duration: 250,
      // once: true,
    });
  }, []);
  return (
    <main className="w-full overflow-hidden">
      <Title />
      <CSSIT />
      <Agenda />
      <FaqContact />
      <div className={cls(isDisabled && "bg-gray-50", ["", ""])} />
    </main>
  );
}
