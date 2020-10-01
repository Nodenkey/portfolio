import styled from "styled-components";
import {palette} from "../utils";
import {Flex} from "./globalStyles";

export const FilterWrapper = styled(Flex)`
  background-color: ${props => props.theme.sheetColor};
  padding: 20px 10px;
  margin-bottom: 50px;
  .active{
    background-color: ${palette.radical};
  }
  >small{
  width: fit-content;
  margin: 10px;
  font-size: 1rem;
  }
  @media only screen and (min-width: 600px){
    padding: 20px 50px;
    >small{
      margin: 20px 10px;
    }
  }
`;
