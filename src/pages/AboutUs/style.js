import styled from "styled-components"

export const StyledMain = styled.main`
height: 1800px;

.container{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    border-top: 10px;
    margin:50px 0px 20px 0px;
    align-items: center;
    @media screen and (min-width:768px){
            display:flex;
            flex-direction: row;
            width:100vw;  
    }
   }
    .conteudo{
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        }
        .titulo{
            font-family: 'PT Sans', sans-serif;
            font-size: 25px;
            color:#1C2F5D;
            padding:10px;
            align-items: center;
        }   

        
        .texto{
            font-family: 'Source Sans Pro', sans-serif;
            color:#1C2F5D;
            font-size:18px;
            margin:8px;
            width:180px;
            padding: 9px;
            border-radius: 15px;
            text-align: center;
        }
    }

    .imgmain{
        width:210px;
        height:180px;
        border: 3px solid #1C2F5D;
        padding:10px;
    }  
}   


.container2 { 
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    margin-top:150px;
    @media screen and (min-width:768px){
            display:flex;
            flex-direction: row;
            width:100vw;
        
    }
    .titulo{
            font-family: 'PT Sans', sans-serif;
            font-size: 25px;
            color:#1C2F5D;
            padding:15px;
            align-items: center;
            @media(min-width: 768px){
                font-size: 30px;
            }
        }   

        
    .texto{
        font-family: 'Source Sans Pro', sans-serif;
        color:#1C2F5D;
        font-size:18px;
        margin:5px;
        width:180px;
        padding: 9px;
        border-radius: 15px;
        text-align: center;
        @media screen and(min-width: 768px){
            font-size: 21px;
        }
    }

    .imgtime{
        width:200px;
        height:150px;
        margin:20px 20px 20px 0;
        border: 3px solid #1C2F5D;
        padding:10px;
    }

    .conteudo2 {
        display:flex;
        flex-direction:column;
        align-items:center;
    }
}

.container3{
    display:flex;
    flex-direction: column; 
    align-items: center;
    justify-content:center;
    margin-top:15px;
    @media screen and (min-width:768px){
            display:flex;
            flex-direction: row;
            width:100vw;
        
    }
    .titulo{
            font-family: 'PT Sans', sans-serif;
            font-size: 21px;
            color:#1C2F5D;
            padding:10px;
            @media screen and(min-width:768px){
                font-size:30px;
            }
           
        }   

        
    .texto{
        font-family: 'Source Sans Pro', sans-serif;
        color:#1C2F5D;
        font-size:18px;
        margin:5px;
        width:200px;
        padding: 9px;
        border-radius: 15px;
        text-align: center;
        
    }

    .imgeco{
        width:200px;
        height:150px;
        border: 3px solid #1C2F5D;
        padding:20px;
    }
}

.container4{
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content:space-around;
    margin-top:130px;
    @media screen and (min-width:768px){
            display:flex;
            flex-direction: row;
            width:100vw;    
    }
    @media screen and (min-width:800){
        display:flex;
        flex-direction: row;
        width:100vw;

    }
    .imguni{
        width:200px;
        height:150px;
        border: 3px solid #1C2F5D;
        padding:10px;
    }
    
    .titulo{
        font-family: 'PT Sans', sans-serif;
        font-size: 23px;
        color:#1C2F5D;
        padding:15px;
        align-items: center;
        @media (min-width: 768px) {
            font-size: 30px;
        }
    }   

        
    .texto{
        font-family: 'Source Sans Pro', sans-serif;
        color:#1C2F5D;
        font-size:18px;
        margin:5px;
        width:280px;
        padding: 9px;
        border-radius: 15px;
        text-align: center;
        @media(min-width:768px){
            font-size: 20px;
        }
    }

    .conteudo4 {
        display:flex;
        flex-direction: column;
        align-items:center;
        width:200px;
        height:150px;
        margin-bottom: 20px;

        div {
            p {
                width: 200px;
            }
        }

   
    }


`