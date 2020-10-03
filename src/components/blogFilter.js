import React, {useContext} from 'react';
import {FilterWrapper} from "../styles/blogFilterStyles";
import {v4 as uuid4} from "uuid";
import TagContext from "../context/tagContext";
import TagComponent from "./tagComponent";
import {Container} from "../styles/globalStyles";

const BlogFilter = ({onCursor}) => {
    const {tag, changeTag, allTags} = useContext(TagContext);

    return (
        <Container style={{padding: 0}}>
            <FilterWrapper wrapContainer>
                {
                    allTags.map(currentTag =>
                        <TagComponent
                            active={currentTag === tag}
                            onCursor={onCursor}
                            changeTag={changeTag}
                            name={currentTag}
                            key={uuid4()}
                        >{tag}</TagComponent>
                    )
                }

            </FilterWrapper>
        </Container>
    );
};

export default BlogFilter;
