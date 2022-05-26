import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #1c2f5d;
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  display: ${props => props.modalIsOpen ? "none" : "flex"};
  height: 200px;
  margin-top: ${props => props.page === "opportunities" ? "200px" : "0px"};;
  text-decoration: none;
  .logoRodape {
    display: none;
  }

  #logo {
    display: none;
  }

  /* .botao-1 {
    background-color: #eff0f2;
    padding: 15px;
    border: none;
    width: 280px;
    height: 80px;
    border-radius: 25px;
    font-size: 22px;
    font-family: "Roboto", sans-serif;
    color: #1c2f5d;
    cursor: pointer;
    font-weight: bold;
    margin: 15px auto 0 auto;
    text-decoration: none;
   
  } */

  .redes {
    width: auto;
    height: auto;
    display: flex;
    margin: 0 16px;
    /* padding: 5rem; */
    
    a {
      margin: auto;
      text-decoration: none;
      .redesocial {
        width: 140px;
        cursor: pointer;
        align-items: center;
        
      }
    }
  }

  .conteudo {
    display: none;
    

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
      margin-top: 16px;
      padding: 15px;
      border: none;
      width: 210px;
      border-radius: 25px;
      font-size: 22px;
      font-family: "Roboto", sans-serif;
      color: #1c2f5d;
      cursor: pointer;
      font-weight: bold;
      text-decoration: none;
      a {
        text-decoration: none;
        color:#1c2f5d;
      }
      
    }
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }

  @media (min-width: 1200px) {

    .botao-1 {
      display: none;
    }
    .box{
      display:flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
    
    #logo {
      display: none;
      width: 200px;
      left: 1600px;
      bottom: 50px;
    }

    .logoRodape {
      width: 600px;
      height: 280px;
      border-right: 3px solid;
      color: white;
    }

    .conteudo {
      align-items: center;
      justify-content: flex-start;
      
      flex-flow: column nowrap;
      margin: 0 200px 0 100px;
      bottom: 100px;
      display: initial;
    }
    .redes{
      height: 100px;
      width: 200px;
      padding: 10px;
      .redesocial{
        width: 200px;
      }
    }
    }  
  }
`;
