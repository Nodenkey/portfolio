import styled from "styled-components";
import {motion} from "framer-motion";


export const HeaderContainer = styled(motion.header)`
  height: 90px;
  width: 100%;
  padding: 30px 5vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  background: none;
`;

export const Menu = styled.button`
  transform-origin: center;
  border: none;
  padding: 20px 0;
  background: none;
  outline: none;
  span{
  width: 30px;
  height: 2px;
  display: block;
  background: ${props => props.theme.primaryTextColor};
  margin: 10px 0;
  }
  @media (min-width: 600px){
  span{
    width: 35px;
  }
  }
`;

export const Logo = styled.div`
  width: 50px;
  @media (min-width: 600px){
  width: 80px;
  }
  path{
    fill: ${props => props.theme.primaryTextColor};
    transition: 500ms ease-in-out;
  }
`;

export const ThemeSwitch = styled.div`
  font-size: 1.8rem;
  color: ${props => props.theme.primaryTextColor};
  transition: 500ms ease-in-out;
  svg{
      width: 30px !important;
      height: 30px !important;
      *{
        fill: ${props => props.theme.themeButtonColor};
      }
  }
  @media (min-width: 600px){
    font-size: 2rem;
  }
`;
