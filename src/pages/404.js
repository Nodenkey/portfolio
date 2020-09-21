import React, {useEffect} from "react"
import {Link} from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
    ErrorButton,
    ErrorImageContainer,
    ErrorText,
    ErrorWrapper
} from "../components/styles/errorStyles";
import {ErrorImage} from "../components/svg";
import {gsap} from "gsap/all";
import {HeaderThree, Paragraph} from "../components/styles/globalStyles";

const NotFoundPage = () => {

    useEffect(() => {
        gsap.to('#boy-torso', {rotate: -10, transformOrigin: 'bottom right', duration: 1, yoyo: true, repeat: -1});
        gsap.to('#woman-torso', {
            rotate: -10,
            transformOrigin: 'bottom',
            duration: 1,
            yoyo: true,
            repeat: -1,
            delay: 1
        });
        gsap.to('#right-lens', {
            rotate: -4,
            transformOrigin: 'bottom 50%',
            duration: 1,
            yoyo: true,
            repeat: -1,
            delay: 2
        });
    });
    return (
        <Layout>
            <SEO title="404: Not found"/>
            <ErrorWrapper>
                <ErrorText>
                    <HeaderThree style={{color: 'white'}}>We searched everywhere</HeaderThree>
                    <Paragraph style={{color: 'grey'}}>The page you are looking for is missing. It might have been removed or you entered an
                        incorrect address. <br/>
                        You can return home by clicking the button below</Paragraph>
                    <Link to='/'>
                        <ErrorButton
                            style={{display: 'inline'}}
                        >Take me home</ErrorButton>
                    </Link>
                </ErrorText>
                <ErrorImageContainer>
                    <ErrorImage/>
                </ErrorImageContainer>
            </ErrorWrapper>
        </Layout>
    )
}

export default NotFoundPage
