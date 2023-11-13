import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Cursor from "./Cursor";
import { useEffect } from "react";
import { TypingTextProps } from "../types";

function TypingTextSingle({
  delay,
  repeatDelay,
  text,
  repeat,
  duration,
}: TypingTextProps) {
  const baseText = text as string;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      repeatDelay: repeatDelay,
      duration: duration,
      ease: "easeInOut",
      repeat: repeat,
      repeatType: "reverse",
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span style={{ color: "white" }}>
      <motion.span>{displayText}</motion.span>
      <Cursor />
    </span>
  );
}

export default TypingTextSingle;
