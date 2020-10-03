import React, {useContext, useEffect, useRef} from 'react';
import {graphql, Link, useStaticQuery} from "gatsby";
import {v4 as uuidv4} from "uuid";
import BlogCard from "./blogCard";
import {Grid} from "../styles/globalStyles";
import {BlogListWrapper} from "../styles/blogListStyles";
import {gsap, ScrollTrigger} from "gsap/all";
import TagContext from "../context/tagContext";

const BlogList = ({slice}) => {
    const wrapper = useRef(null);
    const {tag} = useContext(TagContext);

    const blogData = useStaticQuery(graphql`
        query {
            allMarkdownRemark (sort: {fields: [frontmatter___date], order: DESC}) {
                edges {
                    node {
                        frontmatter {
                            title
                            date(formatString: "MMMM DD, YYYY")
                            summary
                            tags
                            image
                        }
                        timeToRead
                        html
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(wrapper.current, {
            scrollTrigger: {
                trigger: wrapper.current,
                start: '-100px 50%'
            },
            duration: 2,
            y: 100,
            opacity: 0,
            stagger: .4
        })
    }, []);

    return (
        <BlogListWrapper ref={wrapper}>
            <Grid layout num={["repeat(auto-fit, 350px)"]} gap='50px' gapPhone='50px'>
                {
                    slice ?
                        blogData.allMarkdownRemark.edges.slice(0,3).filter(({node}) =>
                            tag === 'All Tags' ? node : node.frontmatter.tags.includes(tag)
                        ).map(({node}) => {
                            const frontmatter = node.frontmatter;
                            const title = frontmatter.title;
                            const date = frontmatter.date;
                            const summary = frontmatter.summary;
                            const tags = frontmatter.tags;
                            const image = frontmatter.image;
                            const path = `/blog/${node.fields.slug}`;
                            return <div key={uuidv4()}><Link to={path}><BlogCard title={title} date={date} summary={summary}
                                                                                 tags={tags} image={image}/></Link></div>
                        }) :
                        blogData.allMarkdownRemark.edges.filter(({node}) =>
                            tag === 'All Tags' ? node : node.frontmatter.tags.includes(tag)
                        ).map(({node}) => {
                            const frontmatter = node.frontmatter;
                            const title = frontmatter.title;
                            const date = frontmatter.date;
                            const summary = frontmatter.summary;
                            const tags = frontmatter.tags;
                            const image = frontmatter.image;
                            const path = `/blog/${node.fields.slug}`;
                            return <div key={uuidv4()}><Link to={path}><BlogCard title={title} date={date} summary={summary}
                                                                                 tags={tags} image={image}/></Link></div>
                        })
                }
            </Grid>
        </BlogListWrapper>
    );
};

export default BlogList;
