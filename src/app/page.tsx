import Title from "@/components/main/title";
import { cls } from "@/utils/misc";

export default function Home() {
  const isDisabled = false;
  return (
    <main>
      <Title />
      <div className={cls(isDisabled && "bg-gray-50", ["", ""])}></div>
    </main>
  );
}
