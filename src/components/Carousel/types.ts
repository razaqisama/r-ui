import { ReactNode } from "react";

export interface CarouselProps {
  children?: ReactNode;
  className?: string;
  showArrow?: boolean;
  showDots?: boolean;
  itemsPerRow?: number;
}
