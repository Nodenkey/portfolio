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


const Header = ({makeHovered, unHover, toggleTheme, currentTheme}) => {
    const headerRef = useRef(null);
    const menuUp = useRef(null);
    const menuDown = useRef(null);


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
                        onMouseEnter={makeHovered}
                        onMouseLeave={unHover}
                    >
                        <span ref={menuUp}/>
                        <span ref={menuDown}/>
                    </Menu>
                    <Logo
                        onMouseEnter={makeHovered}
                        onMouseLeave={unHover}
                    >
                        <Link to='/'>
                            <NiiLogo/>
                        </Link>
                    </Logo>
                    <ThemeSwitch
                    onMouseEnter={makeHovered}
                    onMouseLeave={unHover}
                    onClick={toggleTheme}
                    >
                        {
                            currentTheme === 'dark' ? <Sun/> : <FontAwesomeIcon icon={faMoon}/>
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
