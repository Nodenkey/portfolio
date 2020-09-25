import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {ThemeProvider} from "styled-components";
import {document} from 'browser-monads';


//styled components
import {darkTheme, lightTheme} from "../utils";
import {GlobalStyle} from "../styles/Global";
import "../styles/layout.css";
import {useDarkMode} from "../custom-hooks/custom-hook";


//components
import {useGlobalStateContext, useGlobalDispatchContext} from "../context/globalContext";
import SuccessModal from "./successModal";
import FailedModal from "./failedModal";
import MenuOverlay from "./menuOverlay";
import Header from "./header";
import Footer from "./footer";


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

    //Remount component after mounting to apply theme
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
            <MenuOverlay onCursor={onCursor} setToggleMenu={setToggleMenu} toggleMenu={toggleMenu}/>
            <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} onCursor={onCursor} theme={theme}
                    themeToggler={themeToggler}/>
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
            <Footer onCursor={onCursor}/>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
