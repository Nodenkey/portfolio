import React from "react";

import {GlobalProvider} from "./src/context/globalContext";
import {ThemeProvider} from "styled-components";
import {useDarkMode} from "./src/custom-hooks/custom-hook";
import {darkTheme, lightTheme} from "./src/utils";

export const wrapRootElement = ({element}) => {
    const [theme] = useDarkMode();
    const themeMode = theme === 'default' ? darkTheme : lightTheme;

    return (
        <GlobalProvider>
            <ThemeProvider theme={themeMode}>
                {element}
            </ThemeProvider>
        </GlobalProvider>
    )
}
