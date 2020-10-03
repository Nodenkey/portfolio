import React from 'react';
import {Tag} from "../styles/blogCardStyles";

const TagComponent = ({onCursor, active, changeTag, name}) => {
    const filterClick = () => {
        changeTag(name);
        onCursor();
    }

    return (
        <Tag
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={onCursor}
            active={active}
            onClick={filterClick}
            >
            {name}
        </Tag>
    );
};

export default TagComponent;
