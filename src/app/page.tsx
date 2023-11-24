import CsSIT from "@/components/main/cs-sit";
import Title from "@/components/main/title";
import { cls } from "@/utils/misc";

export default function Home() {
  const isDisabled = false;
  return (
    <main>
      <Title />
      <CsSIT />
      <div className={cls(isDisabled && "bg-gray-50", ["", ""])}></div>
    </main>
  );
}
