import styled, {css} from "styled-components";
import {palette} from "../utils";
import {typeScale} from "../utils/typeScale";
import {motion} from "framer-motion";


//Divs & Containers
export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px){
  max-width: 960px;
  }
  @media (min-width: 1216px){
  max-width: 1152px;
  }
  @media (min-width: 1408px){
  max-width: 1244px;
  }
  ${props => props.fluid && css`
    padding: 0;
    margin: 0;
    max-width: 100% !important;
  `}
`;


export const Flex = styled.div`
  display: ${props => props.inline ? 'inline-flex' : 'flex'};
  position: relative;
  align-items: center;
  height: 100%;
  
  ${props => props.vertical && css`
    flex-direction: column;
  `};  
  ${props => props.wrapContainer && css`
    flex-wrap: wrap;
  `};
  
  ${props => props.spaceBetween && css`
    justify-content: space-between;
  `};
  
  ${props => props.center && css`
    justify-content: center;
  `};
  @media only screen and (max-width: 600px){
    ${props => props.verticalRPhone && css`
      flex-direction: column-reverse;
      *>:last-of-type{
        margin-bottom: 30px;
      }
    `};
  }
`;

export const Grid = styled(motion.div)`
  display: grid;
  width: 100%;
  grid-gap: ${props => props.gapPhone || '0'};
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  @media only screen and (min-width: 600px){
      grid-template-columns: ${props => typeof props.num === "object" ? `${props.num.toString()}` : `repeat(${props.num}, 1fr)`};
      grid-gap: ${props => props.gap || '100px'};
      ${props => props.auto && css`
          grid-template-columns: auto;
      `}
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;



//Texts
export const HeaderOne = styled.h1`
  font-size: ${typeScale.headerTwo};
  text-transform: uppercase;
  font-family: Fira Sans, sans-serif;
  display: block;
  line-height: 90%;
  @media only screen and (min-width: 600px){
    font-size: ${typeScale.headerOne};
    line-height: 50%;
  }
`;

export const HeaderTwo = styled.h2`
  font-size: ${typeScale.headerThree};
  text-transform: uppercase;
  font-family: Fira Sans, sans-serif;
  display: block;
  line-height: 120%;
  @media only screen and (min-width: 600px){
      font-size: ${typeScale.headerTwo};
  }
`;

export const HeaderThree = styled.h3`
  font-size: ${typeScale.headerFour};
  text-align: left;
  font-family: Fira Sans, sans-serif;
  display: block;
  line-height: 140%;
  @media only screen and (min-width: 600px){
    font-size: ${typeScale.headerThree};
  }
`;

export const HeaderFour = styled.h4`
  font-size: ${typeScale.headerFive};
  text-align: left;
  font-family: Chivo, sans-serif;
  display: block;
  line-height: 140%;
  @media only screen and (min-width: 600px){
    font-size: ${typeScale.headerFour};
  }
`;

export const HeaderFive = styled.h5`
  font-size: ${typeScale.paragraph};
  text-align: left;
  font-family: Chivo, sans-serif;
  display: block;
  line-height: 200%;
  @media only screen and (min-width: 600px){
    font-size: ${typeScale.headerFive};
  }
`;

export const Paragraph = styled.p`
  font-size: ${typeScale.paragraph};
  font-family: Numans, sans-serif;
  display: block;
  line-height: 200%;
`;


//Styles and accents
export const Cursor = styled.div`
  position: fixed;
  width: 22px;
  height: 22px;
  top: 0;
  left: 0;
  background-color: ${palette.radical};
  border-radius: 100%;
  border-color: ${palette.radical};
  //the problem
  -webkit-transition:  300ms ease-in-out;
  transition:  300ms ease-in-out;
  //
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transition-property: height, width, border;
  will-change: height, width, border;
  pointer-events: none;
  z-index: 9999999999999999999999999999999999999;
  &.hovered {
  background: transparent;
  border: 1.5px dashed ${palette.radical};
  transform-origin: center;
  transition-property: height, width, border;
  will-change: height, width, border;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 3.5s linear infinite forwards;
  animation: spin 4s linear infinite forwards;
  }
  &.clicked {
    -webkit-animation: color-change 500ms ease-in-out both;
    animation: color-change 500ms ease-in-out both;
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: translate(-50%, -50%) rotate(0);
      transform: translate(-50%, -50%) rotate(0);
    }
    to{
      -webkit-transform: translate(-50%, -50%) rotate(360deg);
      transform: translate(-50%, -50%) rotate(360deg);
    }
    }
  
  @keyframes spin {
    from {
        -webkit-transform: translate(-50%, -50%) rotate(0);
        transform: translate(-50%, -50%) rotate(0);
      }
    to{
      -webkit-transform: translate(-50%, -50%) rotate(360deg);
      transform: translate(-50%, -50%) rotate(360deg);
    }
    }
 
  @-webkit-keyframes color-change {
  0%{
  background: ${palette.radical};
  }
  50%{
  background: rgba(97%, 21%, 35%, .5);
  width: 140px;
  height: 140px;
  }
  100%{
  background: transparent;
  width: 64px;
  height: 64px;
  }
  }
  @keyframes color-change {
  0%{
  background: ${palette.radical};
  }
  50%{
  background: rgba(97%, 21%, 35%, .5);
  width: 140px;
  height: 140px;
  }
  100%{
  background: transparent;
  width: 64px;
  height: 64px;
  }
  }
  @media only screen and (max-width: 1200px){
    display: none;
  }
`;

export const Redden = styled.span`
  color: ${palette.radical};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.borderColor};
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, .6);
`;

export const Circle = styled.div`
  position: absolute;
  background-color: ${palette.radical};
  opacity: .3;
  border-radius: 50%;
  width: ${props => props.size};
  height: ${props => props.size};
  top: ${props => props.top ?  props.top : "auto"};
  bottom: ${props => props.bottom ? props.bottom : "auto"};
  right: ${props => props.right ? props.right : "auto"};
  left: ${props => props.left ? props.left : "auto"};
  z-index: -1;
`;

export const GreyedParagraph = styled(Paragraph)`
  color: ${props => props.theme.secondaryTextColor};
`;

