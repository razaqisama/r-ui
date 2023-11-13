import { FlexWrapper } from "./styles";
import { FlexProps } from "./types";

function Flex({
  children,
  className,
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  gap = 8,
}: FlexProps) {
  return (
    <FlexWrapper
      className={className}
      direction={direction}
      gap={gap}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </FlexWrapper>
  );
}

export default Flex;
