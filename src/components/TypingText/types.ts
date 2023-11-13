export interface TypingTextProps {
  className?: string;
  delay?: number;
  repeatDelay?: number;
  duration?: number;
  text: string | string[];
  repeat?: number | undefined;
  cursorClassName?: string;
}
