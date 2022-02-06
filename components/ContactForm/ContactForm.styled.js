import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 20px 0px 40px rgba(200, 200, 200, 0.3),
    -20px 0px 40px rgba(200, 200, 200, 0.3);
  border-radius: 15px;
  height: 60vh;
  width: 60vw;
  min-height: 435px;
  max-height: 550px;
  max-width: 900px;
  min-width: 400px;
  padding-bottom: 10px;

  h1 {
    display: flex;
    place-content: center;
    color: red;
    font-size: 2rem;
    padding: 20px 0 40px 0;
  }

  input,
  textarea {
    display: flex;
    padding: 10px;
    width: 60vw;
    max-width: 550px;
    border-radius: 15px;
    font-size: 1.1rem;
  }

  button {
    background-color: #7df9ff;
    color: #333;
    padding: 0.5rem 2rem;
    border-radius: 15px;
    font-size: 1.1rem;
    transition: 500ms ease;
    outline: none;
  }

  button:hover {
    transform: scale(1.05);
    cursor: pointer;
    border: 2px solid black;
    background: #3bd1ff;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    max-width: 80vw;

    input,
    textarea {
      width: 90%;
      font-size: 1rem;
    }
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 80vw;

    input,
    textarea {
      width: 90%;
      font-size: 1rem;
    }
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    // max-width: 80vw;

    input,
    textarea {
      width: 90%;
      font-size: 1.1rem;
    }
  }
`;