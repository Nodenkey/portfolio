import React, {useEffect, useRef} from 'react';
import {Link} from "gatsby";
import {OverlayWrapper} from "./styles/menuOverlayStyles";
import {Flex, HeaderFive, HeaderThree} from "./styles/globalStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {gsap, Power4} from "gsap/all";
import {AnimatePresence} from "framer-motion";

const MenuOverlay = ({show, onCursor, setToggleMenu}) => {
    const social = useRef(null);

    useEffect(() => {
        const texts = document.querySelectorAll('.menuText')
        show && gsap.to(texts, {
            duration: 2,
            y: '0',
            ease: Power4.easeOut,
            stagger: .3,
            delay: .5,
        });
        show && gsap.to(social.current, {
            duration: 2,
            x: '0',
            opacity: 1,
            ease: Power4.easeOut,
            delay: .8,
        })
    }, [show]);

    const removeMenu = () => {
        setToggleMenu(false);
    }

    return (
        <>
            <AnimatePresence>
                {
                    show && (
                        <OverlayWrapper
                            initial={{x: '-100%'}}
                            exit={{x: '-100%'}}
                            animate={{x: show ? 0 : '-100%'}}
                            transition={{duration: .8, ease: [.6, .05, -.01, .9]}}
                        >
                            <Flex vertical center>
                                <Link to='/' onClick={removeMenu}><Flex
                                    className='menuText'><HeaderFive>01.</HeaderFive><HeaderThree>Home</HeaderThree></Flex>
                                </Link>
                                <Link to='/#projects' onClick={removeMenu}><Flex className='menuText'><HeaderFive>02.</HeaderFive><HeaderThree>My
                                    projects</HeaderThree></Flex></Link>
                                <Link to='/#expertise' onClick={removeMenu}><Flex
                                    className='menuText'><HeaderFive>03.</HeaderFive><HeaderThree>Expertise</HeaderThree></Flex>
                                </Link>
                                <Link to='/#contact' onClick={removeMenu}><Flex className='menuText'><HeaderFive>04.</HeaderFive><HeaderThree>Contact
                                    me </HeaderThree></Flex></Link>
                            </Flex>
                            <Flex vertical ref={social}>
                                <a href="https://github.com/Nodenkey" target='_blank'
                                   rel='noopener noreferrer'
                                   onMouseEnter={() => onCursor('hovered')}
                                   onMouseLeave={onCursor}
                                ><FontAwesomeIcon icon={faGithub}/></a>
                                <a href="https://www.linkedin.com/in/samuel-abbey-618957168/" target='_blank'
                                   rel='noopener noreferrer'
                                   onMouseEnter={() => onCursor('hovered')}
                                   onMouseLeave={onCursor}
                                ><FontAwesomeIcon icon={faLinkedinIn}/></a>
                                <a href="https://web.facebook.com/nii.o.abbey" rel='noopener noreferrer'
                                   target='_blank'
                                   onMouseEnter={() => onCursor('hovered')}
                                   onMouseLeave={onCursor}
                                ><FontAwesomeIcon icon={faFacebookF}/></a>
                                <a href="https://twitter.com/nii_odenkey_" target='_blank'
                                   rel='noopener noreferrer'
                                   onMouseEnter={() => onCursor('hovered')}
                                   onMouseLeave={onCursor}
                                ><FontAwesomeIcon icon={faTwitter}/></a>
                                <a href="https://www.instagram.com/n_odenkey/" target='_blank'
                                   rel='noopener noreferrer'
                                   onMouseEnter={() => onCursor('hovered')}
                                   onMouseLeave={onCursor}
                                ><FontAwesomeIcon icon={faInstagram}/></a>
                            </Flex>
                        </OverlayWrapper>
                    )
                }
            </AnimatePresence>
        </>
    );
};

export default MenuOverlay;
