import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Cursor from "./Cursor";
import { useEffect } from "react";
import { TypingTextProps } from "../types";

function TypingTextMultiple({
  delay,
  repeatDelay = 1,
  duration,
  text,
}: TypingTextProps) {
  const textToFind = text as string[];
  const maxLength = textToFind.reduce(
    (max, text) => Math.max(max, text.length),
    0,
  );
  const textIndex = useMotionValue(0);
  const baseText = useTransform(textIndex, (latest) => text[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, maxLength, {
      type: "tween",
      delay: delay,
      duration: duration,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: repeatDelay,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === text.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span style={{ color: "white" }}>
      <motion.span style={{ display: "inline" }}>{displayText}</motion.span>
      <Cursor />
    </span>
  );
}

export default TypingTextMultiple;
