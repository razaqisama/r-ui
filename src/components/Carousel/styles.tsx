import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .next {
    right: 0;
  }
  .prev {
    left: 0;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
`;

export const ControlButtonWrapper = styled.div`
  position: absolute;
  height: 100%;
  background: red;
`;

export const ControlButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  position: absolute;
  z-index: 10;
  top: calc(50% - 24px);
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.colors.primary[500]};
`;

export const CarouselItem = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  min-width: 100%;
`;

export const CarouselItemsWrapper = styled.div`
  flex: 1;
`;

export const DotsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`;

export const Dots = styled(motion.button)`
  width: 20px;
  height: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary[500]};
  border-radius: 24px;
`;
