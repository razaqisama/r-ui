import { useMemo } from "react";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
} from "./styles";
import { TextProps } from "./types";

function Text({
  children,
  className,
  tag = "p",
  size = "md",
  color = "#fff",
  weight = "regular",
  textAlign = "left",
  inline = false,
}: TextProps) {
  const renderText = useMemo(() => {
    const TextType = {
      p: (
        <Paragraph
          className={className}
          inline={inline}
          size={size}
          color={color}
          weight={weight}
          textAlign={textAlign}
        >
          {children}
        </Paragraph>
      ),
      h1: (
        <Heading1
          className={className}
          inline={inline}
          size={size}
          color={color}
          weight={weight}
          textAlign={textAlign}
        >
          {children}
        </Heading1>
      ),
      h2: (
        <Heading2
          className={className}
          inline={inline}
          size={size}
          color={color}
          weight={weight}
          textAlign={textAlign}
        >
          {children}
        </Heading2>
      ),
      h3: (
        <Heading3
          className={className}
          inline={inline}
          size={size}
          color={color}
          weight={weight}
          textAlign={textAlign}
        >
          {children}
        </Heading3>
      ),
      h4: (
        <Heading4
          className={className}
          inline={inline}
          size={size}
          color={color}
          weight={weight}
          textAlign={textAlign}
        >
          {children}
        </Heading4>
      ),
      h5: (
        <Heading5
          className={className}
          inline={inline}
          size={size}
          color={color}
          weight={weight}
          textAlign={textAlign}
        >
          {children}
        </Heading5>
      ),
      h6: (
        <Heading6
          className={className}
          inline={inline}
          size={size}
          color={color}
          weight={weight}
          textAlign={textAlign}
        >
          {children}
        </Heading6>
      ),
    };

    return TextType[tag];
  }, [children, className, color, inline, size, tag, textAlign, weight]);

  return renderText;
}

export default Text;
