import React from 'react';
import {DirectionContainer} from "../styles/directionStyles";
import {VisitWebsite} from "../styles/projectStyles";
import {HeaderFour} from "../styles/globalStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "gatsby"
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Direction = ({onCursor, path, text, text2, direction}) => {
    return (
        <DirectionContainer direction={direction}>
            <Link to={path}><VisitWebsite direction={direction}
                onMouseEnter={() => onCursor('hovered')}
                onMouseLeave={onCursor} onClick={onCursor}
            >
                {
                    direction === "left" && <FontAwesomeIcon icon={faArrowLeft}/>
                }
                <div>
                    <HeaderFour>{text}</HeaderFour>
                    {
                        text2 && <HeaderFour className="title">{text2}</HeaderFour>
                    }
                </div>
                {
                    direction === "right" && <FontAwesomeIcon icon={faArrowRight}/>
                }
            </VisitWebsite>
            </Link>
        </DirectionContainer>
    );
};

export default Direction;
