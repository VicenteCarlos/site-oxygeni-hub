import styled from "styled-components"

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 3px solid white;
    padding: 15px;
    border-radius: 10px;
    width: 78vw;
    margin: 38px auto 0 0;


    label, input {
        color: #294079;

    }
    div{
        background-color: white;
        border-radius: 10px;
    }
    button {
        width: 200px;
        background-color: white;
        color: #294079;
        font-weight: bold;
        margin: 14px auto 0 auto;
    }

    button:hover {
        background-color: white;
        color: #294079;
    }
  
    @media (min-width: 768px) {
        width: 50vw;
    }
    
    @media (min-width: 1024px) {
        width: 30vw;
    }
    @media (min-width: 1600px){
        width: 25vw;
    }




`

export { StyledForm }