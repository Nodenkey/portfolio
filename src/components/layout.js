import React, {useEffect, useState, useContext} from "react"
import PropTypes from "prop-types"
import {ThemeProvider} from "styled-components";
import {document, window} from 'browser-monads';
import {useGlobalStateContext, GlobalStateContext} from "./context/globalContext";


//styled components
import {createGlobalStyle} from "styled-components";
import {normalize} from "styled-normalize";
import {darkTheme, lightTheme, palette} from "../utils";
import "../components/styles/layout.css";
import Header from "./header";
import CustomCursor from "./customCursor";
// import Header from "./header";
// import CustomCursor from "./customCursor";


const GlobalStyle = createGlobalStyle`
  ${normalize}
  *{
  text-decoration: none;
  cursor: none !important;
  } 
  a{
    color: ${palette.radical};
  }
 html {
  box-sizing: border-box;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
 }
 body {
 font-family: Numans, sans-serif;
 background-color: ${props => props.theme.background};
 color: ${props => props.theme.primaryTextColor};
 overflow-x: hidden;
 }
`;


const Layout = ({children}) => {

    const {currentTheme} = useGlobalStateContext();
    console.log('layout', currentTheme)
    console.log('the type', typeof currentTheme);

    return (
            <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
                {
                    console.log('inward', currentTheme)
                }
                <GlobalStyle/>
                <CustomCursor/>
                <Header/>
                <main>{
                    children
                }</main>
            </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
