import styled from "styled-components"

const StyledMain = styled.main`
    background-color: #294079;
   
`

const SectionInfos = styled.section`
    h2, p {
        color: white;
        text-align: center;
    }

    h2 {
        padding-top: 15px;
        padding-bottom: 11px;
    }

    p {
        line-height: 28px;
        width: 15rem;
        margin: 0 auto;
    }

    @media (min-width: 768px) {
        h2 {
            font-size: 35px;
        }

        p {
            width: 500px;
        }
    }
`

export { StyledMain, SectionInfos }