import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const AccordionsWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  border-radius: 12px;
  padding: 8px 16px;
`;

export const AccordionsContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

export const AccordionsContentWrapper = styled(motion.div)`
  display: flex;
  overflow: hidden;
`;

export const IconContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
