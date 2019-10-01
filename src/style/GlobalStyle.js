import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:border-box;
  }

  table, tr, th, td {
    border-spacing: 0;
  }

  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }

  .img-small {
    max-width: 250px !important;
    max-height: 450px !important;
  }

  pre {
    max-width: calc(100vw - 4rem);
  }
`;
