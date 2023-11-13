export interface ThemeColor {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}

export interface ThemeSetting {
  colors: {
    primary: ThemeColor;
    success: ThemeColor;
    warning: ThemeColor;
    error: ThemeColor;
    info: ThemeColor;
    gray: ThemeColor;
    black: string;
    white: string;
  };
  background: string;
}

export interface ThemeOptions {
  name: string;
  palette: ThemeSetting;
}
