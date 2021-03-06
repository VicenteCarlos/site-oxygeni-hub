import styled from "styled-components";

export const StyledMain = styled.main`
  height: 1200px;
  display: ${props => props.modalIsOpen ? "none" : "initial"};
  
  .s-1 {
    background-color: blue;
    color: white;
    height: 500px;
    background-image: linear-gradient(-150deg, #4061b1, #1c2f5d);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 200px;
    }

    p {
      width: 200px;
      text-align: center;
      font-size: 17px;
      margin-top: 30px;
      line-height: 30px;
      font-family: 'Nunito Sans', sans-serif;
    }

    @media (min-width: 768px) {
      p {
        width: 400px;
      }
    }
  }

  .s-2 {
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
        top: 29px;

        h2 {
          color: #1c2f5d;
          font-size: 32px;
          line-height: 19px;
          font-family: 'Nunito Sans', sans-serif;
          
         
        }

        .h2-2 {
          color: white;
          -webkit-text-stroke: 1px #747f9c;
          font-family: 'Nunito Sans', sans-serif;
         
        }

        .h2-3 {
          color: transparent;
          -webkit-text-stroke: 1px #858fa7;
          font-family: 'Nunito Sans', sans-serif;
          
        }
      }

      p {
        width: 200px;
        text-align: center;
        font-size: 20px;
        color: #1c2f5d;
        margin-top: 10px;
        padding: 60px 50px 50px 50px;
        background-color: #eff0f2;
        border-radius: 15px;
        font-family: 'Nunito Sans', sans-serif;
      }
    }

    img {
      display: none;
    }

    @media (min-width: 768px) {
      .content {
        div {

          h2 {
            font-size: 42px;
          }
        }

        p {
          width: 500px;
        }
      }
    }

    @media (min-width: 1200px) {
      .content {
        div {
          right: 90px;
        }

        p {
          width: 400px;
          margin-right: 200px;
        }
      }

      img {
        display: initial;
        width: 300px;
      }
    }

    @media (min-width: 1400px) {

      img {
        display: initial;
        width: 410px;
      }
    }
  }

  .s-3 {
    background-color: #eff0f2;
    padding: 15px;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60vh;

    h2 {
      color: #1c2f5d;
      font-family: 'Nunito Sans', sans-serif;
      font-size: 30px;
      margin-left: 3%;
      margin-top: 20px;
      text-align: center;
    }

    @media (min-width: 320px) {
      .cards-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        overflow-x: scroll;
      }
    }

    @media (min-width: 768px) {
      div {
        display: flex;
        flex-wrap: wrap;
      }

      h2 {
        font-size: 45px;
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 700;
      }
    }

    @media (min-width: 1200px) {
      height: 80vh;
      
      .cards-container {
        overflow-x: initial;
        justify-content: center;
      }
    }
    
  }
`;
