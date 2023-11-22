import clsx from "clsx";
import { ClassNameValue, twMerge } from "tailwind-merge";

export const cls = (...args: ClassNameValue[]) => clsx(twMerge(...args));
