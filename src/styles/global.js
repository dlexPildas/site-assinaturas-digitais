import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    background: #f1f1f1;
  }

  body {
    
    -webkit-font-smoothing: antialiased !important; 
  }

  button {
    cursor: pointer; 
  }
`;
