import React from 'react';
import {ModalContainer, ModalWrapper} from "./styles/modalStyles";
import {CloseSvg} from "./svg";
import {HeaderFive, HeaderFour} from "./styles/globalStyles";
import {Menu} from "./styles/headerStyles";

const SuccessModal = ({close}) => {
    return (
        <ModalWrapper>
            <ModalContainer>
                <HeaderFour>Message sent successfully</HeaderFour>
                <HeaderFive>I will get back to you as soon as possible</HeaderFive>
                <button
                    onClick={close}
                ><CloseSvg/></button>
            </ModalContainer>
        </ModalWrapper>
    );
};

export default SuccessModal;
