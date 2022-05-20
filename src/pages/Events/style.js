import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: #294079;

  :root {
    font-size: 62.5%;
    --heith-carrosel: 10rem;
    --width-carrosel: 10rem;

    --destop-heith-carrosel: 25rem;
    --destop-width-carrosel: 50rem;
    list-style: none;
  }

  h2 {
    font-family: "PT Sans", sans-serif;
    font-size: 2.5rem;
    color: white;
    padding: 2.5rem;
    align-items: center;
    text-align: center;
  }

  .bolinhas {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    svg + svg {
      margin-left: 2rem;
    }
    @media screen and (max-width: 970px){
      display: none;
    }
  }

  /* ===================container1=================== */
  .container1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    .conteudo0 {
      display: flex;
      flex-direction: row;

      button {
        height: auto;
        width: 5rem;
        border: none;
        background-color: #294079;
        cursor: pointer;

        img {
          width: 3rem;
          height: 3rem;
        }
      }

      button:hover {
        background-color: rgba(255, 255, 255, 0.216);
      }

      .carrosel {
        display: flex;
        flex-direction: row;
        box-shadow: 0.2rem 0.2rem 0.4rem black;
        overflow: hidden;
        height: calc(+var(--destop-heith-carrosel)+12rem);
        width: var(--width-carrosel);
        margin-right: 2rem;

        .conteudoCarrossel {
          display: flex;
          justify-content: center;
          transition: transform 0.5s ease-in-out;
          transform: translateX(0);
          background-color: white;

          div {
            display: flex;
            flex-direction: column;
            justify-items: center;
            align-items: center;
            margin-bottom: 2rem;
            margin-top: 2rem;
            background-color: white;
            img {
              object-fit: cover;
              height: 150px;
              width: 150px;
            }

            h3 {
              font-size: 1.4rem;
              font-family: "PT Sans", sans-serif;
              margin: 15px 0;
            }

            a {
              color: #294079;
              text-decoration: none;
              font-size: 1.4rem;
              font-weight: 700;
              border: 0.2rem solid #294079;
              border-radius: 2.5rem;
              padding: 0.5rem;
              text-transform: uppercase;
              font-family: "PT Sans", sans-serif;
            }

            .data {
              display: flex;
              align-items: center;
              justify-items: center;
              padding: 0 0 0 0;
              margin: 2rem 0 0 0;

              li {
                font-family: "PT Sans", sans-serif;
                text-transform: uppercase;
                font-size: 1.5rem;
                display: flex;
                align-items: center;
                justify-items: center;
                text-decoration: none;
                color: #294079;
                font-weight: 700;
              }

              li + li {
                margin-left: 1rem;
              }
            }
          }

          button {
            height: auto;
            width: auto;
          }
        }
      }
    }
    @media screen and (max-width: 970px){
      display: none;
      section{
        width: 320px;
      }
    }
  }

  /*========================conitainer2===================*/
  .container2 {
    display: flex;
    flex-direction: column;

    .conteudo2 {
      margin: 0%;
      padding: 0 5rem 0 5rem;
      flex-direction: row;
      justify-items: center;
      align-items: center;

      h2 {
        font-size: 25px;
      }

      .redesSociais {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        img {
          width: rem;
          height: 5rem;
        }

        .sympla {
          font-family: "PT Sans", sans-serif;
          text-decoration: none;
          font-size: 1.6rem;
          color: white;
          font-weight: 700;
        }

        .sympla:hover {
          background-color: white;
          color: #fff;
          padding: 1rem;
          border-radius: 5rem;
          transition: 0.2s;
        }
      }
    }
    @media screen and (max-width: 970px){
      width: 320px;
    }
  }
`;
