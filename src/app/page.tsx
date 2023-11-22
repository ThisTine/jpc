import { cls } from "@/utils/misc";

export default function Home() {
  const isDisabled = false;
  return (
    <main>
      <h1>Main page</h1>
      <div
        className={cls(isDisabled && "bg-gray-50",["",""] )}
      ></div>
    </main>
  );
}
