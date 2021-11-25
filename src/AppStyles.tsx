import { createGlobalStyle } from "styled-components";

export const AppStylesProvider = createGlobalStyle`
  body {
    margin: 0;
    width: 100%;
    color: #002f34;
    background: #f2f4f5;
    font-family: 'Roboto', Arial, sans-serif;
  }
  a {
    text-decoration: none;
  }
  h3 {
    margin: 0;
    padding: 0;
    line-height: 20px;
  }
`; 