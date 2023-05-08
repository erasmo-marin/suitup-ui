import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import ModalProvider from '../ui/Modal/context';
import { ThemeType } from './theme';
import GlobalStyles from './globals';

type ThemeProviderProps = {
  children: React.ReactNode;
  theme: ThemeType;
};

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => (
  <ModalProvider>
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  </ModalProvider>
);

export default ThemeProvider;
