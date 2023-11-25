import styled from "@emotion/styled";
import { TagType, TextStyleProps } from "./types";
import { variant } from "styled-system";

const sizeVariants = variant({
  prop: "size",
  variants: {
    // ... your size variants
  },
});

const fontWeightVariants = variant({
  prop: "weight",
  variants: {
    // ... your font weight variants
  },
});

const createStyledTextComponent = (tag: TagType) => styled(tag)<TextStyleProps>`
  ${sizeVariants};
  ${fontWeightVariants};
  text-align: ${({ textAlign }) => textAlign};
  display: ${({ inline }) => (inline ? "inline" : "block")};
  color: ${({ color }) => color};
`;

export const Paragraph = createStyledTextComponent("p");
export const Heading1 = createStyledTextComponent("h1");
export const Heading2 = createStyledTextComponent("h2");
export const Heading3 = createStyledTextComponent("h3");
export const Heading4 = createStyledTextComponent("h4");
export const Heading5 = createStyledTextComponent("h5");
export const Heading6 = createStyledTextComponent("h6");
