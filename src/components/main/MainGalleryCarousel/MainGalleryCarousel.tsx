import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel0 from "@/assets/carousels/0.jpg";
import Carousel1 from "@/assets/carousels/1.jpg";
import Carousel2 from "@/assets/carousels/2.jpg";
import Carousel3 from "@/assets/carousels/3.jpg";
import Carousel4 from "@/assets/carousels/4.jpg";

const MainCarouselCarousel = () => {
  const images = [Carousel0, Carousel1, Carousel2, Carousel3, Carousel4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<string | null>(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const dotsVariants = {
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
  };

  const handleNext = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };
  const [isHover, setIsHover] = useState(false);
  // auto slide
  useEffect(() => {
    if (isHover) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext, isHover]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1280px",
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
        position: "relative",
      }}
      role="banner"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="carousel">
        <div className="carousel-images">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex].src}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              variants={slideVariants}
            />
          </AnimatePresence>
        </div>
      </div>
      <div className="slide_direction">
        <motion.div className="left" onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </motion.div>
        <motion.div className="right" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </motion.div>
      </div>
      <div className="carousel-indicator">
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          />
        ))}
      </div>
    </div>
  );
};
export default MainCarouselCarousel;
