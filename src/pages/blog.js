import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogBanner from "../components/blogBanner";
import BlogList from "../components/blogList";
import BlogIntroText from "../components/blogIntro";

const BlogPage = () => {
    return (
        <Layout>
            <SEO title="Blog"/>
            <BlogBanner/>
            <BlogIntroText/>
            <BlogList/>
        </Layout>
    );
};

export default BlogPage;
