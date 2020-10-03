import styled from "styled-components";
import {Container} from "./globalStyles";
import {motion} from "framer-motion";

export const BlogListWrapper = styled(Container)`
  padding: 0 5vw 100px;
  transform: translateY(200px);
  margin-top: 100px;
  opacity: 0;
  div{
  width: 100%;
  }
  a{
    width: 100%;
    color: ${props => props.theme.primaryTextColor};
  }
  @media only screen and (min-width: 600px){
      padding: 0;
  }
`;

export const Cont = styled(motion.div)``;

