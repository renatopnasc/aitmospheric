import { createGlobalStyle } from "styled-components";
import aitmosphericFont from "../assets/fonts/guildof.ttf";

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
    font-family: "Aitmospheric";
    src: url(${aitmosphericFont})
  }


  body, input, button, textarea {
    font-size: 1.6rem;
  }

  body {
    background: white;
  }

  button {
    font-family: 'Poppins', sans-serif;
  }

  .title {
    font-family: Aitmospheric;
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
