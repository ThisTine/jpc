import clsx from "clsx";
import { ClassNameValue, twMerge } from "tailwind-merge";

export const cls = (...args: ClassNameValue[]) => clsx(twMerge(...args));
export const ls = (store: string, key: string) =>
  JSON.parse(localStorage.getItem(store) ?? "{}")[key];
