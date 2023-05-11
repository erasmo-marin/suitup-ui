import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import ModalProvider from '../ui/Modal/context';
import { ThemeType } from './theme';
import GlobalStyles from './globals';
import AppContainer from '../layout/AppContainer';

type ThemeProviderProps = {
  children: React.ReactNode;
  theme: ThemeType;
  withAppContainer: boolean;
};

const ThemeProvider = ({
  children,
  theme,
  withAppContainer = true,
}: ThemeProviderProps) => (
  <ModalProvider>
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {withAppContainer ? <AppContainer>{children}</AppContainer> : children}
    </StyledThemeProvider>
  </ModalProvider>
);

export default ThemeProvider;
