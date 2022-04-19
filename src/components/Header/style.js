import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #1c2f5d;
  height: 100px;
  display: flex;
  align-items: center;

  .logo {
    width: 200px;
    padding-right: 150px;
    margin-left: 3%;
  }

  nav {
    ul {
      display: flex;

      .item {
        list-style: none;

        a {
          color: #8d97ae;
          text-decoration: none;
          font-family: "PT Sans", sans-serif;
          font-weight: 400;
          margin-left: 100px;
          border-radius: 15px;
          text-decoration: none;
          padding: 10px;
        }
      }
    }
  }

  ul .item a:hover {
    transition: 0.1s;
    background-color: #37466b;
    color: white;
  }
`;
