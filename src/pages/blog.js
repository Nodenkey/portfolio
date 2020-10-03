import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogBanner from "../components/blogBanner";
import BlogList from "../components/blogList";
import BlogIntroText from "../components/blogIntro";
import BlogFilter from "../components/blogFilter";

const BlogPage = () => {
    return (
        <Layout>
            <SEO title="Blog"/>
            <BlogBanner/>
            <BlogIntroText/>
            <BlogFilter/>
            <BlogList slice={false}/>
        </Layout>
    );
};

export default BlogPage;
