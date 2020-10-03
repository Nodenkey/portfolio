import styled from "styled-components";
import {Container} from "./globalStyles";
import {motion} from "framer-motion";

export const BlogListWrapper = styled(Container)`
  padding: 100px 5vw;
  transform: translateY(200px);
  opacity: 0;
  div{
  width: 100%;
  }
  a{
    width: 100%;
    color: ${props => props.theme.primaryTextColor};
  }
  @media only screen and (min-width: 600px){
      padding: 100px 0;
  }
`;

export const Cont = styled(motion.div)``;

