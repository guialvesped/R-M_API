import React from "react";
import "./card.modules.css"
import icon_rick from "../../assets/img/rick_icon.svg"
import nave from "../../assets/img/nave.svg"

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
                <img src={icon_rick} alt="" />
            </div>
            <ul className="stats">
                <li>
                    <img src={nave} alt="" />
                    Status: {props.status}
                </li>
                <li>
                    <img src={nave} alt="" />
                    Species: {props.species} 
                </li>
            </ul>
        </div>
        </>
    )
}
export default Card