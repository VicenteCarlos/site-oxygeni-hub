import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1c2f5d;
  padding: 14px;

  img {
    width: 110px;
    margin-left: 15px;
    padding-top: 1%;
  }

  button {
    background: none;
    border: none;
    color: white;
    font-size: 25px;
    margin-right: 20px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
`;

const StyledMain = styled.main`
  width: 100vw;
  height: 93vh;
  background-color: #294079;
  display: flex;
  flex-direction: column;
  align-items: center;

  .nav-1 {
    ul {
      list-style-type: none;
      margin-top: 40px;

      li {
        text-align: center;
        line-height: 60px;

        a {
          text-decoration: none;
          color: white;
          font-family: "Montserrat", sans-serif;
          font-weight: bold;
          font-size: 19px;

          button {
            background: none;
            border: none;
            color: white;
            font-family: "Montserrat", sans-serif;
            font-weight: bold;
            font-size: 19px;
          }
        }
      }
    }
  }

  .nav-2 {
    margin-top: 50px;

    a {
      svg {
        font-size: 30px;
        color: white;
        margin: 0 10px;
      }
    }
  }
`;

export { StyledMain, StyledHeader };
