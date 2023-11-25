import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react";
import {
  DropdownItemWrapper,
  DropdownContainer,
  DropdownWrapper,
  DropdownItemContainer,
  LeftAccessoryContainer,
} from "./styles";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { DropdownProps } from "./type";

function Dropdown({
  children,
  className,
  label = "Dropdown",
  leftAccessory,
  rightAccessory,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const click = useClick(context, { event: "mousedown" });
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  return (
    <DropdownWrapper className={className}>
      <DropdownContainer
        ref={refs.setReference}
        style={{ maxWidth: "max-content" }}
        {...getReferenceProps()}
      >
        <LeftAccessoryContainer>
          {leftAccessory}
          {label}
        </LeftAccessoryContainer>
        {rightAccessory}
      </DropdownContainer>
      <AnimatePresence>
        {isOpen && (
          <DropdownItemWrapper
            {...getFloatingProps()}
            ref={refs.setFloating}
            style={floatingStyles}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <DropdownItemContainer>{children}</DropdownItemContainer>
          </DropdownItemWrapper>
        )}
      </AnimatePresence>
    </DropdownWrapper>
  );
}

export default Dropdown;
