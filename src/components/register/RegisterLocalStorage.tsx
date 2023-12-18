"use client";

import { useWatch } from "react-hook-form";

export type RegisterLocalStorageProps = Readonly<{ store: string }>;

export default function RegisterLocalStorage({
  store,
}: RegisterLocalStorageProps) {
  const form = useWatch();
  if(typeof window === "undefined" || typeof localStorage === "undefined") return null;
  localStorage.setItem(store, JSON.stringify(form));

  return null;
}
