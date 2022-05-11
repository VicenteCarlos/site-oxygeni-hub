import styled from "styled-components"

export const StyledMain = styled.main`
height: 1800px;

.container{
    display:flex;
    justify-content: space-around;
    border-top: 2rem;
    margin:10rem 2rem 2rem 2rem;

    .conteudo{
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;

        .titulo{
            font-family: 'PT Sans', sans-serif;
            font-size: 3rem;
            color:#1C2F5D;
            padding:2rem;
            align-items: center;
        }   

        
        .texto{
            font-family: 'Source Sans Pro', sans-serif;
            color:#1C2F5D;
            font-size:2rem;
            margin:1rem;
            width:48rem;
            padding: 0.9rem;
            border-radius: 1.5rem;
            text-align: center;
        }
    }

    .imgmain{
        width:30rem;
        height:20rem;
        border: 0.5rem solid #1C2F5D;
        padding:2rem;
    }  
    
}

.container2 { 
    display:flex;
    align-items: center;
    justify-content:space-around;
    margin-top:1.5rem;

    .titulo{
            font-family: 'PT Sans', sans-serif;
            font-size: 3rem;
            color:#1C2F5D;
            padding:1rem;
            align-items: center;
        }   

        
    .texto{
        font-family: 'Source Sans Pro', sans-serif;
        color:#1C2F5D;
        font-size:2rem;
        margin:1rem;
        width:28rem;
        padding: 0.9rem;
        border-radius: 1.5rem;
        text-align: center;
    }

    .imgtime{
        width:30rem;
        height:20rem;
        margin:2rem 2rem 2rem 0;
        border: 0.5rem solid #1C2F5D;
        padding:2rem;
    }

    .conteudo2 {
        display:flex;
        flex-direction:column;
        align-items:center;
    }
}

.container3{
    display:flex;
    align-items: center;
    justify-content:space-around;
    margin-top:15rem;

    .titulo{
            font-family: 'PT Sans', sans-serif;
            font-size: 3rem;
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
        padding:2rem;
    }
}

.container4 {
    display:flex;
    align-items: center;
    justify-content:space-around;
    margin-top:23rem;

    .imguni{
        width:20rem;
        height:15rem;
        border: 0.8rem solid #1C2F5D;
        padding:2rem;
    }
    
    .titulo{
        font-family: 'PT Sans', sans-serif;
        font-size: 3rem;
        color:#1C2F5D;
        padding:2.5rem;
        align-items: center;
    }   

        
    .texto{
        font-family: 'Source Sans Pro', sans-serif;
        color:#1C2F5D;
        font-size:1.5rem;
        margin:1rem;
        width:40rem;
        padding: 0.9rem;
        border-radius: 1.5rem;
        text-align: center;
    }

    .conteudo4 {
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