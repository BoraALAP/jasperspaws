import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i|Poppins:400,500,600,700&display=swap');

  html{
    overflow-x: hidden;
  }
  body{
    margin: 0;
    font-size: 1em;
    font-family:${props => props.theme.font.family.body};
    color:${props => props.theme.color.type};
    background-color: ${props => props.theme.color.bg};
    overflow-x: hidden;
  }

  h1,h2,h3,h4{
    font-family:${props => props.theme.font.family.header};
    color:${props => props.theme.color.five};
    margin:0;
  }

  h5,h6{
    margin:0;
  }

  h1{
    font-size:2.125em; 
    font-weight:${({ theme }) => theme.font.weight.bolditalic};

    ${media.greaterThan("medium")`
      font-size:4em; 
    `}
  }

  h2{
    font-size:1.875em;
    font-weight:${({ theme }) => theme.font.weight.bold};

    ${media.greaterThan("medium")`
      font-size:2.5em;
    `}
  }

  h3{
    font-size:1.5em;
    font-weight:${({ theme }) => theme.font.weight.bold};
    
    ${media.greaterThan("medium")`
      font-size:2em;
    `}
  }

  h4{
    font-size:1.125em;
    font-weight:${({ theme }) => theme.font.weight.bold};
    
    
    ${media.greaterThan("medium")`
      font-size:1.5em;
    `}
  }
  h5{
    font-size:0.95em;
    font-weight:${({ theme }) => theme.font.weight.bold};
    
    ${media.greaterThan("medium")`
      font-size:1em;
    `}
  }

  
  h6{
    font-size:0.875em;
    font-weight:${({ theme }) => theme.font.weight.semibold}; 
    color: ${({ theme }) => theme.color.four};

    ${media.greaterThan("medium")`
      font-size:0.875em; 
    `}
  }

  small{
    font-size:2.5em;
    font-weight:700;
    color:${props => props.theme.color.type};
    
    ${media.greaterThan("medium")`
      font-size:0.75em;
    `}
  }

  p{
    font-size:0.875em;
    color:${props => props.theme.color.type};
    line-height:2em;
    margin:0;
    margin-bottom: 3em;

    ${media.greaterThan("medium")`
      
    `}
  }

  a{
    text-decoration:none;
    color:inherit;
    color:${props => props.theme.color.type};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    &.activeMenuItem{
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
  }

  label{
    color: ${({ theme }) => theme.color.five};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
  }

  

`;

export default GlobalStyle;
