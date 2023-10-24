import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: linear-gradient(
    0deg,
    rgba(34, 39, 195, 1) 0%,
    rgba(207, 45, 253, 1) 100%
  );

  display: grid;
  place-content: center;

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
      font-size: 6.4rem;
      letter-spacing: 0.6rem;

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
`;
