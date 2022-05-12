import styled from "styled-components"

export const StyledMain = styled.main`
height:100vh;
width: 80vw;
:root{
    font-size: 62.5%;
}
.container{
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-top: 2rem;
    margin:10rem auto 2rem auto;

    .conteudo{
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;

        .titulo{
            font-family: 'PT Sans', sans-serif;
            font-size: 4.5rem;
            color:#1C2F5D;
            padding:2.5rem;
            align-items: center;
        }   

        
        .texto{
            font-family: 'Source Sans Pro', sans-serif;
            color:#1C2F5D;
            font-size:2.8rem;
            margin:1rem;
            width:48rem;
            padding: 0.9rem;
            border-radius: 1.5rem;
            text-align: center;
        }
    }

    .imgmain{
        width:40rem;
        height:30rem;
        margin: 2rem 15rem 2rem auto;
        border: 0.8rem solid #1C2F5D;
        padding-block:10rem;
    }  
    
}

.container2 { 
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    
    margin: 15rem auto 5rem auto ;
    
        h3 {
    font-size: 2.7rem;
    display:flex;
    flex-direction: column;
    align-items: center;
  }
   

   
}

.container3{
    display:flex;
    align-items: center;
    justify-content:space-around;
    margin-top:15rem;

    .titulo{
            font-family: 'PT Sans', sans-serif;
            font-size: 4.5rem;
            color:#1C2F5D;
            padding:2.5rem;
            align-items: center;
        }   

        
    .texto{
        font-family: 'Source Sans Pro', sans-serif;
        color:#1C2F5D;
        font-size:2.8rem;
        margin:1rem;
        width:48rem;
        padding: 0.9rem;
        border-radius: 1.5rem;
        text-align: center;
    }

    .imgeco{
        width:40rem;
        height:30rem;
        border: 0.8rem solid #1C2F5D;
        padding:2rem
    }
}

.container4 {
   width: auto;
    display:flex;
    align-items: center;
    justify-content:space-around;
    margin-top:230px;

    .imguni{
        width:400px;
        height:300px;
        border: 8px solid #1C2F5D;
        padding:20px;
    }
    
    .titulo{
        font-family: 'PT Sans', sans-serif;
        font-size: 45px;
        color:#1C2F5D;
        padding:25px;
        align-items: center;
    }   

        
    .texto{
        font-family: 'Source Sans Pro', sans-serif;
        color:#1C2F5D;
        font-size:2rem;
        margin:1rem;
        width:88rem;
        padding: 0.9rem;
        border-radius: 1.5rem;
        text-align: center;
    }

    .conteudo4 {
       width: 80%;
        display:flex;
        flex-direction: column;
        align-items:center;
        width:85rem;
        height:35rem;
        margin-bottom: 6rem;

        div {
            p {
                width: 60rem;
            }
        }

    }
}
`