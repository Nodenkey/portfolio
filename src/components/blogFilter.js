import React, {useContext} from 'react';
import {FilterWrapper} from "../styles/blogFilterStyles";
import {Tag} from "../styles/blogCardStyles";
import {v4 as uuid4} from "uuid";
import TagContext from "../context/tagContext";
import TagComponent from "./TagComponent";

const BlogFilter = ({onCursor}) => {
    const {tag, changeTag, allTags} = useContext(TagContext);

    return (
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
    );
};

export default BlogFilter;
