import React from "react";
import "./card.modules.css"

interface CardProps {
    name : string,
    img : string,
    status : string,
    species : string
}


const Card : React.FC<CardProps> = (props : CardProps) => {
    return (
        <>
        <div className="cardBox">
            <img src={props.img} alt="" />
            <div className="title">
                <a>
                    {props.name}
                </a>
                <img src="../../src/assets/img/rick_icon.svg" alt="" />
            </div>
            <ul className="stats">
                <li>
                    <img src="../../src/assets/img/nave.svg" alt="" />
                    Status: {props.status}
                </li>
                <li>
                    <img src="../../src/assets/img/nave.svg" alt="" />
                    Species: {props.species} 
                </li>
            </ul>
        </div>
        </>
    )
}
export default Card