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

  @font-face {
    font-family: aitmosphere;
    src: url("../assets/fonts/guildof.ttf");
  }

  body, input, button, textarea {
    font-size: 1.6rem;
  }

  body {
    background: white;
    font-family: 'Poppins', sans-serif;


  }

  button {
    font-family: 'Poppins', sans-serif;
  }

  @media (max-width: 900px) {
    :root {
      font-size: 46.875%;
    }
  }

  @media (max-width: 768px) {
    :root {
      font-size: 42%;
    }
  }
`;
