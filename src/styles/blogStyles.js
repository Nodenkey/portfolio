import styled from "styled-components";
import {Flex} from "./globalStyles";

export const BlogBannerWrapper = styled.div`
  height: 70vh;
  position: relative;
  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }
`;

export const BlogBannerText = styled(Flex)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  color: white;
  padding: 90px 5vw 20px;
  opacity: 0;
  transform: translateY(-50px);
  h3{
    text-transform: uppercase;
    max-width: 400px;
    margin-left: auto;
  }
  @media only screen and (min-width: 600px) {
    h3{
      text-align: right;
    }
  }
`;

export const BannerWindow = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.background};
  z-index: 3;
`;

