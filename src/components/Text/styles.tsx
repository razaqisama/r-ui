import styled from "@emotion/styled";
import { TextStyleProps } from "./types";
import { variant } from "styled-system";

const sizeVariants = variant({
  prop: "size",
  variants: {
    xs: {
      fontSize: "11px",
      lineHeight: "14px",
    },
    sm: {
      fontSize: "12px",
      lineHeight: "16px",
    },
    md: {
      fontSize: "14px",
      lineHeight: "20px",
    },
    lg: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    xl: {
      fontSize: "20px",
      lineHeight: "28px",
    },
    "2xl": {
      fontSize: "24px",
      lineHeight: "32px",
    },
    "3xl": {
      fontSize: "28px",
      lineHeight: "40px",
    },
    "4xl": {
      fontSize: "32px",
      lineHeight: "44px",
    },
    "5xl": {
      fontSize: "36px",
      lineHeight: "48px",
    },
    "6xl": {
      fontSize: "40px",
      lineHeight: "52px",
    },
    "7xl": {
      fontSize: "48px",
      lineHeight: "64px",
    },
    "8xl": {
      fontSize: "52px",
      lineHeight: "68px",
    },
  },
});

const fontWeightVariants = variant({
  prop: "weight",
  variants: {
    regular: {
      fontWeight: 400,
    },
    medium: {
      fontWeight: 500,
    },
    semibold: {
      fontWeight: 600,
    },
    bold: {
      fontWeight: 800,
    },
  },
});

export const Paragraph = styled.p<TextStyleProps>`
  ${sizeVariants};
  ${fontWeightVariants};
  text-align: ${({ textAlign }) => textAlign};
  display: ${({ inline }) => (inline ? "inline" : "block")};
  color: ${({ color }) => color};
  margin: 0;
`;

export const Heading1 = styled.h1<TextStyleProps>`
  ${sizeVariants};
  ${fontWeightVariants};
  text-align: ${({ textAlign }) => textAlign};
  display: ${({ inline }) => (inline ? "inline" : "block")};
  color: ${({ color }) => color};
  margin: 0;
`;

export const Heading2 = styled.h2<TextStyleProps>`
  ${sizeVariants};
  ${fontWeightVariants};
  text-align: ${({ textAlign }) => textAlign};
  display: ${({ inline }) => (inline ? "inline" : "block")};
  color: ${({ color }) => color};
  margin: 0;
`;

export const Heading3 = styled.h3<TextStyleProps>`
  ${sizeVariants};
  ${fontWeightVariants};
  text-align: ${({ textAlign }) => textAlign};
  display: ${({ inline }) => (inline ? "inline" : "block")};
  color: ${({ color }) => color};
  margin: 0;
`;

export const Heading4 = styled.h4<TextStyleProps>`
  ${sizeVariants};
  ${fontWeightVariants};
  text-align: ${({ textAlign }) => textAlign};
  display: ${({ inline }) => (inline ? "inline" : "block")};
  color: ${({ color }) => color};
  margin: 0;
`;

export const Heading5 = styled.h5<TextStyleProps>`
  ${sizeVariants};
  ${fontWeightVariants};
  text-align: ${({ textAlign }) => textAlign};
  display: ${({ inline }) => (inline ? "inline" : "block")};
  color: ${({ color }) => color};
  margin: 0;
`;

export const Heading6 = styled.h6<TextStyleProps>`
  ${sizeVariants};
  ${fontWeightVariants};
  text-align: ${({ textAlign }) => textAlign};
  display: ${({ inline }) => (inline ? "inline" : "block")};
  color: ${({ color }) => color};
  margin: 0;
`;
