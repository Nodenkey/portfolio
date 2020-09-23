import React from "react";

import {GlobalProvider} from "./src/context/globalContext";
import CustomCursor from "./src/components/customCursor";

export const wrapRootElement = ({element}) => {

    return (
        <GlobalProvider>
            <CustomCursor/>
            {element}
        </GlobalProvider>
    )
}
