import styled from "styled-components";
import {palette} from "../utils";

export const ErrorWrapper = styled.div`
width: 100%;
padding: 100px 5%;
text-align: left;
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
box-sizing: border-box;

@media only screen and (min-width: 600px){
flex-direction: row;
height: 100%;
}
`;
export const ErrorText = styled.div`
width: 100%;
margin-bottom: 50px;
box-sizing: border-box;
@media only screen and (min-width: 600px){
width: 50%;
}
`;
export const ErrorHeader = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  color: white;
`;
export const ErrorSubText = styled.h2`
  font-size: 1.5rem;
  font-weight: lighter;
  margin-bottom: 50px;
  color: white;

`;
export const ErrorImageContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    @media only screen and (min-width: 600px){
    width: 50%;
}
`;

export const ErrorButton = styled.button`
  outline: none;
  background: none;
  padding: 20px 30px;
  color: ${palette.radical};
  border: 1px solid ${palette.lightGrey};
  transition: 300ms ease-in-out;
  &:hover{
    border: 1px solid ${palette.radical};
    color: white;
  }
`;
