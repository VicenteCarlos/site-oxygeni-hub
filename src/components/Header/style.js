import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #1c2f5d;
  height: 100px;
  display: flex;
  align-items: center;

  .logo {
    width: 300px;
    margin-right: 150px;
  }

  nav .item {
    color: #8d97ae;
    text-decoration: none;
    margin: 20px;
    font-family: "PT Sans", sans-serif;
    font-weight: 400;
    margin-left: 100px;
    padding: 10px;
  }

  .item:hover {
    transition: 0.5s;
    background-color: #37466b;
    color: white;
    border-radius: 15px;
  }
`;
