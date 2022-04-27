import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body::-webkit-scrollbar {
        width: 12px;               
    }

    body::-webkit-scrollbar-track {
        background: white;       
    }

    body::-webkit-scrollbar-thumb {
        background-color: #1c2f5d;    
        border-radius: 20px;      
    }
`;
