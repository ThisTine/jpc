import { useEffect, useRef } from "react";

export default function useAnimationParallax(
  moveY: number,
  offsetY: number,
  speed = 1
) {
  const $elm = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const scrollAnimation = (moveY: number) => {
      if (!$elm.current) return;
      const element = $elm.current!;
      element.style.transform = `translateY(${moveY}px)`;
    };

    const onScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const maxScroll = documentHeight - windowHeight;
      // const scrollPercent = scrollPosition / maxScroll;

      const totalHeight = document.body.scrollHeight - window.innerHeight;

      const scrollPercentage = scrollPosition / totalHeight;

      scrollAnimation(speed * moveY * scrollPercentage + offsetY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [moveY, offsetY, speed]);

  return $elm;
}
