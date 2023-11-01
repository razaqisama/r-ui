import { ReactNode } from "react";

type ButtonSize = "sm" | "md" | "lg" | "xl";
type ButtonType = "submit" | "button";

export interface ButtonProps {
  children: ReactNode;
  size?: ButtonSize;
  type?: ButtonType;
  leftAccessory?: ReactNode;
  rightAccessory?: ReactNode;
  onClick?: () => void;
}

export interface ButtonWrapperProps {
  size: ButtonSize;
}
