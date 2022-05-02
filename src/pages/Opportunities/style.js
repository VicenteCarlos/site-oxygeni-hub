import styled from "styled-components"

export const StyledMain = styled.main`
  height: 850px;
  width: 100vw;
  /* margin-right:800px; */
  
  
.container {
  /* margin-right:800px;
  margin-left:-180px; */
  width: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap:wrap;
   
   
    
   h2 {
     color:#1c2f5d;
     font-size: 15px;
     text-align: center;
     margin-top: 70px;
     font-family: 'Plus Jakarta Sans', sans-serif;
   }

   img {
     margin-top: 20px;
     width: 300px;
   }

   .s-1 {
       border-bottom: 15px dashed #1C2F5D;
       border-radius: 15px;

        .icons {
            section{
              display:flex;
              flex-direction:column ;
              align-items: center;
              justify-content: center;
            }

          column-count: 2;
          width: 300px;
          display: flex;
          flex-direction:row;
          flex-wrap: wrap;

            .js {
            color: #F7DF1E;
            width: 70px;
            height: 100px;
            font-size: small;
            }

            .html5 {
            color: #FF5722;
            width: 70px;
            height: 100px;
            }

            .css3 {
            color: #0070ba;
            width: 70px;
            height: 100px;
            }

            .python3 {
            color: #6B68CF;
            width: 70px;
            height: 100px;
            }

            .react {
            color: #5ccfee;
            width: 70px;
            height: 100px;
            }

            .angular {
            color: #d62f34;
            width: 70px;
            height: 100px;
            }

            .mysql {
              width: 70px;
            height: 100px;
            }

            .java {
            color: #F25C39;
            width: 70px;
            height: 100px;
                      
            }
            .FontSizeP{
              font-size: small;              
              margin-bottom: 10px;
            }
        }
   }

   .s-2 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
        
        img {
            width: 400px;
            height: 20px;
            padding-left: 2px;
            
        }

        p {
            font-size: 25px;
            color: #1c2f5d;
            width: 350px;
            text-align: center;
            margin-right: 15px;
        }
   }
}
`