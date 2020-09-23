import styled from "styled-components";
import {palette} from "../utils";
import {motion} from "framer-motion";
import {Flex} from "./globalStyles";

export const OverlayWrapper = styled(motion.div)`
  .menuText{
  transform: translateY(100%);
  }
  background: ${props => props.theme.background};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 90px 5vw 0;
  z-index: 9999;
  display: grid;
  border-radius: 0;
  grid-template-columns: 1fr 1fr;
  h5{
  margin-right: 20px;
  }
  a:hover{
    color: ${palette.radical} !important;
  }
  >div:first-of-type{
    align-items: flex-start;
    width: max-content;
    margin: 0 auto;
    >a{
    transition: 500ms ease-in-out;
    position: relative;
    height: 7rem;
    width: 500px;
    text-transform: uppercase;
    overflow-y: hidden;
    color: ${props => props.theme.primaryTextColor};
    &:hover{
    transform: translateX(50px);
    }
    >div{
      position: absolute;
      top: 0;
      height: 100%;
    }
    }
  }
  >div:last-of-type{
    justify-content: center;
    align-items: flex-end;
    transform: translateX(50px);
    opacity: 0;
      a{
        color: ${props => props.theme.primaryTextColor};
        svg{
        font-size: 2rem;
        margin-bottom: 50px;
        }
      }
  }
`;

export const SocialContainer = styled(Flex)`
  display: none;
  @media only screen and (min-width: 600px){
    display: flex;
  }
`;
