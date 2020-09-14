import React, {useEffect, useRef, useState} from 'react';
import {Cursor} from "./styles/globalStyles";

//Context



const CustomCursor = () => {

    let cursorRef = useRef(null);

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
                cursorRef.current.classList.add('clicked');
                setTimeout(() => {
                    cursorRef.current.classList.remove('clicked');
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
                style={{left: `${mousePointer.x}px`, top: `${mousePointer.y}px`}}
            />
        </>
    );
};

export default CustomCursor;
