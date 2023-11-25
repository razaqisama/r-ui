import styled from "@emotion/styled";
import { TabsActiveItemStyle } from "./types";

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabsHeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary[500]};
`;

export const TabsHeaderItems = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 8px;
  z-index: 1;
`;

export const TabsContentContainer = styled.div`
  padding: 12px 0px;
`;

export const TabsActiveItem = styled.div<TabsActiveItemStyle>`
  z-index: 0;
  position: absolute;
  height: 100%;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  left: ${(props) => `${props.position}px`};
  border-top: 1px solid ${({ theme }) => theme.colors.primary[500]};
  border-bottom: 0;
  /* border-top-left-radius: 12px;
  border-top-right-radius: 12px; */
  transition:
    left 0.2s ease-in-out,
    width 0.2s ease-in-out;
`;
