const React = require("react");

const {GlobalProvider} = require("./src/context/globalContext");

export const wrapRootElement = ({element}) => {
    return (
        <GlobalProvider>
            {element}
        </GlobalProvider>
    )
}
