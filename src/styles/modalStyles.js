import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vw;
  position: fixed;
  padding: 0 5vw;
  background-color: rgba(0, 0, 0, .5);
  top: 0;
  left: 0;
  z-index: 99999999;
`;

export const ModalContainer = styled.div`
  width: calc(100% - 10vw);
  position: relative;
  border-radius: 5px;
  margin: 12.5% auto 0;
  background-color: ${props => props.theme.primaryTextColor};
  color: ${props => props.theme.background};
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
   svg{
    width: 40px;
  }
  button{
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
  }
  @media only screen and (min-width: 600px){
    width: fit-content;
  }
`;
