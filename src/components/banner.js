import React, {useEffect, useRef} from 'react';
import Img from "gatsby-image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {gsap} from "gsap/all";


//Styled components
import {ArrowContainer, BannerText, BannerWrapper} from "./styles/bannerStyles";
import {Flex, HeaderFive, HeaderFour, HeaderOne, Redden} from "./styles/globalStyles";
import {graphql, Link, useStaticQuery} from "gatsby";

//Context
import {useGlobalStateContext} from "../context/globalContext";


const Banner = ({onCursor, theme}) => {
    let bannerText = useRef(null);

    useEffect(() => {
        const image = document.querySelector('#landing');
        const tl = gsap.timeline();
        tl.to(bannerText.current.children, {duration: 1, y: 0, delay: .5, opacity: 1, stagger: .3})
        .to(image, {duration: 2, scale: 1, opacity: 1}, "-=.8")
    })

    const {currentTheme} = useGlobalStateContext();

    const images = useStaticQuery(graphql`
    query {
        dark: file(relativePath: {eq: "nii.jpg"}) {
            id
            childImageSharp {
            fluid(maxWidth: 5000) {
                ...GatsbyImageSharpFluid
        }
    }
  }
            light: file(relativePath: {eq: "nii2.jpg"}) {
                id
                childImageSharp {
                fluid(maxWidth: 5000) {
                    ...GatsbyImageSharpFluid
          }
        }
      }
}  
    `)

    return (
        <BannerWrapper>
            <BannerText ref={bannerText}>
                <HeaderOne>I'm Nii</HeaderOne>
                <HeaderFour>I am a front end web developer based in Ghana.</HeaderFour>
                <Link to='/#projects'><Flex
                    onMouseEnter={() => onCursor('hovered')}
                    onMouseLeave={onCursor}
                    inline
                ><HeaderFive><Redden>View projects</Redden></HeaderFive>
                    <ArrowContainer><FontAwesomeIcon icon={faArrowDown}/></ArrowContainer>
                </Flex></Link>
            </BannerText>
            <div id="landing">
                {
                    theme === 'default' || undefined ? <Img fluid={images.dark.childImageSharp.fluid} alt='nii'/> :
                        <Img fluid={images.light.childImageSharp.fluid} alt='nii'/>
                }
            </div>
        </BannerWrapper>
    );
};


export default Banner;
