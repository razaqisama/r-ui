import styled from "@emotion/styled";
import { FlexStyleProps } from "./types";

export const FlexWrapper = styled.div<FlexStyleProps>`
  display: flex;
  gap: ${({ gap }) => `${gap}px`};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;
