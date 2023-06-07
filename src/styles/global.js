import { createGlobalStyle } from 'styled-components';

export const ResetCss = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
      color: black;
  }
  html, body {
      font-size: 62.5%;
      overflow-x: hidden;
      background-color: white;
  }
  button {
      cursor: pointer;
  }
  a {
    text-decoration: none;
  }

  @media (max-width: 1460px) {
    html, body {
      font-size: 53.5%;
    }
  }

  @media (max-width: 950px) {
    html, body {
      font-size: 40%;
    }
  }

  @media (max-width: 764px) {
    html, body {
      font-size: 30%;
    }
  }

  @media (max-width: 600px) {
    html, body {
      font-size: 22%;
    }
  }
`;
