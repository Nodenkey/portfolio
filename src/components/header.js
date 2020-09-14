import React, {useContext, useEffect, useRef} from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {gsap, ScrollTrigger} from "gsap/all";

//Styled components
import {Container, Flex} from "./styles/globalStyles";
import {HeaderContainer, Logo, Menu, ThemeSwitch} from "./styles/headerStyles";
import {NiiLogo, Sun} from "./svg";
import {TOGGLE_THEME} from "./context/constants";

//Context
import {useGlobalStateContext, useGlobalDispatchContext} from "./context/globalContext";


const Header = () => {
    const headerRef = useRef(null);
    const menuUp = useRef(null);
    const menuDown = useRef(null);

    const {currentTheme} = useGlobalStateContext();
    console.log('theme_header', currentTheme);
    const {dispatch} = useGlobalDispatchContext();
    console.log(typeof dispatch);


    const toggleTheme = () => {
        if (currentTheme === 'dark') {
            dispatch({type: TOGGLE_THEME, theme: 'light'});
        }else{
            dispatch({type: TOGGLE_THEME, theme: 'dark'});
        }
    }

    return (
        <HeaderContainer
            initial={{y: -90, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 1, ease: [.6, .05, -.01, .9]}}
            ref={headerRef}
        >
            <Container fluid>
                <Flex spaceBetween>
                    <Menu

                    >
                        <span ref={menuUp}/>
                        <span ref={menuDown}/>
                    </Menu>
                    <Logo

                    >
                        <Link to='/'>
                            <NiiLogo/>
                        </Link>
                    </Logo>
                    <ThemeSwitch onClick={toggleTheme}>
                        {currentTheme === 'dark' ?
                            <Sun/> : <FontAwesomeIcon icon={faMoon}/>
                        }
                    </ThemeSwitch>
                </Flex>
            </Container>
        </HeaderContainer>
    )
}
export default Header
