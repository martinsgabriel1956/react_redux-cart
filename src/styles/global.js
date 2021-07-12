import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Noto Sans JP', sans-serif;
  }

  body {
    margin: 0;
    background-color: #3f3f3f;
  }

  button {
    font: inherit;
    cursor: pointer;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    background-color: transparent;
    color: #1a8ed1;
    border: 1px solid #1a8ed1;
  }

  button:hover,
  button:active {
    background-color: #1ac5d1;
    border-color: #1ac5d1;
    color: white;
  }
`;
