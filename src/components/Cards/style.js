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
  height: 390px;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 10px 15px 10px #000;
  cursor: pointer;

  h3 {
    font-size: 27px;
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
      margin: 35px 0;
    }

    p {
      font-size: 18px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
  }
`;
