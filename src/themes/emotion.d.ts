import "@emotion/react";
import { ThemeSetting } from "./types";

declare module "@emotion/react" {
  export interface Theme extends ThemeSetting {}
}
