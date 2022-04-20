import styled from "styled-components"

export const StyledMain = styled.main`
  height: 450px;

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

   h2 {
     color:#1c2f5d;
     font-size: 50px;
     text-align: center;
     margin-top: 70px;
     font-family: 'Plus Jakarta Sans', sans-serif;
   }

   img {
     margin-top: 20px;
     width: 600px;
   }

   section {
     .js {
       color: #F7DF1E;
       width: 100px;
       height: 150px;
    }

    .html5 {
      color: #FF5722;
      width: 100px;
      height: 150px;
    }

    .css3 {
      color: #0070ba;
      width: 100px;
      height: 150px;
    }

    .python3 {
      color: #6B68CF;
      width: 100px;
      height: 150px;
    }

    .react {
      color: #5ccfee;
      width: 100px;
      height: 150px;
    }

    .angular {
      color: #d62f34;
      width: 100px;
      height: 150px;
    }

    .mysql {
      width: 100px;
      height: 150px;
    }

    .java {
      color: #F25C39;
      width: 100px;
      height: 150px;
    }
   }
}
`