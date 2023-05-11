import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ThemeProvider from '../theming';
import Container from '../layout/Container';
import { defaultTheme } from '../theming/theme';

const GlobalStyles = createGlobalStyle`
  :root {
    --ladle-main-padding: 0px;
    --ladle-main-padding-mobile: 0px;
  }
`;

const StoriesWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <Container as="section">{children}</Container>
  </ThemeProvider>
);

export default StoriesWrapper;
