import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  place-content: center;

  opacity: 1;

  &.active {
    animation-name: lightAnimation;
    animation-duration: 5s;
  }

  > video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  > section {
    max-width: 55rem;
    height: 30rem;

    margin: 0 auto;
    margin-top: -12rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > h1 {
      font-size: 8rem;
      letter-spacing: 1rem;
      font-weight: 400;

      color: white;
    }

    > button {
      border: 1px solid white;
      border-radius: 0.4rem;
      background: none;

      color: white;
      letter-spacing: 2px;

      padding: 1.2rem 1.4rem;

      cursor: pointer;

      transition: all 100ms ease-in-out;

      &:hover {
        background: white;
        color: black;
      }

      &:disabled {
        cursor: not-allowed;
        background: white;
        color: black;
        opacity: 0.4;
      }
    }
  }

  @keyframes lightAnimation {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
