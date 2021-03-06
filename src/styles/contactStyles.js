import styled from "styled-components";
import {palette} from "../utils";
import {Grid} from "./globalStyles";


export const FooterWrapper = styled.section`
  padding: 100px 5vw 50px;
  >div:first-of-type{
    padding: 0;
  }
  h2{
    margin-bottom: 50px;
  }
  h5{
    color: #999999;
  }
  p{
    margin: 0;
  }
  .hand {
  animation: wave ease-in-out infinite both 1s alternate;
  }
  @-webkit-keyframes wave {
  from {
  transform: rotate(-40deg);
  }
  to{
  transform: rotate(40deg);
  }
  }  
  @keyframes wave {
  from {
  transform: rotate(0deg);
  }
  to{
  transform: rotate(50deg);
  }
  }
  a{
  color: ${props => props.theme.primaryTextColor};
    &:hover{
      color: ${palette.radical};
    }
  }
  .social{
    display: flex;
    justify-content: center;
    svg{
    font-size: 2rem;
    margin-left: 50px;
    @media only screen and (max-width: 600px){
      margin: 20px;
    }
    }
  }
`;

export const Input = styled.input`
  border: 1px solid ${props => props.theme.borderColor};
  transition: 500ms ease-in-out;
  padding: 15px 20px;
  background: none;
  width: 100%;
  color: ${props => props.theme.primaryTextColor};
  outline: none;
  margin-top: 20px;
  &:hover{
      border: 1px solid ${props => props.theme.primaryTextColor};
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid ${props => props.theme.borderColor};
  transition: 500ms ease-in-out;
  padding: 15px 20px;
  background: none;
  color: ${props => props.theme.primaryTextColor};
  outline: none;
  width: 100%;
  margin-top: 20px;
  &:hover{
      border: 1px solid ${props => props.theme.primaryTextColor};
  }
`;

export const Label = styled.label`
  margin-bottom: 30px;
`;

export const FormButton = styled.button`
    border: 1px solid ${props => props.theme.primaryTextColor};
    background: none;
    color: ${props => props.theme.primaryTextColor};
    padding: 15px 40px;
    margin-top: 50px;
    outline: none;
    transition: 500ms ease-in-out;
    &:hover{
      background-color: ${props => props.theme.primaryTextColor};
      color: ${props => props.theme.background};
    }
;
`;

export const FormGrid = styled(Grid)`
  justify-items: flex-start;
  width: 100%;
  label{
    width: 100%;
  }
`;


export const ErrorParagraph = styled.small`
  color: ${palette.radical};
  text-align: left;
  margin: 10px 0 0;
  min-height: 1rem;
  display: block;
`;
