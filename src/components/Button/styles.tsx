import styled from "@emotion/styled";
import { variant } from "styled-system";
import { ButtonWrapperProps } from "./types";
import { motion } from "framer-motion";

const ButtonSizeVariant = variant({
  prop: "size",
  variants: {
    sm: {
      padding: "2px 12px",
      fontSize: "12px",
      borderRadius: "16px",
    },
    md: {
      padding: "4px 16px",
      fontSize: "16px",
      borderRadius: "16px",
    },
    lg: {
      padding: "6px 28px",
      fontSize: "20px",
      borderRadius: "28px",
    },
    xl: {
      padding: "6px 42px",
      fontSize: "24px",
      borderRadius: "24px",
    },
  },
});

export const ButtonWrapper = styled(motion.div)<ButtonWrapperProps>`
  ${ButtonSizeVariant}
  max-width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #fff;
  cursor: pointer;
  color: white;
`;

export const ButtonContainer = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
  color: inherit;
`;
