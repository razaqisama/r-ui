import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const InputWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #fff;
  padding: 0px 20px;
  border-radius: 24px;
  gap: 8px;
`;

export const InputContainer = styled.input`
  padding: 8px 0px;
  background: transparent;
  outline: none;
  border: 0;
  color: white;
  caret-color: white;
  width: 100%;
`;

export const PrefixContainer = styled(motion.div)`
  padding: 8px 12px 8px 0px;
  color: white;
  border-right: 1px solid #fff;
`;

export const SuffixContainer = styled(motion.div)`
  padding: 8px 0px 8px 12px;
  color: white;
  border-left: 1px solid #fff;
`;
