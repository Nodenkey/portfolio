import React from 'react';
import {Circle, Container, HeaderFive} from "../styles/globalStyles";

const BlogIntroText = () => {
    return (
        <Container style={{position: "relative"}}>
            <HeaderFive style={{padding: "100px 0 0", maxWidth: 1000}}>My blog is where I share my experiences, tips and
                tricks I learnt during my coding journey and my general thoughts on some web development topics. Please do enjoy the
                read.</HeaderFive>
            <Circle size="300px" top="20px" left="10px"/>
            <Circle size="100px" right="200px" bottom="-70px"/>
        </Container>
    );
};

export default BlogIntroText;
