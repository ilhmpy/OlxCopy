import { createGlobalStyle } from "styled-components";

export const AppStylesProvider = createGlobalStyle`
  * {
    font-size: 16px;
    font-weight: 500;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    width: 100%;
    height: 3200px;
    background: #f2f4f5;
    color: #002f34;
    font-family: "Roboto", Arial, sans-serif;
  }
  a {
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
  }
  h3 {
    margin: 0;
    padding: 0;
    line-height: 20px;
  }
  button {
    outline: none;
    cursor: pointer;
    border: 0;
  }
  input {
    border: 0;
    outline: none;
  }
`; 