import { useMemo } from "react";
import { TypingTextProps } from "./types";
import TypingTextSingle from "./components/TypingTextSingle";
import TypingTextMultiple from "./components/TypingTextMultiple";

function TypingText({
  delay,
  repeatDelay,
  duration,
  text,
  repeat = undefined,
  cursorClassName,
}: TypingTextProps) {
  const renderTextAnimation = useMemo(() => {
    switch (typeof text === typeof "") {
      case true:
        return (
          <TypingTextSingle
            repeat={repeat}
            repeatDelay={repeatDelay}
            delay={delay}
            text={text}
            duration={duration}
            cursorClassName={cursorClassName}
          />
        );
      case false:
        return (
          <TypingTextMultiple
            delay={delay}
            repeatDelay={repeatDelay}
            text={text}
            duration={duration}
            cursorClassName={cursorClassName}
          />
        );
    }
  }, [cursorClassName, delay, duration, repeat, repeatDelay, text]);

  return renderTextAnimation;
}

export default TypingText;
