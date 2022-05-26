import styled from "styled-components";

export const StyledMain = styled.main`
  height: 850px;
  display: ${props => props.modalIsOpen ? "none" : "flex"};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h2 {
      color: #1c2f5d;
      font-size: 180%;
      text-align: center;
      font-family: "Plus Jakarta Sans", sans-serif;
    }

    h3{
      text-align: center;
      margin:20px 0;
      color:#1C2F5D;
      font-size:25px;
      font-family: 'Nunito Sans', sans-serif;
    }

    img {
      width: 22rem;
      position: relative;
    }

    @media (max-width:480px){
          h2{
             margin-top: 250px;
          }
      }
        
    .s-1 {


      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .icons {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        text-align: center;
        width: 100%;
        flex-wrap: wrap;

        figcaption {
          display: flex;
          justify-content: center;
          border-radius: 0.5rem;
          padding: 0.6rem;
          color: white;
          font-family: 'Nunito Sans', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          margin: 0px;
        }

        section {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 5rem;
          font-size: 0.9rem;
          font-weight: 900;
          margin: 0 20px;

          .modal {
            display: flex;
            justify-content: center;
            text-align: center;
          }

          .modal-overlay {
            background: blue;
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .modal-content {
            width: 90%;
            max-width: 500px;
            background-color: red;
            padding: 10px;
            border-radius: 5px;
          }

          button {
            border-radius: 25px;
            font-weight: bold;
            cursor: pointer;
            border: 2px solid transparent;
          }

          figure {
            .JavaScript {
              color: #F58131;
              width: 3rem;
              height: 45px;
            }

            .Java {
              color: #ff6347;
              width: 2.5rem;
              height: 40px;
            }

            .Html5 {
              color: #ff5722;
              width: 2.5rem;
              height: 40px;
            }

            .Cs3 {
              color: #0070ba;
              width: 2.5rem;
              height: 40px;
            }

            .Python {
              color: #6a5acd;
              width: 2.5rem;
              height: 40px;
            }

            .React {
              color: #5ccfee;
              width: 2.5rem;
              height: 35px;
            }

            .Angular {
              color: #d62f34;
              width: 2.5rem;
              height: 40px;
            }

            .Mysql {
               width: 2.5rem; 
              height: 40px;
            }

            .Python,
            .Angular,
            .React {
              margin: 0;
            }

            .Mysql,
            .Java {
              margin: 0;
            }
          }
        }
      }

      #Cs3 {
        background-color: #0070ba;
        border-radius: 25px;
        border: 3px dashed #0070ba;
      }

      #Cs3:hover {
        color: #0070ba;
        background-color: white;
        transition: 0.5s;
      }

      #JavaScript {
        background-color: #F58131;
        border-radius: 25px;
        border: 3px dashed #F58131;
        color: white;
      }

      #JavaScript:hover {
        color: #F58131;
        background-color: white;
        transition: 0.5s;
      }

      #Python {
        background-color: #6a5acd;
        border-radius: 25px;
        border: 3px dashed #6a5acd;
      }

      #Python:hover {
        color: #6a5acd;
        background-color: white;
        transition: 0.5s;
      }

      #React {
        background-color: #61dbfb;
        border-radius: 35px;
        border: 3px dashed #61dbfb;
      }

      #React:hover {
        color: #61dbfb;
        background-color: white;
        transition: 0.5s;
      }

      #Angular {
        background-color: red;
        border-radius: 35px;
        border: 3px dashed red;
      }

      #Angular:hover {
        color: red;
        background-color: white;
        transition: 0.5s;
      }

      #Mysql {
        background-color: #0075bf;
        border-radius: 35px;
        border: 3px dashed #0075bf;
      }

      #Mysql:hover {
        color: #0075bf;
        background-color: white;
        transition: 0.5s;
      }

      #Java {
        background-color: #ff6347;
        border-radius: 35px;
        border: 3px dashed #ff6347;
      }

      #Java:hover {
        color: #ff6347;
        background-color: white;
        transition: 0.5s;
      }

      #Html5 {
        background-color: #e34c26;
        border-radius: 35px;
        border: 3px dashed #e34c26;
      }

      #Html5:hover {
        color: #e34c26;
        background-color: white;
        transition: 0.5s;
      }
        
      
    }

    .s-2 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;

      img {
        width: 700px;
        height: 500px;
      }

      p {
        font-size: 30px;
        color: #1c2f5d;
        width: 100%;
        text-align: center;
      }

      @media (min-width: 320px) {
        p {
          font-size: 1rem;
          color: #1c2f5d;
          width: 100%;
          margin-top: 34px;
          text-align: center;
        }
      }


      @media (min-width: 600px) {
        p {
          font-size: 1.2rem;
          color: #1c2f5d;
          width: 100%;
          margin-top: 34px;
          text-align: center;
        }
      }

      @media (min-width: 720px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 4rem;
        font-size: 0.9rem;
        font-weight: 900;
        margin: 0 20px;
      }
    }
  }

  @media (min-width: 720px) {
    .container {
      h2 {
        font-size: 220%;
      }
    }
  }
`;
