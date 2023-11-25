import {
  Children,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  CarouselContainer,
  CarouselItem,
  CarouselItemsWrapper,
  CarouselWrapper,
  ControlButton,
  Dots,
  DotsWrapper,
} from "./styles";
import { CarouselProps } from "./types";
import { generateUniqueId } from "../../utils";
import { PanInfo } from "framer-motion";
import { useTheme } from "@emotion/react";
import { ChevronLeftIcon, ChevronRightIcon } from "../../icons";

function Carousel({
  children,
  className,
  itemsPerRow = 1,
  showArrow,
  showDots = false,
  interval = 2000,
}: CarouselProps) {
  const theme = useTheme();
  const baseItem = Children.toArray(children);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showControl, setShowControl] = useState(false);

  const uniqueCarouselId = useMemo(() => {
    return generateUniqueId();
  }, []);

  const carouselItem = useMemo(() => {
    if (baseItem.length) {
      const result = [];

      for (let i = 0; i < baseItem.length; i += itemsPerRow) {
        result.push(baseItem.slice(i, i + itemsPerRow));
      }

      return [...result, result[0]];
    }

    return [[]];
  }, [baseItem, itemsPerRow]);

  const activeIndex = useMemo(() => {
    return currentIndex % (carouselItem.length - 1);
  }, [carouselItem.length, currentIndex]);

  const handleSlide = useCallback(
    (arrow: "prev" | "next") => {
      const scrollOffset = arrow === "prev" ? -1 : 1;
      const nextIndex = currentIndex + scrollOffset;
      const nextItem = document.getElementById(
        `${uniqueCarouselId}-${nextIndex}`,
      );
      if (carouselRef.current !== null) {
        nextItem?.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
        setCurrentIndex(nextIndex);
      }
    },
    [currentIndex, uniqueCarouselId],
  );

  const handleSlideTo = useCallback(
    (index: number) => () => {
      const nextItem = document.getElementById(`${uniqueCarouselId}-${index}`);
      if (carouselRef.current !== null) {
        nextItem?.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
        setCurrentIndex(index);
      }
    },
    [uniqueCarouselId],
  );

  const handleDragEnd = useCallback(
    (_: MouseEvent, i: PanInfo) => {
      if (i.offset.x > 100) {
        handleSlide("prev");
      }
      if (i.offset.x < -100) {
        handleSlide("next");
      }
    },
    [handleSlide],
  );

  const handleShowControll = useCallback((value: boolean) => {
    setShowControl(value);
  }, []);

  // Handle infinite slide
  useEffect(() => {
    if (currentIndex === carouselItem.length) {
      setCurrentIndex(1);
      const step1 = document.getElementById(`${uniqueCarouselId}-0`);
      const step2 = document.getElementById(`${uniqueCarouselId}-1`);
      step1?.scrollIntoView();
      step2?.scrollIntoView({ behavior: "smooth" });
    }
    if (currentIndex < 0) {
      setCurrentIndex(carouselItem.length - 2);
      const step1 = document.getElementById(
        `${uniqueCarouselId}-${carouselItem.length - 1}`,
      );
      const step2 = document.getElementById(
        `${uniqueCarouselId}-${carouselItem.length - 2}`,
      );
      step1?.scrollIntoView();
      step2?.scrollIntoView({ behavior: "smooth" });
    }
  }, [carouselItem, currentIndex, uniqueCarouselId]);

  useEffect(() => {
    if (interval > 500) {
      const goToNextImage = () => {
        handleSlide("next");
      };

      const intervalId = setInterval(goToNextImage, interval);

      return () => clearInterval(intervalId);
    } else {
      return () => {};
    }
  }, [handleSlide, interval]);

  return (
    <CarouselWrapper
      className={className}
      onMouseEnter={() => handleShowControll(true)}
      onMouseLeave={() => handleShowControll(false)}
    >
      {showArrow && (
        <>
          <ControlButton
            animate={{
              opacity: showControl ? 1 : 0,
            }}
            type="button"
            onClick={() => handleSlide("prev")}
            aria-label="Previous Slide"
            className="prev"
          >
            <ChevronLeftIcon />
          </ControlButton>
          <ControlButton
            animate={{
              opacity: showControl ? 1 : 0,
            }}
            type="button"
            onClick={() => handleSlide("next")}
            aria-label="Next Slide"
            className="next"
          >
            <ChevronRightIcon />
          </ControlButton>
        </>
      )}
      <CarouselContainer ref={carouselRef}>
        {carouselItem.map((item, index) => (
          <CarouselItem
            drag="x"
            dragSnapToOrigin
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            id={`${uniqueCarouselId}-${index}`}
            key={index}
          >
            {item.map((carouselItem, i) => {
              return (
                <CarouselItemsWrapper key={i}>
                  {carouselItem}
                </CarouselItemsWrapper>
              );
            })}
          </CarouselItem>
        ))}
      </CarouselContainer>
      {showDots && (
        <DotsWrapper>
          {Array(carouselItem.length - 1)
            .fill({})
            .map((_, index) => {
              const isActive = index === activeIndex;
              return (
                <Dots
                  onClick={handleSlideTo(index)}
                  animate={{
                    width: isActive ? "40px" : "20px",
                    background: isActive
                      ? theme.colors.primary[500]
                      : "rgb(118, 114, 236, 0)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  key={index}
                />
              );
            })}
        </DotsWrapper>
      )}
    </CarouselWrapper>
  );
}

export default Carousel;
