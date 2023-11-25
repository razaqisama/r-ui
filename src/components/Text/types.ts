import { ReactNode } from "react";

export type TagType = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type AlignmentType = "left" | "center" | "right" | "justify";
type WeightType = "regular" | "medium" | "semibold" | "bold";
type SizeType =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl";

export interface TextProps {
  children?: ReactNode;
  className?: string;
  size?: SizeType;
  weight?: WeightType;
  tag?: TagType;
  textAlign?: AlignmentType;
  inline?: boolean;
  color?: string;
}

export interface TextStyleProps {
  size?: SizeType;
  weight?: WeightType;
  tag?: TagType;
  textAlign?: AlignmentType;
  inline?: boolean;
  color?: string;
}
