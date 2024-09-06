import React from "react";
import style from "./pcard.module.css"

interface PlanetProps {
    pName : string,
    pDimension : string,
    pType : string
}

const PlanetCard : React.FC<PlanetProps> = (props : PlanetProps) => {
    return (
        <>
        <div className={style.pCard}>
            <img id={style.galaxy} src="../../src/assets/img/galaxy.png" alt="" />
            <a className={style.title}>Origin</a>
            <ul>
                <li>
                    <img className={style.planet} src="../../src/assets/img/planet.png" alt="" />
                    Planet: {props.pName}
                </li>
                <li>
                    <img className={style.planet} src="../../src/assets/img/planet.png" alt="" />
                    Dimension: {props.pDimension}
                </li>
                <li>
                    <img className={style.planet} src="../../src/assets/img/planet.png" alt="" />
                    Type: {props.pType}
                </li>
            </ul>    
        </div>
        </>
    )
}

export default PlanetCard;