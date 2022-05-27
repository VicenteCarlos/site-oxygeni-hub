import styled from "styled-components"

const StyledMain = styled.main`
    background-color: #294079;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 7rem;

    @media(max-width:768px){
     height:120vh;
    }

`

const SectionInfos = styled.section`
   
   .box{
       display:flex;
       flex-direction:column;
       justify-content: space-between;
       align-items: center;
     
       @media screen and (min-width:1024px){
            flex-direction:row;
            justify-content: space-between;
           
        }
        
    }
    
    .fotos{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:space-around;
        @media (max-width:642px){
            display: none;
        }
        @media screen and (min-width:1024px){
            display:flex;
            flex-direction: row-reverse;
            justify-content: flex-end;
            margin: 110px 100px 0 100px;
        }
        @media screen and (min-width:1200px){
            display:flex;
            flex-direction: row-reverse;
            justify-content: flex-end;
            margin: 110px 0px 0 100px;
        }
    }
    .fotos img{
        margin: 0px 25px;
        @media screen and (max-width: 1024px) {
            margin-bottom: 35px;

        }
        
    }
    .imgSquad{
        width: 150px;
        height: 150px;
        border-radius: 150px;
        margin: 4px 50px 38px 10px !important;

        @media screen and (min-width:1024px){
            width: 200px;
            height: 200px;
            
        }
        @media screen and (min-width:1200px){
            width: 230px;
            height: 230px;
            border-radius: 230px;
            margin: 100px 0 0 0;
            display:flex;
            flex-direction: column;
        }

    }
    
    .imgsquad{
        width: 150px;
        height: 150px;
        border-radius: 150px;
        margin: auto;
        
        @media screen and (min-width:1024px){
            width: 200px;
            height: 200px;
         
        }
        @media screen and (min-width:1200px){
            width: 220px;
            height: 220px;
            border-radius: 230px;
            margin: 100px 0 0 0;
        }
    }
    .texto{
        text-align: left;

    }
    .informacoes{
        margin: 150px 0 50px 0;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: space-around;
        @media screen and (max-width:1024px){
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        @media screen and (min-width:1024px) {
            margin: 100px 0 0 50px;
            display:flex;
            flex-direction: column;
            justify-content: flex-start;
            p{
                width: 500px;
            }  
            h2{
                display: flex;
                justify-content: flex-start;
                color:white;
            }
        }
        @media screen and (min-width:1200px){
            font-size: large;
           margin-left:50px;
        }
    }


    h2, p {
        color: white;
        cursor: text;
    }

    h2 {
        padding-top: 15px;
        padding-bottom: 11px;
        font-family:'Arial' ;
        font-size: 40px;
        text-transform: uppercase;
       
    }

    p {
        line-height: 28px;
        width: 15rem;
        font-family:'Arial' ;
    }

   
   
        

        
    
`

export { StyledMain, SectionInfos }