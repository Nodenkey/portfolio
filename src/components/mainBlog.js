import React from 'react';
import {BlogBody, BlogHead, BlogSheet, BlogTemplateWrapper} from "../styles/mainBlogStyles";
import {Tag} from "../styles/blogCardStyles";
import {v4 as uuidv4} from "uuid";
import {Flex, GreyedParagraph, HeaderFour, Paragraph} from "../styles/globalStyles";


const MainBlog = ({tags, date, title, summary, time, body, image}) => {

    return (
        <BlogTemplateWrapper>
            <img src={require(`../images/${image}`)} alt="tag"/>
            <BlogSheet>
                <BlogHead>
                    <Flex center>
                        {
                            tags.map(tag =>
                                <Tag tag={tag} key={uuidv4()}>{tag}</Tag>
                            )
                        }
                    </Flex>
                    <GreyedParagraph>{date}</GreyedParagraph>
                    <HeaderFour>{title}</HeaderFour>
                    <Paragraph>{summary}</Paragraph>
                    <GreyedParagraph>{time} min read</GreyedParagraph>
                </BlogHead>
                <BlogBody dangerouslySetInnerHTML={{__html: body}}/>
            </BlogSheet>
        </BlogTemplateWrapper>
    );
};

export default MainBlog;
