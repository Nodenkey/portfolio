import {createGlobalStyle} from "styled-components";
import {normalize} from "styled-normalize";
import {palette} from "../utils";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  *{
  text-decoration: none;
  cursor: none !important;
  } 
  a{
    color: ${palette.radical};
  }
 html {
  box-sizing: border-box;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
 }
 body {
 font-family: Numans, sans-serif;
 background-color: ${props => props.theme ? props.theme.background : 'black'};
 color: ${props => props.theme ? props.theme.primaryTextColor : 'white'};
 overflow-x: hidden;
 input:-webkit-autofill,
 input:-webkit-autofill:hover, 
 input:-webkit-autofill:focus, 
 input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px ${props => props.theme && props.theme.background} inset !important;
 }
 input:-webkit-autofill {
    -webkit-text-fill-color: ${props => props.theme && props.theme.primaryTextColor} !important;
}
}
  *, :after, :before {
    box-sizing: border-box;
  }  
`;

