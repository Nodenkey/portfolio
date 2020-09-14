import React, {createContext, useReducer, useContext} from "react";


//Define the contexts
const GlobalStateContext = createContext('dark');
const GlobalDispatchContext = createContext(undefined);

//Reducer
const globalReducer = (state, action) => {
    switch (action.type){
        case 'TOGGLE_THEME': {
            return {
                ...state, currentTheme: action.theme
            }
        }
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
        currentTheme: typeof window !== undefined && window.localStorage.getItem('theme') == null ?
            'dark': window.localStorage.getItem('theme'),
        cursorType: false,
        cursorStyles: ["pointer", "hovered"],
        menu: false,
    })
    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
}

//Custom hooks to use state
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);


