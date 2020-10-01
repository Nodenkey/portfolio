import {createContext} from 'react';

const TagContext = createContext({
    tag: 'All Tags',
    changeTag: () => {},
    allTags: []
});

export default TagContext;
