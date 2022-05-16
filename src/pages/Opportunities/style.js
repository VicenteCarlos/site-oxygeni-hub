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

    img {
      width: 20rem;
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
          font-family: "DM Sans", sans-serif;
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
            .js {
              color: #ffa500;
              width: 3rem;
              height: 50px;
            }

            .java {
              color: #ff6347;
              width: 3rem;
              height: 50px;
            }

            .html5 {
              color: #ff5722;
              width: 3rem;
              height: 50px;
            }

            .css3 {
              color: #0070ba;
              width: 3rem;
              height: 50px;
            }

            .python3 {
              color: #6a5acd;
              width: 3rem;
              height: 50px;
            }

            .react {
              color: #5ccfee;
              width: 3rem;
              height: 50px;
            }

            .angular {
              color: #d62f34;
              width: 3rem;
              height: 50px;
            }

            .mysql {
               width: 3rem; 
              height: 50px;
            }

            .python3,
            .angular,
            .react {
              margin: 0;
            }

            .mysql,
            .java {
              margin: 0;
            }
          }
        }
      }

      #nameBackGroundColorCSS {
        background-color: #0070ba;
        border-radius: 25px;
        border: 3px dashed #0070ba;
      }

      #nameBackGroundColorCSS:hover {
        color: #0070ba;
        background-color: white;
        transition: 0.5s;
      }

      #nameBackGroundColorJS {
        background-color: #ffa500;
        border-radius: 25px;
        border: 3px dashed #ffa500;
      }

      #nameBackGroundColorJS:hover {
        color: #ffa500;
        background-color: white;
        transition: 0.5s;
      }

      #nameBackGroundColorPython {
        background-color: #6a5acd;
        border-radius: 25px;
        border: 3px dashed #6a5acd;
      }

      #nameBackGroundColorPython:hover {
        color: #6a5acd;
        background-color: white;
        transition: 0.5s;
      }

      #nameBackGroundColorReact {
        background-color: #61dbfb;
        border-radius: 35px;
        border: 3px dashed #61dbfb;
      }

      #nameBackGroundColorReact:hover {
        color: #61dbfb;
        background-color: white;
        transition: 0.5s;
      }

      #nameBackGroundColorAngular {
        background-color: red;
        border-radius: 35px;
        border: 3px dashed red;
      }

      #nameBackGroundColorAngular:hover {
        color: red;
        background-color: white;
        transition: 0.5s;
      }

      #nameBackGroundColorMySql {
        background-color: #0075bf;
        border-radius: 35px;
        border: 3px dashed #0075bf;
      }

      #nameBackGroundColorMySql:hover {
        color: #0075bf;
        background-color: white;
        transition: 0.5s;
      }

      #nameBackGroundColorJava {
        background-color: #ff6347;
        border-radius: 35px;
        border: 3px dashed #ff6347;
      }

      #nameBackGroundColorJava:hover {
        color: #ff6347;
        background-color: white;
        transition: 0.5s;
      }

      #nameBackGroundColorHTML {
        background-color: #e34c26;
        border-radius: 35px;
        border: 3px dashed #e34c26;
      }

      #nameBackGroundColorHTML:hover {
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
