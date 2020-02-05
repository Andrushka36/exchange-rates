import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: "Segoe UI",Arial,sans-serif;
        color: #666;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyles;