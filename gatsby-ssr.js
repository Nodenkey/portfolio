import React from "react";

import {GlobalProvider} from "./src/context/globalContext";
import CustomCursor from "./src/components/customCursor";
import TagRoot from "./src/components/tagRoot";

export const wrapRootElement = ({element}) => {

    return (
        <GlobalProvider>
            <CustomCursor/>
            <TagRoot>
                {element}
            </TagRoot>
        </GlobalProvider>
    )
}
