import React, {useEffect, useRef, useState} from 'react';
import {Cursor} from "../styles/globalStyles";

//Context
import {useGlobalStateContext} from "../context/globalContext";



const CustomCursor = () => {

    let cursorRef = useRef(null);
    const  {cursorType} = useGlobalStateContext();

    const [mousePointer, setMousePointer] = useState({
        x: 400,
        y: 400,
    })


    const onMouseMove = event => {
       const {clientX: x, clientY: y} = event;
       setMousePointer({x, y});
    }

    useEffect(() => {
        typeof window !== undefined && cursorRef.current !== null ?
            window.onclick = () => {
            cursorRef.current.classList && cursorRef.current.classList.add('clicked');
            setTimeout(() => {
                cursorRef.current && cursorRef.current.classList.remove('clicked');
            }, 600)
        }: console.log();

        document.addEventListener('mousemove', onMouseMove)
        return () => {
            document.removeEventListener('mousemove', onMouseMove)
        };
    }, []);

    return (
        <>
         <Cursor
             id="cursor"
             ref={cursorRef}
             className={`${!!cursorType ? 'hovered' : ''}`}
             style={{left: `${mousePointer.x}px`, top: `${mousePointer.y}px`}}
         />
        </>
    );
};

export default CustomCursor;
