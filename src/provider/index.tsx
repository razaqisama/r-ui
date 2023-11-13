import { Global, ThemeProvider } from "@emotion/react";
import { ReactNode, Suspense } from "react";
import { ThemeOptions } from "../themes/types";
import { DarkTheme } from "../themes";
import global from "./global";

interface ProviderProps {
  children?: ReactNode;
  fallback?: ReactNode;
  theme?: ThemeOptions;
}

function RuiProvider({ children, fallback, theme = DarkTheme }: ProviderProps) {
  return (
    <Suspense fallback={fallback}>
      <ThemeProvider theme={theme?.palette || DarkTheme.palette}>
        {children}
        <Global styles={global} />
      </ThemeProvider>
    </Suspense>
  );
}

export default RuiProvider;
