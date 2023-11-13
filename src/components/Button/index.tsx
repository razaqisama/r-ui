import { forwardRef, Ref } from "react";
import { ButtonProps } from "./types";
import { ButtonContainer, ButtonWrapper } from "./styles";
import { useTheme } from "@emotion/react";

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
    const theme = useTheme();
    const animationOptions = {
      whileHover: {
        color: theme.colors.primary[500],
        borderColor: theme.colors.primary[500],
        boxShadow: "0px 0px 4px 2px #7672ec73",
      },
      whilteTap: {
        scale: 0.9,
      },
    };

    return (
      <ButtonWrapper
        whileHover={animationOptions.whileHover}
        whileTap={animationOptions.whilteTap}
        size={size}
      >
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
