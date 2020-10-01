import styled from "styled-components";

export const DirectionContainer = styled.div`
  padding: 50px 5vw;
  h4 {
  margin: ${props => props.direction === "left" ? "0 0 0 10px" : "0 10px 0 0"}
  }
  .title {
    color: ${props => props.theme.primaryTextColor};
    max-width: 170px;
    width: fit-content;
  }
  @media only screen and (max-width: 600px){
    h4{
      font-size: 1rem;
    }
  }
`;
