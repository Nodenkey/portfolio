import React, {useEffect} from 'react';
import Layout from "../components/layout";
import {graphql} from "gatsby";
import MainBlog from "../components/mainBlog";
import BlogFoot from "../components/blogFoot";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";


//use graphql to query the content with the slug as a variable which remember is passed down via the createPage's context
// this time, you cannot use useStaticQuery as it does not work well with the context variables
export const query = graphql`
        query($slug: String!){
            markdownRemark(
            fields : {
                slug : {
                    eq: $slug
                }
            }
            )
            {
            frontmatter {
                title
                date
                tags
                summary 
                image
            }
            timeToRead
            html
            }
        }
    `

const BlogTemplate = ({data, pageContext}) => {

    useEffect(() => {
        deckDeckGoHighlightElement();
    }, [])

    const frontmatter = data.markdownRemark.frontmatter;
    const tags = frontmatter.tags;
    const date = frontmatter.date;
    const title = frontmatter.title;
    const summary = frontmatter.summary;
    const image = frontmatter.image;
    const time = data.markdownRemark.timeToRead;
    const body = data.markdownRemark.html;
    const {next} = pageContext


    return (
        <Layout>
            <MainBlog tags={tags} date={date} title={title} summary={summary} time={time} body={body} image={image}/>
            <BlogFoot next={next} data={data}/>
        </Layout>
    );
};

export default BlogTemplate;
