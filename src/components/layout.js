import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {ThemeProvider} from "styled-components";
import {document} from 'browser-monads';


//styled components
import {createGlobalStyle} from "styled-components";
import {normalize} from "styled-normalize";
import {darkTheme, lightTheme, palette} from "../utils";
import "../components/styles/layout.css";
import CustomCursor from "./customCursor";
import {useDarkMode} from "../custom-hooks/custom-hook";


//context
import {useGlobalStateContext, useGlobalDispatchContext} from "../context/globalContext";
import SuccessModal from "./successModal";
import FailedModal from "./failedModal";


const GlobalStyle = createGlobalStyle`
  ${normalize}
  *{
  text-decoration: none;
  cursor: none !important;
  } 
  a{
    color: ${palette.radical};
  }
 html {
  box-sizing: border-box;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
 }
 body {
 font-family: Numans, sans-serif;
 background-color: ${props => props.theme ? props.theme.background : 'black'};
 color: ${props => props.theme ? props.theme.primaryTextColor : 'white'};
 overflow-x: hidden;
 input:-webkit-autofill,
 input:-webkit-autofill:hover, 
 input:-webkit-autofill:focus, 
 input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px ${props => props.theme.background} inset !important;
 }
 input:-webkit-autofill {
    -webkit-text-fill-color: ${props => props.theme.primaryTextColor} !important;
}
}
  
  
`;


const Layout = ({children}) => {
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === 'default' ? darkTheme : lightTheme;
    const {cursorStyles} = useGlobalStateContext();
    const dispatch = useGlobalDispatchContext();

    const [successModal, setSuccessModal] = useState(false);
    const [failedModal, setFailedModal] = useState(false);


    const closeFailedModal = () => {
        const html = document.querySelector('html');
        failedModal && setFailedModal(false);
        html.classList.remove('freeze');
    }
    const closeSuccessModal = () => {
        const html = document.querySelector('html');
        setSuccessModal(false);
        html.classList.remove('freeze');
    }

    const showFailedModal = () => {
        const html = document.querySelector('html');
        html.classList.add('freeze');
        !failedModal && setFailedModal(true);
    }
    const showSuccessModal = () => {
        const html = document.querySelector('html');
        html.classList.add('freeze');
        !successModal && setSuccessModal(true);
    }

    useEffect(() => {
    }, [mountedComponent]);

    const onCursor = cursorType => {
        //check if  cursorType being passed is in cursorStyle in global context
        cursorType = (cursorStyles.includes(cursorType) ? cursorType : false);
        dispatch({type: 'TOGGLE_CURSOR', cursor: cursorType})
    }

    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        const doc = document.querySelector('html');
        if (toggleMenu) {
            doc.style.height = '100vh';
            doc.style.overflow = 'hidden';
        } else {
            doc.style.height = 'auto';
            doc.style.overflowY = 'scroll';
        }
    }, [toggleMenu]);


    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyle/>
            <CustomCursor/>
            <main>{
                children.map((child, index) => React.cloneElement(child, {
                    onCursor: onCursor,
                    toggleMenu: toggleMenu,
                    setToggleMenu: setToggleMenu,
                    theme: theme,
                    themeToggler: themeToggler,
                    showFailedModal: showFailedModal,
                    showSuccessModal: showSuccessModal,
                    key: index
                }))
            }
            </main>
            {
                successModal && <SuccessModal close={closeSuccessModal}/>
            }
            {
                failedModal && <FailedModal close={closeFailedModal}/>

            }
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
