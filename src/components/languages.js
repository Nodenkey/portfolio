import React, {useEffect, useRef} from 'react';
import {gsap, ScrollTrigger, Power3} from "gsap/all";


//Styled component
import {Css, Figma, Firebase, Flask, GatsbyIcon, Html, Js, Photoshop, Python, ReactIcon, Redux, Webstorm} from "./svg";
import {LanguageContainer, LanguageWrapper} from "../styles/languageStyles";
import {HeaderThree, Paragraph} from "../styles/globalStyles";

const Languages = () => {

    let icons = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(icons.current.children, {
            scrollTrigger: {
                trigger: icons.current,
            },
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: .2,
            ease: Power3.easeInOut,
        })
    }, [])
    return (
        <LanguageWrapper id='expertise'>
            <HeaderThree>Languages and tools I use</HeaderThree>
            <Paragraph>Here is a list of languages I know and tools I use on a day to day basis. I use others too but these I must say are my favourite!</Paragraph>
            <LanguageContainer num='4' ref={icons}>
                <Html/>
                <Css/>
                <Js/>
                <ReactIcon/>
                <Redux/>
                <Python/>
                <GatsbyIcon/>
                <Flask/>
                <Firebase/>
                <Webstorm/>
                <Photoshop/>
                <Figma/>
            </LanguageContainer>
        </LanguageWrapper>
    );
};

export default Languages;
