import * as React from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { motion } from "framer-motion";

function Phase3MainCarouselCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  console.log(current, count);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel className="w-full w-full mt-8" setApi={setApi}>
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-4 pr-4 md:basis-1/2 lg:basis-1/3"
          >
            <div className="carousel">
              <div className="carousel-images"></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="carousel-indicator">
        {Array.from({ length: 5 }).map((image, index) => (
          <motion.div
            key={index}
            className={`dot ${current === index + 1 ? "active" : ""}`}
            onClick={() => api?.scrollTo(index)}
            initial="initial"
            animate={current === index + 1 ? "animate" : ""}
            whileHover="hover"
            variants={{
              initial: {
                y: 0,
              },
              animate: {
                y: 0,
                scale: 1.2,
                transition: { type: "spring", stiffness: 1000, damping: "10" },
              },
              hover: {
                scale: 1.1,
                transition: { duration: 0.2 },
              },
            }}
          />
        ))}
      </div>
    </Carousel>
  );
}

export default Phase3MainCarouselCarousel;
