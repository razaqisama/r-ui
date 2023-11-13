import React, { useMemo } from "react";

import type { Preview } from "@storybook/react";
import RuiProvider from "../src/provider";

import { DarkTheme, LightTheme } from "../src/themes";

const themes = [DarkTheme, LightTheme];

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const { backgrounds } = context.globals;
      const defaultBackgroundColorKey =
        context?.parameters?.backgrounds?.default;
      const defaultBackgroundColor =
        context?.parameters?.backgrounds?.values?.find(
          (v) => v.name === defaultBackgroundColorKey,
        )?.value;
      const currentBackgroundColor =
        context?.globals?.backgrounds?.value ?? defaultBackgroundColor;

      const styleContent = `.docs-story {
        background-color: ${currentBackgroundColor}
      }`;

      const theme = useMemo(() => {
        return themes.find(
          (item) => item.palette.background === backgrounds?.value,
        );
      }, [backgrounds]);

      return (
        <RuiProvider theme={theme}>
          <style type="text/css">{styleContent}</style>
          <Story />
        </RuiProvider>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#07123F",
        },
        {
          name: "ligth",
          value: "#fff",
        },
      ],
    },
  },
};

export default preview;
