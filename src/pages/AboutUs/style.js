import styled from "styled-components"

export const StyledMain = styled.main`
height: 1800px;

.container{
    display:flex;
    justify-content: space-around;
    border-top: 20px;
    margin:110px 20px 20px 20px;

    .conteudo{
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;

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
            font-size:28px;
            margin:10px;
            width:480px;
            padding: 9px;
            border-radius: 15px;
            text-align: center;
        }
    }

    .imgmain{
        width:600px;
        height:400px;
        border: 8px solid #1C2F5D;
        padding:20px;
    }  
    
}

.container2 { 
    display:flex;
    align-items: center;
    justify-content:space-around;
    margin-top:150px;

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
        font-size:28px;
        margin:10px;
        width:480px;
        padding: 9px;
        border-radius: 15px;
        text-align: center;
    }

    .imgtime{
        width:450px;
        height:400px;
        margin:20px 20px 20px 0;
        border: 8px solid #1C2F5D;
        padding:20px;
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
    margin-top:150px;

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
        font-size:28px;
        margin:10px;
        width:480px;
        padding: 9px;
        border-radius: 15px;
        text-align: center;
    }

    .imgeco{
        width:400px;
        height:300px;
        border: 8px solid #1C2F5D;
        padding:20px;
    }
}

.container4 {
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
        font-size:28px;
        margin:10px;
        width:880px;
        padding: 9px;
        border-radius: 15px;
        text-align: center;
    }

    .conteudo4 {
        display:flex;
        flex-direction: column;
        align-items:center;
        width:850px;
        height:350px;
        margin-bottom: 60px;

        div {
            p {
                width: 600px;
            }
        }

    }
}
`