import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #1c2f5d;
  padding: 20px;
  display: flex;
  height: 260px;
  margin-top: 596px;

  .logoRodape {
    width: 600px;
    height: 280px;
    border-right: 3px solid;
    color: white;
  }

  nav {
    display: flex;
    align-items: flex-end;
    margin: 0 10px;
  }

  .conteudo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    margin-left: 170px;

    h2 {
      color: #ffffff;
      font-size: 50px;
      line-height: 26px;
      font-family: Arial, Helvetica, sans-serif;
    }

    .frase-2 {
      opacity: 40%;
    }

    .frase-3 {
      opacity: 15%;
    }

    .botao {
      background-color: #eff0f2;
      padding: 15px;
      border: none;
      width: 210px;
      border-radius: 25px;
      font-size: 22px;
      font-family: "Roboto", sans-serif;
      color: #1c2f5d;
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

export const aLink = styled.a`
  margin: 0 -30px;

  img {
    margin-left: 10px;
    cursor: pointer;
  }
`;
