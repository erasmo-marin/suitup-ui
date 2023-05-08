import React from 'react';
import ThemeProvider from '../theming';
import Container from '../layout/Container';
import { defaultTheme } from '../theming/theme';

const StoriesWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={defaultTheme}>
    <Container as="section">{children}</Container>
  </ThemeProvider>
);

export default StoriesWrapper;
