import styled from "@emotion/styled";
import { variant } from "styled-system";
import { ButtonWrapperProps } from "./types";

const ButtonSizeVariant = variant({
  prop: "size",
  variants: {
    sm: {
      padding: "2px 12px",
      fontSize: "12px",
      borderRadius: "16px",
      boxShadow: "-4px 6px 10px -7px #000",
    },
    md: {
      padding: "4px 16px",
      fontSize: "16px",
      borderRadius: "16px",
      boxShadow: "-3px 6px 10px -7px #000",
    },
    lg: {
      padding: "6px 24px",
      fontSize: "20px",
      borderRadius: "28px",
      boxShadow: "-2px 8px 10px -7px #000",
    },
    xl: {
      padding: "8px 32px",
      fontSize: "24px",
      borderRadius: "24px",
      boxShadow: "-2px 8px 10px -7px #000",
    },
  },
});

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${ButtonSizeVariant}
  max-width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #000;
  cursor: pointer;
  :active {
    box-shadow: none;
  }
`;

export const ButtonContainer = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
`;
