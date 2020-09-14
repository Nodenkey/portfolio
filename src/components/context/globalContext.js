import React, {createContext, useContext, useEffect, useReducer, useState} from 'react';
import {window} from "browser-monads";
import Layout from "../layout";

//constants import
import {TOGGLE_THEME} from "./constants";


//Create global context
export const GlobalStateContext = createContext('');
export const GlobalDispatchContext = createContext('');


//Reducer
const globalReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_THEME :
            return {
                ...state, currentTheme: action.theme
            }
        default:
            return state
    }
}


//Create context provider function
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, {
        currentTheme: localStorage.getItem('theme')
    }, () => {
        const localData = localStorage.getItem('theme');
        return localData ? {currentTheme: localData} : {currentTheme: 'dark'};
    })

    //save theme in localStorage
    useEffect(() => {
        localStorage.setItem('theme', state.currentTheme);
        console.log(state.currentTheme);
    }, [state.currentTheme]);

    return (
        //return global context with state
        <GlobalDispatchContext.Provider value={{dispatch}}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>

    );
}

// custom hook to use states
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);

