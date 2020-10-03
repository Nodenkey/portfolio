import styled from "styled-components";
import {Container} from "./globalStyles";
import {typeScale} from "../utils/typeScale";

export const BlogTemplateWrapper = styled.div`
  img {
    height: 90vh;
    width: 100%;
    object-fit: cover;
  }
  p {
      font-size: ${typeScale.paragraph};
      font-family: Numans, sans-serif;
      display: block;
      line-height: 200%;
  }
  hr{
  height: 2px;
  background-color: ${props => props.theme.borderColor};
  }
  h1, h2, h3, h4, h5 {
    margin-top: 50px;
  }
  h1{
    font-size: ${typeScale.headerTwo};
    text-transform: uppercase;
    font-family: Fira Sans, sans-serif;
    display: block;
    line-height: 90%;
    @media only screen and (min-width: 600px){
      font-size: ${typeScale.headerOne};
      line-height: 50%;
    }
  }
  h2 {
    font-size: ${typeScale.headerThree};
    text-transform: uppercase;
    font-family: Fira Sans, sans-serif;
    display: block;
    line-height: 120%;
    @media only screen and (min-width: 600px){
      font-size: ${typeScale.headerTwo};
    }
  }
  h3 {
    font-size: ${typeScale.headerFour};
    text-align: left;
    font-family: Fira Sans, sans-serif;
    display: block;
    line-height: 140%;
    @media only screen and (min-width: 600px){
      font-size: ${typeScale.headerThree};
    }
  }
  h4 {
    font-size: ${typeScale.headerFive};
    text-align: left;
    font-family: Chivo, sans-serif;
    display: block;
    line-height: 140%;
    @media only screen and (min-width: 600px){
      font-size: ${typeScale.headerFour};
    }
  }
  h5 {
    font-size: ${typeScale.paragraph};
    text-align: left;
    font-family: Chivo, sans-serif;
    display: block;
    line-height: 200%;
    @media only screen and (min-width: 600px){
      font-size: ${typeScale.headerFive};
    }
  }
`;

export const BlogSheet = styled(Container)`
  background-color: ${props => props.theme.sheetColor};
  padding: 100px 5vw;
  z-index: 2;
  margin: -100px auto 0;
  @media only screen and (min-width: 600px){
    padding: 100px 12%;
  }
`;

export const BlogHead = styled.div`
  text-align: center;
  small {
    display: block;
    width: fit-content;
    text-transform: uppercase;
    margin: 0 10px 20px;
  }
  h4{
    margin-top: 50px;
    text-align: center;
  } 
`;

export const BlogBody = styled.div`
  margin-top: 100px;
`;
