import React, {useEffect, useRef} from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {Link} from "gatsby";
import Img from "gatsby-image";
import {gsap, ScrollTrigger} from "gsap/all";

//Styled components
import {Container, Grid, HeaderFive, HeaderThree, ImageContainer, Paragraph, Redden} from "./styles/globalStyles";
import {AboutContainer} from "./styles/aboutStyles";


const About = ({onCursor}) => {
    let aboutImage = useRef(null);
    let aboutText = useRef(null);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(aboutImage.current,
            {
                scrollTrigger: {
                    trigger: aboutImage.current,
                    start: 'top center'
                },
                opacity: 1,
                duration: 1,
                x: 0,
            });
        gsap.to(aboutText.current, {
            scrollTrigger: {
                trigger: aboutImage.current,
                start: 'top center'
            },
            opacity: 1,
            duration: .7,
            x: 0,
        })
    })

    const image = useStaticQuery(graphql`
    query {
        me: file(relativePath: {eq: "laptop.jpg"}) {
            id
            childImageSharp {
            fluid(maxWidth: 5000) {
                ...GatsbyImageSharpFluid
        }
    }
  }
 }
 `);

    return (
        <AboutContainer>
            <Grid num={['1.5fr 2fr']}>
                <ImageContainer ref={aboutImage} style={{opacity: 0, transform: 'translateX(100px)'}}>
                    <Img fluid={image.me.childImageSharp.fluid}/>
                </ImageContainer>
                <Container fluid style={{height: 'auto', opacity: 0, transform: 'translateX(-100px)'}} ref={aboutText} >
                    <HeaderThree>A little about me</HeaderThree>
                    <HeaderFive><Redden>"People ignore design that ignores people"<br/>
                        ---Frank Chimero</Redden></HeaderFive>
                    <Paragraph>
                        Being very inquisitive and a person who liked to ask so many questions as a child, I have always
                        wanted to figure out how things worked and help make them better. Learning web design has always
                        been a very exciting journey for me; enabling me put myself in users' shoes and make sure those
                        potential users, visit a website that works and leave the websites with a great experience.
                        I am currently a freelance web developer based in Accra, Ghana. I have worked on projects in
                        areas
                        of leasing, creative design, portfolios, logistics, E-commerce. Web design and development is my
                        way
                        of feeling alive. And I make it my topmost priority to learn more about it each and every day.
                        You can always reach out to me <Link to='/#contact' onMouseEnter={() => onCursor('hovered')}
                                                             onMouseLeave={onCursor}>here.</Link></Paragraph>
                </Container>
            </Grid>
        </AboutContainer>
    );
};

export default About;
