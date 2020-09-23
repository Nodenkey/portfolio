import React, {useEffect} from 'react';
import {Divider, Flex, Paragraph} from "../styles/globalStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FooterWrapper} from "../styles/contactStyles";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {gsap} from "gsap";

const Footer = ({onCursor}) => {
    const date = new Date()
    const year = date.getFullYear();

    useEffect(() => {
        const footer = document.querySelector('#footer');
        gsap.registerPlugin(ScrollTrigger);
        gsap.core.globals('ScrollTrigger', ScrollTrigger);
        gsap.from(footer, {scrollTrigger: {
            trigger: footer,
                start: 'center bottom',
            },
            duration: 2,
            y: -100,
            opacity: 0,
        })
    }, [])

    return (
        <FooterWrapper style={{paddingTop: 0}} id='footer'>
            <Divider/>
            <Flex style={{marginTop: '50px'}} spaceBetween verticalRPhone>
                <Paragraph>©Copyright Nii Odenkey {year}.</Paragraph>
                <div className='social'>
                    <a href="https://github.com/Nodenkey" target='_blank' onMouseEnter={() => onCursor('hovered')}
                       onMouseLeave={onCursor}
                       rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/samuel-abbey-618957168/" target='_blank'
                       onMouseEnter={() => onCursor('hovered')}
                       onMouseLeave={onCursor}
                       rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    <a href="https://web.facebook.com/nii.o.abbey" rel='noopener noreferrer'
                       onMouseEnter={() => onCursor('hovered')}
                       onMouseLeave={onCursor}
                       target='_blank'><FontAwesomeIcon icon={faFacebookF}/></a>
                    <a href="https://twitter.com/nii_odenkey_" target='_blank'
                       onMouseEnter={() => onCursor('hovered')}
                       onMouseLeave={onCursor}
                       rel='noopener noreferrer'><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="https://www.instagram.com/n_odenkey/" target='_blank'
                       onMouseEnter={() => onCursor('hovered')}
                       onMouseLeave={onCursor}
                       rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram}/></a>
                </div>
            </Flex>
        </FooterWrapper>
    );
};

export default Footer;
