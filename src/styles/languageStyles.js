import styled from "styled-components";
import {Container, Grid} from "./globalStyles";

export const LanguageWrapper = styled(Container)`
  padding: 100px 5vw 0;
  margin: -50px auto 0;
  p{
    padding-bottom: 50px;
    max-width: 600px;
  }
  svg, img{
    width: 50px;
    height: 50px;
    filter: grayscale(2);
    transition: 500ms ease-in-out;
    &:hover{
    filter: grayscale(0);
    transform: scale(1.1);
    }
  }
  .st0{
  fill:#0acf83
  }
  .st1{
  fill:#a259ff
  }
  .st2{
  fill:#f24e1e
  }
  .st3{
  fill:#ff7262
  }
  .st4{
  fill:#1abcfe
  }
  @media only screen and (min-width: 600px){
     padding: 100px 5vw; 
     margin: 0 auto;
     p{
      margin-left: 55px;
      padding-bottom: 100px;
    }
    h3{
      margin-left: 55px;
    }
    svg, img{
        width: 80px;
        height: 80px;
  }
  }
`;

export const LanguageContainer = styled(Grid)`
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 100px 50px;
  >*{
    transform: translateY(50px);
    opacity: 0;
  }
  @media only screen and (min-width: 600px){
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 100px;
  }
`;
