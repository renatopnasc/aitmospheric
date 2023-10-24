import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 62.5%;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: black;
  }

  @media (max-width: 900px) {
    :root {
      font-size: 46.875%;
    }
  }
`;
