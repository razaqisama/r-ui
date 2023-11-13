import { ReactNode } from "react";

type CardType = "elevated" | "outlined" | "filled";

export interface CardProps {
  children?: ReactNode;
  type?: CardType;
}

export interface CardStyleWrapperProps {
  type: CardType;
}
