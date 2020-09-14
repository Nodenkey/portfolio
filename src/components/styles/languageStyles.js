import styled from "styled-components";
import {Container} from "./globalStyles";

export const LanguageWrapper = styled(Container)`
  padding: 100px 5vw;
  margin: 0 auto;
  p{
    padding-bottom: 100px;
    max-width: 600px;
    margin-left: 55px;
  }
  h3{
    margin-left: 55px;
  }
  svg, img{
    width: 80px;
    height: 80px;
    filter: grayscale(2);
    transition: 500ms ease-in-out;
    &:hover{
    filter: grayscale(0);
    transform: scale(1.1);
    }
  }
  .st0{
  fill:#0acf83
  }
  .st1{
  fill:#a259ff
  }
  .st2{
  fill:#f24e1e
  }
  .st3{
  fill:#ff7262
  }
  .st4{
  fill:#1abcfe
  }
`;
