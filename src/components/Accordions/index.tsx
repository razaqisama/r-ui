import { useCallback, useState } from "react";
import { ChevronDownIcon } from "../../icons";
import {
  AccordionsContainer,
  AccordionsContentWrapper,
  AccordionsWrapper,
  IconContainer,
} from "./styles";
import { AccordionsProps } from "./types";

const showContentAnimation = {
  height: "auto",
  padding: "8px 0px",
};

const hideContentAnimation = {
  height: 0,
  padding: 0,
};

function Accordions({
  children,
  className,
  label = "Accordions",
}: AccordionsProps) {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = useCallback(() => {
    setShowContent(!showContent);
  }, [showContent]);

  return (
    <AccordionsWrapper className={className}>
      <AccordionsContainer onClick={handleShowContent}>
        <div>{label}</div>
        <IconContainer
          animate={{
            transform: showContent ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ChevronDownIcon />
        </IconContainer>
      </AccordionsContainer>
      <AccordionsContentWrapper
        initial={hideContentAnimation}
        animate={showContent ? showContentAnimation : hideContentAnimation}
      >
        {children}
      </AccordionsContentWrapper>
    </AccordionsWrapper>
  );
}

export default Accordions;
