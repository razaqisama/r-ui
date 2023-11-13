import { ReactNode } from "react";

type InputType = "number" | "text" | "password" | "date";

export interface InputProps {
  id?: string;
  className?: string;
  type?: InputType;
  leftAccessory?: ReactNode;
  rightAccessory?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  placeholder?: string;
  isError?: boolean;
  value?: string | number;
  onChange?: (value: string) => void;
}
