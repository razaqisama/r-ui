import { motion } from "framer-motion";
import styled from "@emotion/styled";

const CursorStyle = styled(motion.div)`
  display: inline-block;
  height: 20px;
  width: 1px;
  transform: translateY(4px);
  background: white;
`;

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

function Cursor() {
  return <CursorStyle variants={cursorVariants} animate="blinking" />;
}

export default Cursor;
