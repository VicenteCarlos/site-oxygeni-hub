import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 20px;

  .cards {
    .card {
      width: 25rem;
      height: 25rem;
      position: relative;
      margin: 3rem 1rem;
      padding: 2rem 1.5rem;
      background-color: #1c2f5d;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      transition: 0.5s ease-in-out;
      font-family: "Noto Sans", sans-serif;

      .instituicao {
        position: relative;
        width: 27rem;
        height: 27rem;
        margin-top: 5rem;
        top: -6rem;
        left: 2rem;
        z-index: 1;

        img {
          margin: 0 auto;
          max-width: 60%;
        }
      }

      .info {
        color: white;
        font-size: 1.4rem;
        opacity: 0;
        transition-delay: 0.2s ease-in-out;
        display: flex;
        text-align: center;
        flex-direction: column;
      }

      .info {
        opacity: 100%;
        transition-delay: 1s;
        cursor: pointer;
      }

      @media screen and (min-width: 768px) {
        .cards {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .break {
          display: flex;
        }
      }
    }

    .card:hover {
      height: 50rem;
    }
  }
`;

export { StyledDiv };
