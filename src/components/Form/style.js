import styled from "styled-components"

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    border: 3px solid white;
    padding: 15px;
    border-radius: 8px;
    width: 78vw;
    margin: 38px auto 0 auto;

    label, input {
        color: white;
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
`

export { StyledForm }