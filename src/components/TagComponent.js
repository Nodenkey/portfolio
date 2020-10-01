import React from 'react';
import {Tag} from "../styles/blogCardStyles";

const TagComponent = ({onCursor, active, changeTag, name}) => {
    return (
        <Tag
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={onCursor}
            active={active}
            onClick={() => changeTag(name)}
            >
            {name}
        </Tag>
    );
};

export default TagComponent;
