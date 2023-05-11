import React from 'react';
import styled from 'styled-components';
import useOverrides from '../../theming/useOverrides';
import { InputThemeType } from './theme';

type InputPropsType = React.InputHTMLAttributes<HTMLInputElement> & {
  overrides?: InputThemeType;
};

const InputWrapper = styled.input`
  background: ${({ styles }) => styles?.background};
  fill: ${({ styles }) => styles?.fill};
  color: ${({ styles }) => styles?.color};
  transition: ${({ styles }) => styles?.transition};
  border: ${({ styles }) => styles?.border};
  border-radius: ${({ styles }) => styles?.borderRadius};
  box-sizing: ${({ styles }) => styles?.boxSizing};
  height: ${({ styles }) => styles?.height};
  padding: ${({ styles }) => styles?.padding};
  margin: ${({ styles }) => styles?.margin};
  width: ${({ styles }) => styles?.width};
  &:focus {
    background: ${({ styles }) => styles?.Focus?.background};
    fill: ${({ styles }) => styles?.Focus?.fill};
    color: ${({ styles }) => styles?.Focus?.color};
    transition: ${({ styles }) => styles?.Focus?.transition};
    border: ${({ styles }) => styles?.Focus?.border};
    border-radius: ${({ styles }) => styles?.Focus?.borderRadius};
    box-sizing: ${({ styles }) => styles?.Focus?.boxSizing};
    height: ${({ styles }) => styles?.Focus?.height};
    padding: ${({ styles }) => styles?.Focus?.padding};
    margin: ${({ styles }) => styles?.Focus?.margin};
    width: ${({ styles }) => styles?.Focus?.width};
  }
  &:disabled {
    background: ${({ styles }) => styles?.Disabled?.background};
    fill: ${({ styles }) => styles?.Disabled?.fill};
    color: ${({ styles }) => styles?.Disabled?.color};
    transition: ${({ styles }) => styles?.Disabled?.transition};
    border: ${({ styles }) => styles?.Disabled?.border};
    border-radius: ${({ styles }) => styles?.Disabled?.borderRadius};
    box-sizing: ${({ styles }) => styles?.Disabled?.boxSizing};
    height: ${({ styles }) => styles?.Disabled?.height};
    padding: ${({ styles }) => styles?.Disabled?.padding};
    margin: ${({ styles }) => styles?.Disabled?.margin};
    width: ${({ styles }) => styles?.Disabled?.width};
  }
  &::placeholder {
    color: ${({ styles }) => styles?.Placeholder?.color};
  }
`;

const Input = ({ overrides, ...rest }: InputPropsType) => {
  const styles = useOverrides('Input', overrides);
  return <InputWrapper styles={styles} {...rest} />;
};

export default Input;
