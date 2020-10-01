import React from 'react';
import {BlogCardTextArea, BlogCardWrapper,BlogTitle, Date, Rule, Tag} from "../styles/blogCardStyles";
import {Flex, GreyedParagraph} from "../styles/globalStyles";
import {v4 as uuidv4} from "uuid";

const BlogCard = ({title, date, summary, image, tags}) => {

    return (
        <BlogCardWrapper>
            <img src={require(`../images/${image}`)} alt="blog"/>
            <BlogCardTextArea>
                <Flex wrapContainer>
                    {
                        tags.map(tag =>
                            <Tag tag={tag} key={uuidv4()}>{tag}</Tag>
                        )
                    }
                </Flex>
                <BlogTitle>{title}</BlogTitle>
                {/*<GreyedParagraph>{summary}</GreyedParagraph>*/}
                <Rule/>
                <Date>{date}</Date>
            </BlogCardTextArea>
        </BlogCardWrapper>
    );
};

export default BlogCard;
