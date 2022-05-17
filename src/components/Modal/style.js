import styled from "styled-components"

const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.modalConfig.colors[1]};
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
    border: 5px solid ${props => props.modalConfig.colors[0]};
    font-family: 'Montserrat', sans-serif;

    button {
        color: ${props => props.modalConfig.colors[0]};
        background: none;
        font-weight: bold;
        border: none;
        margin: 1rem 1rem 0 auto;
        font-size: 25px;
        cursor: pointer;
    }

    figure {
      img {
        width: 110px;
      }

      figcaption {
        color: ${props => props.modalConfig.colors[0]};
        font-weight: bold;
        font-size: 25px;
        padding-bottom: 2rem;
      }
    }

    p {
      background-color: ${props => props.modalConfig.colors[0]};
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
      color: ${props => props.modalConfig.colors[1]};
      border-color: ${props => props.modalConfig.colors[1]};
      transition: 0.7s;
    }
  }

  @media (min-width: 768px) {
    div {
      width: 60vw;

      button {
        left: 12.5rem;
        top: -2rem;
      }
    }
  }

  @media (min-width: 1100px) {
    div {
      width: 40vw;

      p {
        font-size: 15px;
        line-height: 25px;
      }

      button {
        left: 12rem;
        top: 0;
      }
    }
  }

  @media (min-width: 1600px) {
    div {
      width: 25vw;

      button {
        left: 10rem;
        top: -0.5rem;
      }
    }
  }

  @media (min-width: 1920px) {
    div {
      width: 20vw;

      button {
        left: 10.5rem;
        top: -3rem;
      }
    }
  }
`;

export { StyledMain }