import { Children, cloneElement, ReactElement } from "react";
import { SpaceProps } from "styled-system";
import { RadioProps } from "./RadioButton";
import { RadioGroupStyle } from "./RadioGroupStyle";

export interface RadioGroupProps extends SpaceProps {
  children: ReactElement<RadioProps>[];
  value?: number | string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  value,
  name,
  onChange,
  ...props
}: any) => {
  return (
    <RadioGroupStyle {...props}>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          id: index,
          name,
          checked: value ? child.props.value === value : undefined,
          onChange,
        });
      })}
    </RadioGroupStyle>
  );
};
