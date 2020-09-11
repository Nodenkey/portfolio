import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {ThemeProvider} from "styled-components";
import {document, window} from 'browser-monads';


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
 background-color: ${props => props.theme ? props.theme.background : 'black'};
 color: ${props => props.theme ? props.theme.primaryTextColor : 'white'};
 overflow-x: hidden;
 }
`;


const Layout = ({children}) => {

    // Menu
    const [toggleMenu, setToggleMenu] = useState(false);

    //Hover mouse
    const [hovered, setHovered] = useState(false);

    const makeHovered = () => {
        setHovered(true);
    }
    const unHover = () => {
        setHovered(false);
    }

    //Theme
    const [currentTheme, setCurrentTheme] = useState(window.localStorage.getItem( 'theme') || 'dark');

    const toggleTheme = () => {
        if (currentTheme === 'dark'){
            setCurrentTheme('light');
            window.localStorage.setItem('theme', 'light');
        }else{
            setCurrentTheme('dark');
            window.localStorage.setItem('theme', 'dark');
        }
    }


    return (
        <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
            <GlobalStyle/>
            <CustomCursor hovered={hovered}/>
            <Header makeHovered={makeHovered} unHover={unHover} toggleTheme={toggleTheme} currentTheme={currentTheme}/>
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
