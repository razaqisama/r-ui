import {
  ChangeEvent,
  Ref,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from "react";
import {
  InputContainer,
  InputWrapper,
  PrefixContainer,
  SuffixContainer,
} from "./styles";
import { InputProps } from "./types";
import { useTheme } from "@emotion/react";

type InputType = HTMLInputElement | HTMLTextAreaElement;

const Input = forwardRef<InputType, InputProps>(
  (
    {
      id,
      className,
      leftAccessory,
      rightAccessory,
      placeholder,
      type = "text",
      isError = false,
      prefix,
      suffix,
      value,
      onChange,
    }: InputProps,
    ref: Ref<InputType>,
  ) => {
    const theme = useTheme();
    const [isFocuesed, setIsFocused] = useState(false);
    const handleChangeFocus = useCallback(
      (value: boolean) => () => {
        setIsFocused(value);
      },
      [],
    );

    const style = useMemo(() => {
      if (isError) {
        return {
          boxShadow: "0px 0px 6px 4px #ec727273",
          borderColor: theme.colors.error[500],
        };
      }
      if (isFocuesed) {
        return {
          boxShadow: "0px 0px 6px 4px #7672ec73",
          borderColor: theme.colors.primary[500],
        };
      } else {
        return {
          boxShadow: "none",
          borderColor: theme.colors.white,
        };
      }
    }, [
      isError,
      isFocuesed,
      theme.colors.error,
      theme.colors.primary,
      theme.colors.white,
    ]);

    const handleChangeValue = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.currentTarget.value);
      },
      [onChange],
    );

    return (
      <InputWrapper animate={style} className={className}>
        {prefix && (
          <PrefixContainer animate={{ borderColor: style.borderColor }}>
            {prefix}
          </PrefixContainer>
        )}
        {leftAccessory && <div>{leftAccessory}</div>}
        <InputContainer
          ref={ref as Ref<HTMLInputElement>}
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange && handleChangeValue}
          placeholder={placeholder}
          onFocus={handleChangeFocus(true)}
          onBlur={handleChangeFocus(false)}
        />
        {rightAccessory && <div>{rightAccessory}</div>}
        {suffix && (
          <SuffixContainer animate={{ borderColor: style.borderColor }}>
            {suffix}
          </SuffixContainer>
        )}
      </InputWrapper>
    );
  },
);

Input.displayName = "Input";

export default Input;
