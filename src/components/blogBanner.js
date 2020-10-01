import React, {useEffect, useRef} from 'react';
import {BannerWindow, BlogBannerText, BlogBannerWrapper} from "../styles/blogStyles";
import Img from "gatsby-image";
import {graphql, useStaticQuery} from "gatsby";
import {HeaderThree, Overlay} from "../styles/globalStyles";
import {gsap} from "gsap/all";

const BlogBanner = () => {
    const bannerWindow = useRef(null);
    const bannerText = useRef(null);

    const banner = useStaticQuery(graphql`
        query {
            bannerImage: file(relativePath: {eq: "images/blog.jpg"}) {
                id
                childImageSharp {
                    fluid(maxWidth: 5000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(bannerWindow.current, {duration: .5, delay: .5, scaleY: 0, transformOrigin: "top"})
            .to(bannerText.current, {duration: .5, opacity: 1, y: 0})
    }, [])


    return (
        <BlogBannerWrapper>
            <Img fluid={banner.bannerImage.childImageSharp.fluid} alt="blog banner"
                 imgStyle={{objectPosition: "top center"}}/>
            <Overlay/>
            <BlogBannerText vertical center ref={bannerText}>
                <HeaderThree>Welcome to my blog!</HeaderThree>
            </BlogBannerText>
            <BannerWindow ref={bannerWindow}/>
        </BlogBannerWrapper>
    );
};

export default BlogBanner;
