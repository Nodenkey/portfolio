import React from 'react';
import {ModalContainer, ModalWrapper} from "../styles/modalStyles";
import {CloseSvg} from "./svg";
import {HeaderFive, HeaderThree} from "../styles/globalStyles";

const FailedModal = ({close}) => {
    return (
        <ModalWrapper>
            <ModalContainer>
                <HeaderThree style={{color: 'red'}}>Oops something seems to have gone wrong</HeaderThree>
                <HeaderFive>Please try again</HeaderFive>
                <button
                    onClick={close}
                ><CloseSvg/></button>
            </ModalContainer>
        </ModalWrapper>
    );
};

export default FailedModal;
