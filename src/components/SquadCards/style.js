import styled from "styled-components";

export const ContentSquad = styled.div`
  margin: 5rem 5rem 5rem 5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1c2f5d;
  color: white;
  
  height: 15rem;
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 1.0rem 1.5rem 1.0rem #000;
  cursor: pointer;
  font-size: 62.5%;
  height: auto;
  width: 90vw;
  h3 {
    display: flex;
    align-items: center;
    font-size: 2.7rem;
  }

  div {
    
    width: 80%;
   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    p {
      font-size: 1.8rem;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }

    img {
        width: 10rem;
        display: block;
    }
  }
`;