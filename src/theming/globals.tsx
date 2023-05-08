import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: sans-serif;
    backgroundColor: ${({ theme }) => theme.colors.background.app};
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
