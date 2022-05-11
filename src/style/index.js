import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        
    }
    body{
        font-size:62.5%; /* 1rem = 10px */
    }

    body::-webkit-scrollbar {
        width: 1.2rem;               
    }

    body::-webkit-scrollbar-track {
        background: white;       
    }

    body::-webkit-scrollbar-thumb {
        background-color: #1c2f5d;    
        border-radius: 2rem;      
    }

`;
