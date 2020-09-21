import styled from "styled-components";
import {palette} from "../../utils";

export const ProjectWrapper = styled.section`
   width: 100%;
   padding: 100px 5vw 100px;
   >div{
    padding: 0;
   }
   .gatsby-image-wrapper {
   width: 100%;
   height: 100%;
   }
   @media only screen and (min-width: 600px){
     padding: 150px 5vw 100px;
   }
`;

export const ProjectContainer = styled.div`
  display: grid;
  min-width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  .gatsby-image-wrapper {
    transition: 700ms ease-in-out;
  }
  @media only screen and (min-width: 600px){
      grid-template-columns: 1fr 1.3fr;
  }
`;

export const TextSection = styled.div`
  background-color: ${props => props.color};
  padding: 20px 5vw;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  p{
    color: ${props => props.textColor};
  }
`;

export const VisitWebsite = styled.div`
  margin-top: 50px;
  display: inline-flex;
  color: ${palette.radical};
  align-items: center;
  h4{
    margin-bottom: 0;
  }
  svg{
    font-size: 3rem;
    margin-left: 10px;
    transition: 500ms ease-in-out;
  }
  &:hover svg {
  transform: translateX(20px) scale(1.2);
  }
`;

export const AllProjectContainer = styled.div`
  width: 100%;
  padding: 0 5vw;
  //max-height: 700px;
  margin: auto;
  overflow: hidden;
  >div{
  margin: 0 auto 100px;
  //height: calc(100vh - 90px);
  }
  @media only screen and (min-width: 600px){
    >div{
       height: 80vh;
    }
  }
`;

export const ProjectImage = styled.div`
  overflow: hidden;
  height: 70vh;
  width: 100%;
  .gatsby-image-wrapper{
  width: 100%;
  height: 100%;
  transform: scale(1);
  }
  @media only screen and (min-width: 600px){
    height: 100%;
  }
`;
