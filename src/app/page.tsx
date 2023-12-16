import Agenda from "@/components/main/agenda";
import CSSIT from "@/components/main/cs-sit";
import FaqContact from "@/components/main/faq-contact";
import Title from "@/components/main/title";
import { cls } from "@/utils/misc";

export default function Home() {
  const isDisabled = false;
  return (
    <main>
      <Title />
      <CSSIT />
      <Agenda />
      <FaqContact />
      <div className={cls(isDisabled && "bg-gray-50", ["", ""])} />
    </main>
  );
}
