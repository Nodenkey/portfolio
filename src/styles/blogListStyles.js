import styled from "styled-components";
import {Container} from "./globalStyles";

export const BlogListWrapper = styled(Container)`
  padding: 0 5vw 100px;
  margin-top: 100px;
  div{
  width: 100%;
  }
  a{
    width: 100%;
    color: ${props => props.theme.primaryTextColor};
  }
  @media only screen and (min-width: 600px){
      padding: 0 0 100px 0;
  }
`;


