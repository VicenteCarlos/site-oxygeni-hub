import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #1c2f5d;
  padding: 20px;
  display: flex;

  .logoRodape {
    width: 300px;
    border-right: 3px solid;
    color: white;
  }

  a {
    .redesocial {
      width: 100px;
      margin-left: 10px;
      cursor: pointer;
    }
  }

  .conteudo {
    display: flex;
    justify-content: flex-end;
    flex-flow: column nowrap;

    p {
      font-family: "Roboto", sans-serif;
      color: #ffffff;
      font-size: 35px;
    }

    .botao {
      background-color: #eff0f2;
      padding: 15px;
      border: none;
      width: 150px;
      border-radius: 25px;
      font-size: 15px;
      font-family: "Roboto", sans-serif;
      color: #1c2f5d;
      cursor: pointer;
    }
  }
`;
