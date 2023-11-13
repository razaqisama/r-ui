import { ReactNode } from "react";

type DirectionType = "row" | "column";
type AlignmentType =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";
type JustifyType = "flex-start" | "center" | "flex-end";

export interface FlexProps {
  children?: ReactNode;
  className?: string;
  direction?: DirectionType;
  alignItems?: AlignmentType;
  justifyContent?: JustifyType;
  gap?: number;
}

export interface FlexStyleProps {
  direction: DirectionType;
  alignItems: AlignmentType;
  justifyContent: JustifyType;
  gap: number;
}
