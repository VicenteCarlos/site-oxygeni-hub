import styled from "styled-components"

const StyledMain = styled.main`
    background-color: #294079;
    height: 200vh;
    
        
    
`

const SectionInfos = styled.section`
   
   .box{
       display:flex;
       flex-direction:column;
       justify-content: space-between;
       @media screen and (min-width:1024px){
            display:flex;
            flex-direction:row;
            justify-content: space-between;
        }
        
    }
    .fotos{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:center;
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
            margin: 110px 206px 0 0;
        }
    }
    .fotos img{
        margin: 0px 25px;
        @media screen and (min-width:1024px){
            margin: 0 0 60px 0;
        }
        
    }
    .imgSquad{
        width: 150px;
        height: 150px;
        border-radius: 150px;
        margin: auto;
        @media screen and (min-width:1024px){
            width: 200px;
            height: 200px;
            margin-bottom: 50px;
            
        }
        @media screen and (min-width:1200px){
            width: 250px;
            height: 250px;
            border-radius: 250px;
            margin: 150px 0 20px 0;
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
            width: 250px;
            height: 250px;
            border-radius: 250px;
            margin: 100px 0 0 0;
        }
    }
    .informacoes{
        margin: 150px 0 50px 0;
        @media screen and (min-width:1024px) {
            margin: 100px 0 0 50px;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;  
        }
        @media screen and (min-width:1200px){
           font-size: large;
           margin-left:50px;
        }
    }


    h2, p {
        color: white;
        text-align: center;
        cursor: text;
    }

    h2 {
        padding-top: 15px;
        padding-bottom: 11px;
        font-family:'Arial' ;
        font-size: 30px;
       
    }

    p {
        line-height: 28px;
        width: 15rem;
        margin: 0 auto;
        font-family:'Arial' ;
    }

   
   
        h2 {
            font-size: 45px;
            font-weight: 700;
        }

        p {
            width: 500px;
        }
    
`

export { StyledMain, SectionInfos }