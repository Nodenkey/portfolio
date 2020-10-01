import styled from "styled-components";
import {Container} from "./globalStyles";

export const BlogSectionWrapper = styled(Container)`
  padding: 100px 5vw;
  h3{
    text-align: center;
  }
  >div{
  padding: 0;
  }
  @media only screen and (min-width: 600px){
    padding: 100px 0;
  }
`;
