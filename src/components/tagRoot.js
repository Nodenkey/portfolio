import React, { useState } from "react";
import TagContext from "../context/tagContext";

const TagRoot = ({ children }) => {
    const [tag, setTag] = useState('All Tags');
    const allTags = ['All Tags', 'Gatsby', 'React', 'Javascript'];
    const changeTag = tag => setTag(tag);

    return (
        <TagContext.Provider value={{
            tag,
            changeTag,
            allTags
        }}>
            {children}
        </TagContext.Provider>
    );
}

export default TagRoot;
