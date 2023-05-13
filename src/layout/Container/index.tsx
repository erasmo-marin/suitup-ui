import * as React from 'react';
import styled from 'styled-components';
import { GenericContainerProps } from '../../types';
import { ContainerThemeType } from './theme';
import useOverrides from '../../theming/useOverrides';

const ContainerWrapper = styled.div`
  background-color: ${({ styles }) => styles?.backgroundColor};
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.tablet}) {
    padding: 16px;
  }
`;

type ContainerProps = GenericContainerProps & {
  overrides?: ContainerThemeType;
};

const Container = ({
  as: Component = ContainerWrapper,
  children,
  overrides,
  ...rest
}: ContainerProps): JSX.Element => {
  const styles = useOverrides<ContainerThemeType>({
    key: 'Container',
    overrides,
  });
  return (
    <ContainerWrapper styles={styles} as={Component} {...rest}>
      {children}
    </ContainerWrapper>
  );
};

export default Container;
