import { ReactNode } from "react";

export interface DropdownProps {
  children?: ReactNode;
  className?: string;
  label?: string;
  leftAccessory?: ReactNode;
  rightAccessory?: ReactNode;
}
