import styled from "styled-components";

export const StyledMain = styled.main`
  height: 1200px;

  div {
    display: flex;
  }
`;

export const StyledSectionOne = styled.section`
  background-color: blue;
  color: white;
  height: 500px;
  background-image: linear-gradient(-150deg, #4061b1, #1c2f5d);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 1000px;
    height: 700px;
  }

  p {
    width: 410px;
    text-align: center;
    font-size: 18px;
    position: relative;
    bottom: 200px;
  }
`;

export const StyledSectionTwo = styled.section`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-bottom: 150px;

  .content {
    display: flex;
    text-align: center;
    flex-direction: column;

    div {
      position: relative;
      display: flex;
      flex-direction: column;
      top: 29px;

      h2 {
        color: #1c2f5d;
        font-size: 50px;
        line-height: 35px;
        font-family: Arial, Helvetica, sans-serif;
      }

      .h2-2 {
        color: white;
        -webkit-text-stroke: 1px #747f9c;
      }

      .h2-3 {
        color: transparent;
        -webkit-text-stroke: 1px #858fa7;
      }
    }

    p {
      width: 470px;
      text-align: center;
      font-size: 27px;
      color: #1c2f5d;
      margin-top: 10px;
      padding: 60px 105px 105px 105px;
      background-color: #eff0f2;
      border-radius: 15px;
    }
  }

  img {
    margin-left: 200px;
  }
`;

export const StyledSectionThree = styled.section`
  background-color: #eff0f2;
  padding: 15px;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #1c2f5d;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    margin-left: 3%;
    margin-top: 20px;
    text-align: center;
  }
`;
