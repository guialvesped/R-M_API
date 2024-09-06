import React from "react";
import style from "./pcard.module.css"
import galaxy from "../../assets/img/galaxy.png"
import planet from "../../assets/img/planet.png"

interface PlanetProps {
    pName : string,
    pDimension : string,
    pType : string
}

const PlanetCard : React.FC<PlanetProps> = (props : PlanetProps) => {
    return (
        <>
        <div className={style.pCard}>
            <img id={style.galaxy} src={galaxy} alt="" />
            <a className={style.title}>Origin</a>
            <ul>
                <li>
                    <img className={style.planet} src={planet} alt="" />
                    Planet: {props.pName}
                </li>
                <li>
                    <img className={style.planet} src={planet} alt="" />
                    Dimension: {props.pDimension}
                </li>
                <li>
                    <img className={style.planet} src={planet} alt="" />
                    Type: {props.pType}
                </li>
            </ul>    
        </div>
        </>
    )
}

export default PlanetCard;