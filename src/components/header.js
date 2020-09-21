import React, {useEffect, useRef} from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {gsap, ScrollTrigger} from "gsap/all";

//Styled components
import {Container, Flex} from "./styles/globalStyles";
import {HeaderContainer, Logo, Menu, ThemeSwitch} from "./styles/headerStyles";
import {NiiLogo, Sun} from "./svg";

//Context
import {useGlobalStateContext, useGlobalDispatchContext} from "../context/globalContext";


const Header = ({onCursor, toggleMenu, setToggleMenu}) => {
    const headerRef = useRef(null);
    const menuUp = useRef(null);
    const menuDown = useRef(null);

    const {currentTheme} = useGlobalStateContext();
    const dispatch = useGlobalDispatchContext();

    useEffect(() => {
        typeof window !== undefined && window.localStorage.setItem('theme', currentTheme);

        gsap.registerPlugin(ScrollTrigger);

        currentTheme === 'dark' ?
            gsap.to(headerRef.current,
                {
                    scrollTrigger: {
                        scrub: true
                    },
                    duration: 1,
                    backgroundColor: '#000000'
                }) :
            gsap.to(headerRef.current,
                {
                    scrollTrigger: {
                        scrub: true
                    },
                    duration: 1,
                    backgroundColor: '#ffffff'
                });

        const tlOne = gsap.timeline({duration: .5});
        const tlTwo = gsap.timeline({duration: .5});
       toggleMenu ? tlOne.to(menuUp.current, {
          y: 10,
        }).to(menuUp.current, {
            rotate: -45,
            y: 5
        }) : tlOne.to(menuUp.current, {
           y: 0,
       }).to(menuUp.current, {
           rotate: 0
       });

        toggleMenu ? tlTwo.to(menuDown.current, {
          y: -10,
        }).to(menuDown.current, {
            rotate: 43,
            y: -7,
        }):  tlTwo.to(menuDown.current, {
            y: 0,
        }).to(menuDown.current, {
            rotate: 0
        });

    }, [currentTheme, toggleMenu])

    const toggleTheme = () => {
        if (currentTheme === 'dark') {
            dispatch({type: 'TOGGLE_THEME', theme: 'light'})
        } else {
            dispatch({type: 'TOGGLE_THEME', theme: 'dark'})
        }
    }

    const toggleOverlay = () => {
        setToggleMenu(!toggleMenu);
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
                        onMouseEnter={() => onCursor('hovered')}
                        onMouseLeave={onCursor}
                        onClick={toggleOverlay}
                    >
                        <span ref={menuUp}/>
                        <span ref={menuDown}/>
                    </Menu>
                    <Logo
                        onMouseEnter={() => onCursor('hovered')}
                        onMouseLeave={onCursor}
                    >
                        <Link to='/'>
                            <NiiLogo/>
                        </Link>
                    </Logo>
                    <ThemeSwitch
                        onClick={toggleTheme}
                        onMouseEnter={() => onCursor('hovered')}
                        onMouseLeave={onCursor}
                    >
                        {
                            currentTheme === 'dark' ?
                                <Sun/> : <FontAwesomeIcon icon={faMoon}/>
                        }
                    </ThemeSwitch>
                </Flex>
            </Container>
        </HeaderContainer>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
