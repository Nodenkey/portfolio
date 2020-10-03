import React, {useContext, useEffect, useState} from 'react';
import Direction from "./direction";
import {Flex} from "../styles/globalStyles";
import TagContext from "../context/tagContext";

const BlogFoot = ({data, next, onCursor}) => {
    // const path = `/blog/${next.fields.slug}`;
    const post = data.markdownRemark;
    const {tag} = useContext(TagContext);
    const [included, setIncluded] = useState(false);

    useEffect(() => {
        next && (next.frontmatter.tags.map(nextTag =>
            (post.frontmatter.tags.includes(nextTag) || tag === 'All Tags') ?
                setIncluded(true) : null
        ))
    }, []);



    return (
        <Flex spaceBetween>
            <Direction path="/blog" text="back to blog" direction="left" onCursor={onCursor}/>
            {/*{*/}
            {/*    included ? <Direction path={path} text="keep reading . . ." text2={next.frontmatter.title}*/}
            {/*                          direction="right" onCursor={onCursor}/>*/}
            {/*        : <></>*/}
            {/*}*/}
        </Flex>
    );
};

export default BlogFoot;


