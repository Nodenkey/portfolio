import React, {createContext, useReducer, useContext} from "react";


//Define the contexts
const GlobalStateContext = createContext('');
const GlobalDispatchContext = createContext(undefined);

//Reducer
const globalReducer = (state, action) => {
    switch (action.type){
        case 'TOGGLE_CURSOR': {
            return {
                ...state, cursorType: action.cursor
            }
        }
        default: {
            return state
        }
    }
}

//Create provider to provide states to whole app
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, {
        cursorType: false,
        cursorStyles: ["pointer", "hovered"],
        menu: false,
    })
    return (
            <GlobalStateContext.Provider value={state}>
                <GlobalDispatchContext.Provider value={dispatch}>
                {children}
                </GlobalDispatchContext.Provider>
            </GlobalStateContext.Provider>
    )
}

//Custom hooks to use state
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);


