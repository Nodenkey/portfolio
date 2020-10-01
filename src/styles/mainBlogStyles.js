import styled from "styled-components";
import {Container} from "./globalStyles";

export const BlogTemplateWrapper = styled.div`
  img {
    height: 90vh;
    width: 100%;
    object-fit: cover;
  }
`;

export const BlogSheet = styled(Container)`
  background-color: ${props => props.theme.sheetColor};
  padding: 100px 5vw;
  z-index: 2;
  margin: -100px auto 0;
`;

export const BlogHead = styled.div`
  text-align: center;
  small {
    display: block;
    width: fit-content;
    text-transform: uppercase;
  }
  h4{
    margin-top: 50px;
    text-align: center;
  } 
`;

export const BlogBody = styled.div`
  margin-top: 100px;
`;
