import styled from "@emotion/styled";
import { variant } from "styled-system";
import { CardStyleWrapperProps } from "./types";
import type { Theme } from "@emotion/react";

const CardWrapperVariants = (theme: Theme) =>
  variant({
    prop: "type",
    variants: {
      elevated: {
        boxShadow: "0px 2px 8px -1px #ffffff7d",
      },
      outlined: {
        borderColor: theme.colors.primary[500],
      },
      filled: {
        background: theme.colors.primary[500],
      },
    },
  });

export const CardWrapper = styled.div<CardStyleWrapperProps>`
  color: white;
  width: max-content;
  padding: 24px;
  border: 1px solid transparent;
  border-radius: 32px;
  min-width: 320px;
  min-height: 240px;
  ${({ theme }) => CardWrapperVariants(theme)}

  @media (max-width: 1280px) {
    border-radius: 28px;
    padding: 16px 24px;
  }
  @media (max-width: 640px) {
    border-radius: 24px;
    padding: 12px 16px;
  }
`;
