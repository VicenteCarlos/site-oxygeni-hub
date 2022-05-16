import styled from "styled-components"

const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #3b0107;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  div {
    background-color: white;
    padding: 10px;
    border-radius: 15px;
    width: 80vw;
    height: 60vh;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border: 5px solid #f73434;
    font-family: 'Montserrat', sans-serif;

    button {
        color: #f73434;
        background: none;
        font-weight: bold;
        border: none;
        position: relative;
        top: 1.5rem;
        left: 6.8rem;
        font-size: 25px;
        cursor: pointer;
    }

    figure {
      img {
        width: 150px;
      }

      figcaption {
        color: #f73434;
        font-weight: bold;
        font-size: 20px;
        padding-bottom: 2rem;
      }
    }

    p {
      background-color: #f73434;
      color: white;
      padding: 15px;
      border-radius: 15px;
      margin-top: 15px;
      line-height: 20px;
      width: 85%;
      border: 2px dashed transparent;
      font-weight: bold;
      margin-bottom: 2rem;
    }

    p:hover {
      background-color: white;
      color: #f73434;
      border-color: #f73434;
      transition: 0.7s;
    }
  }

  @media (min-width: 768px) {
    div {
      width: 60vw;

      button {
        left: 12rem;
        top: 0.3rem;
      }
    }
  }

  @media (min-width: 1100px) {
    div {
      width: 40vw;

      button {
        left: 12srem;
        top: 0.2rem;
      }
    }
  }

  @media (min-width: 1600px) {
    div {
      width: 25vw;

      button {
        left: 10rem;
        top: 0.2rem;
      }
    }
  }

  @media (min-width: 1920px) {
    div {
      width: 20vw;

      button {
        left: 10.5rem;
      }
    }
  }
`;

export { StyledMain }