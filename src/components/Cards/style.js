import styled from "styled-components";

export const Container = styled.div`
  margin: 55px 25px 25px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1c2f5d;
  color: white;
  width: 300px;
  height: 190px;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 2px 5px 2px #000;
  cursor: pointer;

  h3 {
    font-size: 27px;
    display: none;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
      width: 100%;
      border-radius: 15px;
      margin-top: 35px;
    }

    p {
      font-size: 12px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      width: 9rem;
      margin-top: 15px;
    }
  }

  @media (min-width: 1200px) {
    width: 300px;
    height: 390px;
    flex-direction: column;
    box-shadow: 6px 6px 6px #000;
    display: initial;
  } 
`;


