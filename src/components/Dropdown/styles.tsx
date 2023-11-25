import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const DropdownWrapper = styled.div`
  position: relative;
  max-width: max-content;
`;

export const DropdownContainer = styled.button`
  min-width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 8px 16px;
`;

export const DropdownItemWrapper = styled(motion.div)`
  width: 100%;
  margin-top: 8px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  overflow: hidden;
`;

export const DropdownItemContainer = styled.div`
  padding: 8px 16px;
`;

export const LeftAccessoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
