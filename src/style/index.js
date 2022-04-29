import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&family=PT+Sans&family=Roboto:wght@900&family=Source+Sans+Pro:wght@300&display=swap');
    
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
