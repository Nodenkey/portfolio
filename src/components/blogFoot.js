import React, {useContext, useRef, useState} from 'react';
import Direction from "./direction";
import {Flex} from "../styles/globalStyles";
import TagContext from "../context/tagContext";

const BlogFoot = ({data, next, onCursor}) => {
    const path = `/blog/${next.fields.slug}`;
    const post = data.markdownRemark;
    const {tag} = useContext(TagContext);
    const [included, setIncluded] = useState(false);


    return (
        <Flex spaceBetween>
            <Direction path="/blog" text="back to blog" direction="left" onCursor={onCursor}/>
            {
                next && (next.frontmatter.tags.map(currentTag => (
                    post.frontmatter.tags.includes(currentTag) || tag === 'All Tags' ?
                        setIncluded(true) : null
                    )
                ))
            }
            {
                console.log(included)
            }
            {
                included ? (
                    <Direction path={path} text="keep reading . . ." text2={next.frontmatter.title}
                               direction="right" onCursor={onCursor}/>
                ) : <></>
            }
        </Flex>
    );
};

export default BlogFoot;


