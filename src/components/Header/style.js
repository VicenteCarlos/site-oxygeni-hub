import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #1c2f5d;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 130px;
    margin-left: 40px;
    margin-top: 5px;
  }

  button {
    border: none;
    cursor: pointer;
    background: none;
    position: relative;
    right: 150px;
  }

  svg {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    color: white;
    margin-right: 10px;
  }

  nav {
    display: none;
    
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
    box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 320px) {
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
      box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
    } 
  }

  @media (min-width: 1200px) {
    button {
      display: none;
    }
    
    nav {
      display: initial;
      margin-right: 15rem;

      ul {
        li {
          font-size: 20px;
        }
      }
    }
  }
`;
