import { forwardRef, Ref } from "react";
import { ButtonProps } from "./types";
import { ButtonContainer, ButtonWrapper } from "./styles";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = "md",
      type = "button",
      leftAccessory,
      rightAccessory,
      onClick,
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <ButtonWrapper size={size}>
        <div>{leftAccessory}</div>
        <ButtonContainer type={type} onClick={onClick} ref={ref}>
          {children}
        </ButtonContainer>
        <div>{rightAccessory}</div>
      </ButtonWrapper>
    );
  },
);

Button.displayName = "Button";
export default Button;
