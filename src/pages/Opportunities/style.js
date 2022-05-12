import styled from "styled-components";

export const StyledMain = styled.main`
  height: 850px;

  body {
    font-size: 62.5%;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h2 {
      color: #1c2f5d;
      font-size: 190%;
      text-align: center;
      margin-top: 70px;
      font-family: "Plus Jakarta Sans", sans-serif;
    }

    img {
      width: 20rem;
      position: relative;
      margin: 0 130%;
    }

    .s-1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 10rem;
      .icons {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        text-align: center;
        width: 20rem;
        flex-wrap: wrap;

        figcaption {
          display: flex;
          justify-content: center;
          border-radius: 0.5rem;
          padding: 0.6rem;
          color: white;
          font-family: "DM Sans", sans-serif;
        }

        section {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 5rem;
          font-size: 0.9rem;
          font-weight: 900;
          margin: 0 20px;

          @media (min-width: 720px) {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 3rem;
            font-size: 0.9rem;
            font-weight: 900;
            margin: 0 20px;
          }

          figure {
            .js {
              color: #ffa500;
              width: 3rem;
              height: 50px;
            }
            .java {
              color: #f25c39;
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
              margin: 20px 0;
            }

            .mysql,
            .java {
              margin-top: 10px;
            }
          }
        }
      }
      .nameBackGroundColorCSS {
        background-color: #0070ba;
      }
      .nameBackGroundColorJS {
        background-color: #ffa500;
      }
      .nameBackGroundColorPython {
        background-color: #6a5acd;
      }
      .nameBackGroundColorReact {
        background-color: #61dbfb;
      }
      .nameBackGroundColorAngular {
        background-color: red;
      }
      .nameBackGroundColorMySql {
        background-color: #0075bf;
      }
      .nameBackGroundColorJava {
        background-color: #f89820;
      }
      .nameBackGroundColorHTML {
        background-color: #e34c26;
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
          font-size: 1.4rem;
          color: #1c2f5d;
          width: 100%;
          margin-top: 34px;
          text-align: center;
        }
      }
    }
  }
`;
