import styled from "styled-components";
import {palette} from "../../utils";
import {Container, Flex} from "./globalStyles";

export const BannerWrapper = styled(Flex)`
  height: 100vh;
  width: 100vw;
  #landing{
      position: absolute !important;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      transform: scale(1.3);
      opacity: 0;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

export const BannerText = styled(Container)`
  position: relative;
  z-index: 2;
  height: auto;
    >div{
      margin-top: 80px;
      }
    h4{
      max-width: 600px;
    }
    h5{
      margin: 0 30px 0 0;
    }
    >*{
    transform: translateY(100px);
    opacity: 0;
    }
`;

export const ArrowContainer = styled.div`
  width: 80px;
  height: 80px;
  background: none;
  border: 1px solid ${palette.radical};
  position: relative;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    font-size: 2rem;
    animation: arrow 2s ease-in-out both infinite;
  }
  @keyframes arrow {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(20px);
    opacity: 0;
  }
  }
`;


