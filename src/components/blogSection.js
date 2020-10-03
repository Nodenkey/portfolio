import React from 'react';
import {BlogSectionWrapper} from "../styles/blogSectionStyles";
import {HeaderThree} from "../styles/globalStyles";
import BlogList from "./blogList";

const BlogSection = () => {

    return (
        <BlogSectionWrapper>
            <HeaderThree style={{marginBottom: 50}}>Latest Blog Posts</HeaderThree>
            <BlogList slice={true}/>
        </BlogSectionWrapper>
    );
};

export default BlogSection;
