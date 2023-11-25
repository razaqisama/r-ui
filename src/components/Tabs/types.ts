import { ReactNode } from "react";

export interface TabsItem {
  key: string;
  label: string;
  leftAccessory?: string;
  rightAccessory?: string;
  content: ReactNode;
}

export interface TabsProps {
  items: TabsItem[];
}

export interface TabsContentProps {
  content: ReactNode;
}

export interface TabsActiveItemStyle {
  width: number;
  height: number;
  position: number;
}
