import React from 'react';
import styled from 'styled-components';
import { ButtonThemeType } from './theme';
import useOverrides from '../../theming/useOverrides';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  overrides?: ButtonThemeType;
  variant?: ButtonVariant;
};

const ButtonContainer = styled.button`
  display: flex;
  background-color: ${({ styles, variant = 'primary' }) =>
    styles[variant]?.backgroundColor};
  color: ${({ styles, variant }) => styles[variant]?.color};
  border: ${({ styles, variant }) => styles[variant]?.border};
  padding: ${({ styles, variant }) => styles[variant]?.padding};
  border-radius: ${({ styles, variant }) => styles[variant]?.borderRadius};
  cursor: pointer;
  box-sizing: border-box;
  transition: opacity 0.15s linear;
  &:hover {
    opacity: 0.85;
  },
`;

const Button = ({ children, overrides, ...props }: ButtonProps) => {
  const styles = useOverrides<ButtonThemeType>(`Button`, overrides);
  return (
    <ButtonContainer styles={styles} {...props}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
