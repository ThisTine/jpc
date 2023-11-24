import CSSIT from "@/components/main/cs-sit";
import FaqContact from "@/components/main/faq-contact";
import Title from "@/components/main/title";
import { cls } from "@/utils/misc";

export default function Home() {
  const isDisabled = false;
  return (
    <main className="w-screen overflow-hidden">
      <Title />
      <CSSIT />
      <FaqContact />
      <div className={cls(isDisabled && "bg-gray-50", ["", ""])}></div>
    </main>
  );
}
