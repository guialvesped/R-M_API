import React from "react";
import linkedin from "../../assets/img/linkedin.svg"
import insta from "../../assets/img/insta.svg"
import gitHub from "../../assets/img/github.svg"
import style from "./header.module.css"

const Header : React.FC = () => {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li className={style.contato}>
                        <a href="https://www.linkedin.com/in/guialvesped/" target="blank">
                            <img src={linkedin} alt="" />
                            <a className={style.text}>
                                Guilherme Alves Pedroso
                            </a>
                        </a>
                    </li>
                    <li className={style.contato}>
                        <a href="https://github.com/guialvesped" target="blank">
                            <img src={gitHub} alt="" />
                            <a className={style.text}>
                                @guialvesped
                            </a>
                        </a>
                    </li>
                    <li className={style.contato}>
                        <a href="https://www.instagram.com/g__alves_/" target="blank">
                            <img src={insta} alt="" />
                            <a className={style.text}>
                                @g__alves_
                            </a>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}
export default Header;