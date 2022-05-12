import styled from "styled-components"

export const StyledMain = styled.main`

font-size: 62.5%;
display: flex;
flex-direction: column;
align-items: center;
height: auto;
width: auto;
margin: auto 20rem auto 20rem;
.div1{
    display: block;
}
.container1{
    display:flex;
    flex-direction: column;
    justify-content: center;
    border-top:2rem;
    margin:2rem auto auto auto;

    .conteudo{
        display:block;
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
           display: flex;
            font-family: 'Source Sans Pro', sans-serif;
            color:#1C2F5D;
            font-size:2.8rem;
            margin:1rem;
            padding: 0.9rem;
            text-align: center;
        }
    }

    .imgmain{
        width:15rem;
        height:10rem;
        border: 0.8rem solid #1C2F5D;
        padding:2rem;
        margin: auto;
    }  
    
}

.container2 { 
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    margin-top:15rem;
    div{
        flex-direction: column;
    }
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

    .imgtime{
        width:45rem;
        height:40rem;
        margin:2rem 2rem 2rem 0;
        border: 0.8rem solid #1C2F5D;
        padding:2rem;
    }

    .conteudo2 {
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }
}

.container3{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin-top:15rem;
    width: 100%;
    .conteudo3{
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }

    .titulo{
            font-family: 'PT Sans', sans-serif;
            font-size: 4.5rem;
            color:#1C2F5D;
        
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
        width:20rem;
        height:10rem;
        border: 0.8rem solid #1C2F5D;
        padding:2rem;
    }
}

.container4 {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 80%;
    margin: 2rem 2rem 2rem 2rem;

    .imguni{
        
        width:10rem;
        height:8rem;
        border: 8rem solid #1C2F5D;
        padding:2rem;
        margin: 2rem 2rem 2rem 2rem;
        
    }
    
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
        width:88rem;
        padding: 0.9rem;
        border-radius: 1.5rem;
        text-align: center;
    }

    .conteudo4 {
       width: 20rem;
        display:flex;
        flex-direction: column;
        align-items:center;
        width:10rem;
        height:5rem;
        margin: 2rem 2rem 6rem 2rem;
        
        justify-content: center;
       
        div {
        
            p {
                width:8rem ;
            }
        }
    
    }
}
`